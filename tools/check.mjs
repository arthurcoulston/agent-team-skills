#!/usr/bin/env node
// Structural checks over a collection tree: metadata format, reference
// resolution, identifier consistency, prose citations, behavioural cases and
// the run records they produce, and the scan for machine-local paths that
// PUBLIC-BOUNDARY.md forbids.
//
//   node tools/check.mjs [root]      (root defaults to the repository)
//
// Exits 0 when clean, 1 with a named finding per problem. The deliberately
// broken trees under tools/fixtures/ prove each rule can go red; run them
// with tools/check-fixtures.mjs.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const root = resolve(process.argv[2] ?? join(HERE, '..'));

const KIND_PATH = {
  knowledge: (id) => join('knowledge', `${id}.md`),
  evidence: (id) => join('evidence', `${id}.md`),
  case: (id) => join('cases', `${id}.md`),
  skill: (id) => join('skills', id, 'SKILL.md'),
};
// The kind names a ref uses are singular; two of the directories are not.
const FLAT_DIR = { knowledge: 'knowledge', evidence: 'evidence', case: 'cases' };
const STATUSES = ['exemplar', 'draft', 'accepted', 'superseded'];
const RELATION_TYPES = ['applies_to', 'supports', 'depends_on', 'supersedes'];
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const IDENTIFIER = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const TYPED_REF = /^(knowledge|evidence|case|skill):(.+)$/;
// The two variants a behavioural run compares; a record missing either is not
// a comparison, and cannot serve as the baseline a later judgement needs.
const RUN_VARIANTS = ['baseline', 'with-skill'];

// What the local-path scan reads: not a list of what may live here, a list of
// what can be read as text.
const SCANNED_EXTENSIONS = ['.md', '.mjs', '.js', '.json', '.yml', '.yaml', '.txt'];
// Fixtures are deliberately broken and carry fictional local paths on
// purpose; the fixture runner points this checker at each of them directly.
const SKIPPED = ['.git', 'node_modules', join('tools', 'fixtures')];
// Holds the local-path patterns as data so this file can state the rule
// without tripping it. It is the checker's own configuration, so it is read
// from beside the checker and not from whatever tree is being scanned.
const PATTERN_FILE = join(HERE, 'local-path-patterns.txt');

const findings = [];
const report = (file, rule, message) => findings.push({ file, rule, message });

// ---------------------------------------------------------------- YAML

// Enough YAML for the frontmatter LAYOUT.md defines: scalars, nested maps,
// lists of maps, and folded/literal block scalars. Not a general parser — it
// is deliberately small so it has no dependency and no surprises.
function parseYaml(text) {
  const [value] = parseNode(text.split('\n'), 0, 0);
  return value ?? {};
}

const indentOf = (line) => line.length - line.trimStart().length;

function skipBlank(lines, i) {
  while (i < lines.length && (lines[i].trim() === '' || /^\s*#/.test(lines[i]))) i++;
  return i;
}

function parseNode(lines, i, minIndent) {
  i = skipBlank(lines, i);
  if (i >= lines.length || indentOf(lines[i]) < minIndent) return [null, i];
  const indent = indentOf(lines[i]);
  return lines[i].trimStart().startsWith('- ')
    ? parseList(lines, i, indent)
    : parseMap(lines, i, indent);
}

function parseMap(lines, i, indent) {
  const out = {};
  for (;;) {
    i = skipBlank(lines, i);
    if (i >= lines.length || indentOf(lines[i]) !== indent) break;
    const m = /^([A-Za-z_][\w-]*):(?:\s+(.*))?$/.exec(lines[i].trim());
    if (!m) break;
    const key = m[1];
    const rest = (m[2] ?? '').trim();
    i++;
    if (['>', '|', '>-', '|-'].includes(rest)) {
      const parts = [];
      while (i < lines.length && (lines[i].trim() === '' || indentOf(lines[i]) > indent)) {
        parts.push(lines[i].trim());
        i++;
      }
      while (parts.length && parts.at(-1) === '') parts.pop();
      out[key] = rest[0] === '>' ? parts.join(' ').trim() : parts.join('\n');
    } else if (rest === '') {
      const [value, next] = parseNode(lines, i, indent + 1);
      out[key] = value;
      i = next;
    } else {
      out[key] = scalar(rest);
    }
  }
  return [out, i];
}

function parseList(lines, i, indent) {
  const out = [];
  for (;;) {
    i = skipBlank(lines, i);
    if (i >= lines.length || indentOf(lines[i]) !== indent) break;
    if (!lines[i].trimStart().startsWith('- ')) break;
    const item = [' '.repeat(indent + 2) + lines[i].trimStart().slice(2)];
    i++;
    while (i < lines.length) {
      if (lines[i].trim() === '' || /^\s*#/.test(lines[i])) { item.push(lines[i]); i++; continue; }
      if (indentOf(lines[i]) <= indent) break;
      item.push(lines[i]);
      i++;
    }
    if (/^[A-Za-z_][\w-]*:(\s|$)/.test(item[0].trim())) {
      const [value] = parseNode(item, 0, indent + 2);
      out.push(value);
    } else {
      out.push(scalar(item[0].trim()));
    }
  }
  return [out, i];
}

function scalar(raw) {
  let s = raw.trim();
  const quoted = (s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"));
  if (quoted) return s.slice(1, -1);
  const comment = s.indexOf(' #');
  if (comment >= 0) s = s.slice(0, comment).trim();
  return s;
}

function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/.exec(text);
  return m ? parseYaml(m[1]) : null;
}

// ------------------------------------------------------------ discovery

function listDir(dir) {
  return existsSync(dir) ? readdirSync(dir).sort() : [];
}

function walk(dir, out = []) {
  for (const name of listDir(dir)) {
    const path = join(dir, name);
    const rel = relative(root, path);
    if (SKIPPED.some((s) => rel === s || rel.startsWith(s + sep))) continue;
    if (statSync(path).isDirectory()) walk(path, out);
    else out.push(path);
  }
  return out;
}

function collectEntries() {
  const entries = [];
  for (const name of listDir(join(root, 'skills'))) {
    const dir = join(root, 'skills', name);
    if (!statSync(dir).isDirectory()) continue;
    const path = join(dir, 'SKILL.md');
    if (existsSync(path)) entries.push({ kind: 'skill', id: name, path });
    else report(relative(root, dir), 'skill-entrypoint-missing', 'skill directory has no SKILL.md');
  }
  for (const [kind, dir] of Object.entries(FLAT_DIR)) {
    for (const name of listDir(join(root, dir))) {
      if (!name.endsWith('.md')) continue;
      entries.push({ kind, id: name.slice(0, -3), path: join(root, dir, name) });
    }
  }
  for (const entry of entries) {
    entry.rel = relative(root, entry.path);
    entry.text = readFileSync(entry.path, 'utf8');
    entry.data = frontmatter(entry.text);
    entry.token = `${entry.kind}:${entry.id}`;
    if (!entry.data) report(entry.rel, 'frontmatter-missing', 'no YAML frontmatter delimited by ---');
  }
  return entries;
}

// -------------------------------------------------------------- metadata

const present = (entry, field, value) => {
  if (value === undefined || value === null || String(value).trim() === '') {
    report(entry.rel, 'field-missing', `required field '${field}' is missing or empty`);
    return false;
  }
  return true;
};

const isDate = (entry, field, value) => {
  if (!DATE.test(String(value))) {
    report(entry.rel, 'date-malformed', `'${field}' is '${value}', not a YYYY-MM-DD date`);
    return false;
  }
  return true;
};

function resolveRef(entry, field, ref) {
  const m = TYPED_REF.exec(String(ref));
  if (!m) {
    report(entry.rel, 'reference-malformed', `'${field}' is '${ref}', not <knowledge|evidence|skill>:<id>`);
    return null;
  }
  const [, kind, id] = m;
  const target = KIND_PATH[kind](id);
  if (!existsSync(join(root, target))) {
    report(entry.rel, 'reference-unresolved', `'${field}' points at '${ref}', and ${target} does not exist`);
    return null;
  }
  return `${kind}:${id}`;
}

function checkIdentifier(entry) {
  if (!IDENTIFIER.test(entry.id)) {
    report(entry.rel, 'identifier-format', `'${entry.id}' is not lower-case kebab; refs of the form <kind>:<id> stop resolving mechanically`);
  }
}

function checkSkill(entry) {
  const d = entry.data;
  if (present(entry, 'name', d.name) && d.name !== entry.id) {
    report(entry.rel, 'name-directory-mismatch', `frontmatter name is '${d.name}' but the directory is '${entry.id}'`);
  }
  present(entry, 'description', d.description);
}

function checkKnowledge(entry, refs) {
  const d = entry.data;
  if (present(entry, 'id', d.id) && d.id !== entry.id) {
    report(entry.rel, 'id-filename-mismatch', `frontmatter id is '${d.id}' but the filename stem is '${entry.id}'`);
  }
  present(entry, 'title', d.title);
  if (present(entry, 'status', d.status) && !STATUSES.includes(d.status)) {
    report(entry.rel, 'status-unknown', `status '${d.status}' is not one of ${STATUSES.join(', ')}`);
  }

  for (const [i, rel] of (Array.isArray(d.relations) ? d.relations : []).entries()) {
    const where = `relations[${i}]`;
    if (!RELATION_TYPES.includes(rel?.type)) {
      report(entry.rel, 'relation-type-unknown', `${where}.type is '${rel?.type}', not one of ${RELATION_TYPES.join(', ')}`);
    }
    const token = rel?.to === undefined ? null : resolveRef(entry, `${where}.to`, rel.to);
    if (token) refs.add(token);
  }

  const sources = Array.isArray(d.sources) ? d.sources : [];
  if (sources.length === 0) {
    report(entry.rel, 'sources-missing', 'a knowledge entry states what supports it; sources is empty');
  }
  for (const [i, source] of sources.entries()) {
    const where = `sources[${i}]`;
    present(entry, `${where}.title`, source?.title);
    if (present(entry, `${where}.source_date`, source?.source_date) && source.source_date !== 'unknown') {
      isDate(entry, `${where}.source_date`, source.source_date);
    }
    if (present(entry, `${where}.evidence_date`, source?.evidence_date)) {
      isDate(entry, `${where}.evidence_date`, source.evidence_date);
    }
    if (!present(entry, `${where}.evidence`, source?.evidence)) continue;
    const token = resolveRef(entry, `${where}.evidence`, source.evidence);
    if (!token) continue;
    refs.add(token);
    // The three dates never collapse, so the one date two files both record
    // has to agree between them.
    const record = frontmatter(readFileSync(join(root, KIND_PATH.evidence(token.split(':')[1])), 'utf8'));
    const recorded = record?.source_date;
    if (recorded !== undefined && String(recorded) !== String(source.source_date)) {
      report(entry.rel, 'source-date-disagreement', `${where}.source_date is '${source.source_date}' but ${token} records '${recorded}'`);
    }
  }

  if (present(entry, 'review.last_checked', d.review?.last_checked)) {
    isDate(entry, 'review.last_checked', d.review.last_checked);
  }
  present(entry, 'review.checked_by', d.review?.checked_by);

  const uncertainty = present(entry, 'uncertainty', d.uncertainty);
  const applicability = present(entry, 'applicability', d.applicability);
  if (uncertainty && applicability && d.uncertainty.trim() === d.applicability.trim()) {
    report(entry.rel, 'uncertainty-applicability-collapsed', 'uncertainty and applicability are the same text; how settled a finding is and where it holds are different questions');
  }
}

function checkEvidence(entry, refs) {
  const d = entry.data;
  if (present(entry, 'id', d.id) && d.id !== entry.id) {
    report(entry.rel, 'id-filename-mismatch', `frontmatter id is '${d.id}' but the filename stem is '${entry.id}'`);
  }
  for (const field of ['kind', 'source_title', 'read_by', 'method']) present(entry, field, d[field]);
  if (present(entry, 'read_on', d.read_on)) isDate(entry, 'read_on', d.read_on);
  if (d.source_date !== undefined && d.source_date !== 'unknown') isDate(entry, 'source_date', d.source_date);
  if (d.kind === 'behavioural_run') checkRun(entry, refs);
}

// A behavioural run is evidence about a model on a day, not about the
// guidance in general. Both halves of the comparison and the identity that
// produced them are what make it re-runnable; without either it is an
// anecdote wearing an evidence record's frontmatter.
function checkRun(entry, refs) {
  const d = entry.data;
  for (const field of ['model', 'harness']) {
    // Reported under its own rule rather than through present(), so one
    // missing identity is one finding and not two names for it.
    if (d[field] === undefined || d[field] === null || String(d[field]).trim() === '') {
      report(entry.rel, 'run-identity-missing', `a behavioural run records what produced it; '${field}' is not set, so this result cannot be compared with a later one`);
    }
  }
  present(entry, 'verdict', d.verdict);
  if (present(entry, 'case', d.case)) {
    const token = resolveRef(entry, 'case', d.case);
    if (token) refs.add(token);
  }
  const runs = Array.isArray(d.runs) ? d.runs : [];
  const variants = runs.map((r) => r?.variant);
  for (const wanted of RUN_VARIANTS) {
    if (!variants.includes(wanted)) {
      report(entry.rel, 'run-variants-incomplete', `no '${wanted}' run recorded; a case is run with and without the skill, and one half alone is not a comparison`);
    }
  }
  for (const [i, run] of runs.entries()) {
    present(entry, `runs[${i}].status`, run?.status);
    present(entry, `runs[${i}].exit_code`, run?.exit_code);
  }
}

// A case is the prompt plus what a reviewer judges the answers against. The
// '## Task' section is sent verbatim, so a case without one has no prompt.
function checkCase(entry, refs) {
  const d = entry.data;
  if (present(entry, 'id', d.id) && d.id !== entry.id) {
    report(entry.rel, 'id-filename-mismatch', `frontmatter id is '${d.id}' but the filename stem is '${entry.id}'`);
  }
  present(entry, 'title', d.title);
  present(entry, 'rubric', d.rubric);
  if (present(entry, 'status', d.status) && !STATUSES.includes(d.status)) {
    report(entry.rel, 'status-unknown', `status '${d.status}' is not one of ${STATUSES.join(', ')}`);
  }
  if (present(entry, 'skill', d.skill)) {
    const token = resolveRef(entry, 'skill', d.skill);
    if (token) refs.add(token);
  }
  if (!/^##\s+Task\s*$/m.test(entry.text)) {
    report(entry.rel, 'case-task-missing', "no '## Task' section; that section is the prompt sent to the agent, so there is nothing to run");
  }
}

// ----------------------------------------------------------- prose links

const LINK = /\[[^\]]*\]\(\s*<?([^)>\s]+)>?(?:\s+["'][^)]*["'])?\s*\)/g;

function contentToken(absolute) {
  const rel = relative(root, absolute);
  for (const [kind, toPath] of Object.entries(KIND_PATH)) {
    const dir = FLAT_DIR[kind];
    const id = kind === 'skill'
      ? (rel.startsWith(`skills${sep}`) && rel.endsWith(`${sep}SKILL.md`) ? rel.slice(7, -('/SKILL.md'.length)) : null)
      : (rel.startsWith(`${dir}${sep}`) && rel.endsWith('.md') ? rel.slice(dir.length + 1, -3) : null);
    if (id && join(root, toPath(id)) === absolute) return `${kind}:${id}`;
  }
  return null;
}

// Runs over every markdown file, not only the entries: a broken link in
// README.md or LAYOUT.md is the same defect. The citation rule is the one
// part that needs frontmatter, so it applies only where there is some.
function linkable(entries) {
  const seen = new Set(entries.map((e) => e.path));
  const others = walk(root)
    .filter((path) => path.endsWith('.md') && !seen.has(path))
    .map((path) => ({ path, rel: relative(root, path), text: readFileSync(path, 'utf8'), token: null }));
  return [...entries, ...others];
}

function checkLinks(entries, refsByToken) {
  let checked = 0;
  for (const entry of linkable(entries)) {
    for (const [, href] of entry.text.matchAll(LINK)) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('#')) continue;
      checked++;
      if (href.startsWith('/')) {
        report(entry.rel, 'link-absolute', `'${href}' is an absolute path; every link resolves from the file it is written in`);
        continue;
      }
      const target = resolve(dirname(entry.path), href.split('#')[0]);
      if (relative(root, target).startsWith('..')) {
        report(entry.rel, 'link-escapes-repository', `'${href}' resolves outside the repository`);
        continue;
      }
      if (!existsSync(target)) {
        report(entry.rel, 'link-target-missing', `'${href}' does not resolve to a file`);
        continue;
      }
      const token = contentToken(target);
      if (!token || !entry.token) continue;
      const recorded = refsByToken.get(entry.token)?.has(token)
        || refsByToken.get(token)?.has(entry.token);
      if (!recorded) {
        report(entry.rel, 'citation-not-recorded', `prose links ${token}, but no typed relation records it in either direction`);
      }
    }
  }
  return checked;
}

// ------------------------------------------------------- local-path scan

function localPathPatterns() {
  if (!existsSync(PATTERN_FILE)) {
    report(relative(root, PATTERN_FILE), 'patterns-missing', 'the local-path scan has no patterns to run');
    return [];
  }
  return readFileSync(PATTERN_FILE, 'utf8').split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => {
      const [source, reason] = line.split(' :: ');
      return { re: new RegExp(source), reason: (reason ?? source).trim() };
    });
}

function scanForLocalPaths() {
  const patterns = localPathPatterns();
  const files = walk(root).filter((path) => {
    const rel = relative(root, path);
    return path !== PATTERN_FILE && SCANNED_EXTENSIONS.some((ext) => rel.endsWith(ext));
  });
  for (const path of files) {
    const rel = relative(root, path);
    readFileSync(path, 'utf8').split('\n').forEach((line, n) => {
      for (const { re, reason } of patterns) {
        const m = re.exec(line);
        if (m) report(`${rel}:${n + 1}`, 'local-path', `${reason} — '${m[0].trim()}'`);
      }
    });
  }
  return files.length;
}

// ------------------------------------------------------------------ run

const entries = collectEntries();
const refsByToken = new Map();
for (const entry of entries) {
  if (!entry.data) continue;
  checkIdentifier(entry);
  const refs = new Set();
  refsByToken.set(entry.token, refs);
  if (entry.kind === 'skill') checkSkill(entry);
  if (entry.kind === 'knowledge') checkKnowledge(entry, refs);
  if (entry.kind === 'case') checkCase(entry, refs);
  if (entry.kind === 'evidence') checkEvidence(entry, refs);
}
const linksChecked = checkLinks(entries.filter((e) => e.data), refsByToken);
const filesScanned = scanForLocalPaths();

const counted = (kind, noun) => {
  const n = entries.filter((e) => e.kind === kind).length;
  return `${n} ${noun}${n === 1 ? '' : 's'}`;
};
const refsResolved = [...refsByToken.values()].reduce((n, s) => n + s.size, 0);

if (findings.length === 0) {
  console.log(`GREEN  ${counted('skill', 'skill')}, ${counted('knowledge', 'knowledge entry')}, ${counted('case', 'case')}, ${counted('evidence', 'evidence record')}`);
  console.log(`       ${refsResolved} typed refs resolved, ${linksChecked} prose links checked, ${filesScanned} files scanned for local paths`);
  process.exit(0);
}

let last = null;
for (const { file, rule, message } of findings.sort((a, b) => a.file.localeCompare(b.file))) {
  if (file !== last) { console.log(`\n${file}`); last = file; }
  console.log(`  ${rule}: ${message}`);
}
console.log(`\nRED    ${findings.length} finding${findings.length === 1 ? '' : 's'}`);
process.exit(1);

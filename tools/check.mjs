#!/usr/bin/env node
// Structural checks over a collection tree: metadata format, reference
// resolution, identifier consistency, prose citations, behavioural cases and
// the run records they produce, generated views still agreeing with the
// records they are drawn from, and the scan for machine-local paths that
// PUBLIC-BOUNDARY.md forbids.
//
//   node tools/check.mjs [root]      (root defaults to the repository)
//
// Exits 0 when clean, 1 with a named finding per problem. The deliberately
// broken trees under tools/fixtures/ prove each rule can go red; run them
// with tools/check-fixtures.mjs.

import { readFileSync, existsSync } from 'node:fs';
import { join, relative, resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  KIND_PATH, FLAT_DIR, STATUSES, RELATION_TYPES, DATE, IDENTIFIER, TYPED_REF,
  frontmatter, walk, collectEntries, typedRefs, EDGE_LABELS,
} from './collection.mjs';
import { rebuild } from './build-views.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const root = resolve(process.argv[2] ?? join(HERE, '..'));

// The two variants a behavioural run compares; a record missing either is not
// a comparison, and cannot serve as the baseline a later judgement needs.
const RUN_VARIANTS = ['baseline', 'with-skill'];

// What the local-path scan reads: not a list of what may live here, a list of
// what can be read as text.
const SCANNED_EXTENSIONS = ['.md', '.mjs', '.js', '.json', '.yml', '.yaml', '.txt'];
// Holds the local-path patterns as data so this file can state the rule
// without tripping it. It is the checker's own configuration, so it is read
// from beside the checker and not from whatever tree is being scanned.
const PATTERN_FILE = join(HERE, 'local-path-patterns.txt');

const findings = [];
const report = (file, rule, message) => findings.push({ file, rule, message });

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

function resolveRef(entry, field, ref, expect) {
  const m = TYPED_REF.exec(String(ref));
  if (!m) {
    report(entry.rel, 'reference-malformed', `'${field}' is '${ref}', not <${Object.keys(KIND_PATH).join('|')}>:<id>`);
    return null;
  }
  const [, kind, id] = m;
  // A ref that resolves is not thereby the right ref. Where a field names one
  // kind of record, whatever reads it assumes that kind — the source-date
  // cross-check below opens the evidence file directly — so a mis-kinded ref
  // that happens to resolve is a finding here rather than a crash there.
  if (expect && kind !== expect) {
    report(entry.rel, 'reference-kind-mismatch', `'${field}' points at '${ref}', and this field takes ${expect}:<id>`);
    return null;
  }
  const target = KIND_PATH[kind](id);
  if (!existsSync(join(root, target))) {
    report(entry.rel, 'reference-unresolved', `'${field}' points at '${ref}', and ${target} does not exist`);
    return null;
  }
  return `${kind}:${id}`;
}

// Every typed ref in the frontmatter, resolved once, wherever it lives.
// The per-kind checks below judge everything else about the field; they no
// longer each carry their own copy of where refs are found, so a new kind of
// reference reaches the checker and the generated views from one edit in
// collection.mjs.
function resolveAll(entry, refs) {
  const byField = new Map();
  for (const { field, ref, expect } of typedRefs(entry.data)) {
    const token = resolveRef(entry, field, ref, expect);
    if (!token) continue;
    refs.add(token);
    byField.set(field, token);
  }
  return byField;
}

function checkIdentifier(entry) {
  if (entry.kind === 'founder' && entry.id === 'PROFILE') return;
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

function checkFounder(entry) {
  const d = entry.data;
  if (present(entry, 'id', d.id) && d.id !== entry.id) {
    report(entry.rel, 'id-filename-mismatch', `frontmatter id is '${d.id}' but the filename stem is '${entry.id}'`);
  }
  present(entry, 'title', d.title);
  if (present(entry, 'status', d.status) && !STATUSES.includes(d.status)) {
    report(entry.rel, 'status-unknown', `status '${d.status}' is not one of ${STATUSES.join(', ')}`);
  }
  if (present(entry, 'loading', d.loading) && d.loading !== 'always') {
    report(entry.rel, 'founder-loading-invalid', `loading is '${d.loading}', not 'always'; founder profiles are retained context`);
  }
}

function checkMission(entry) {
  const d = entry.data;
  if (present(entry, 'id', d.id) && d.id !== entry.id) {
    report(entry.rel, 'id-filename-mismatch', `frontmatter id is '${d.id}' but the filename stem is '${entry.id}'`);
  }
  present(entry, 'title', d.title);
  if (present(entry, 'status', d.status) && !STATUSES.includes(d.status)) {
    report(entry.rel, 'status-unknown', `status '${d.status}' is not one of ${STATUSES.join(', ')}`);
  }
  if (!d.difficulty || !DATE.test(String(d.difficulty.assessed_on ?? '')) || d.difficulty.band !== 'B' || !String(d.difficulty.basis ?? '').trim()) {
    report(entry.rel, 'mission-difficulty-basis-missing', "difficulty must give assessed_on as YYYY-MM-DD, target band 'B', and a non-empty basis; the frontier claim is dated judgment, not a timeless fact");
  }
}

function checkKnowledge(entry, resolved) {
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
    const token = resolved.get(`${where}.evidence`);
    if (!token) continue;
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

function checkEvidence(entry) {
  const d = entry.data;
  if (present(entry, 'id', d.id) && d.id !== entry.id) {
    report(entry.rel, 'id-filename-mismatch', `frontmatter id is '${d.id}' but the filename stem is '${entry.id}'`);
  }
  for (const field of ['kind', 'source_title', 'read_by', 'method']) present(entry, field, d[field]);
  if (present(entry, 'read_on', d.read_on)) isDate(entry, 'read_on', d.read_on);
  if (d.source_date !== undefined && d.source_date !== 'unknown') isDate(entry, 'source_date', d.source_date);
  if (d.kind === 'behavioural_run') checkRun(entry);
}

// A behavioural run is evidence about a model on a day, not about the
// guidance in general. Both halves of the comparison and the identity that
// produced them are what make it re-runnable; without either it is an
// anecdote wearing an evidence record's frontmatter.
function checkRun(entry) {
  const d = entry.data;
  for (const field of ['model', 'harness']) {
    // Reported under its own rule rather than through present(), so one
    // missing identity is one finding and not two names for it.
    if (d[field] === undefined || d[field] === null || String(d[field]).trim() === '') {
      report(entry.rel, 'run-identity-missing', `a behavioural run records what produced it; '${field}' is not set, so this result cannot be compared with a later one`);
    }
  }
  present(entry, 'verdict', d.verdict);
  present(entry, 'case', d.case);
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
function checkCase(entry) {
  const d = entry.data;
  if (present(entry, 'id', d.id) && d.id !== entry.id) {
    report(entry.rel, 'id-filename-mismatch', `frontmatter id is '${d.id}' but the filename stem is '${entry.id}'`);
  }
  present(entry, 'title', d.title);
  present(entry, 'rubric', d.rubric);
  if (present(entry, 'status', d.status) && !STATUSES.includes(d.status)) {
    report(entry.rel, 'status-unknown', `status '${d.status}' is not one of ${STATUSES.join(', ')}`);
  }
  present(entry, 'skill', d.skill);
  if (!/^##\s+Task\s*$/m.test(entry.text)) {
    report(entry.rel, 'case-task-missing', "no '## Task' section; that section is the prompt sent to the agent, so there is nothing to run");
  }
}

// A view is a definition of what to draw, not a drawing. What it selects is
// checked here; whether the committed picture still matches the records is
// checked by regenerating it, because a view that has drifted from its own
// collection is worse than no view at all.
function checkView(entry, refs, entries) {
  const d = entry.data;
  if (present(entry, 'id', d.id) && d.id !== entry.id) {
    report(entry.rel, 'id-filename-mismatch', `frontmatter id is '${d.id}' but the filename stem is '${entry.id}'`);
  }
  present(entry, 'title', d.title);
  if (present(entry, 'status', d.status) && !STATUSES.includes(d.status)) {
    report(entry.rel, 'status-unknown', `status '${d.status}' is not one of ${STATUSES.join(', ')}`);
  }

  const definition = d.view ?? {};
  if (!Array.isArray(definition.include) || definition.include.length === 0) {
    report(entry.rel, 'view-selection-missing', "'view.include' names no entry to start from, so the view selects nothing");
  }
  // An edge filter that is not a list is not a filter. Everything that reads
  // it asks whether it is an array, so a scalar disappears and the view walks
  // every edge with nothing going red — and a map that quietly includes what
  // its author excluded is worse than one that is obviously wrong.
  if (definition.follow !== undefined && !Array.isArray(definition.follow)) {
    report(entry.rel, 'view-follow-malformed', `'view.follow' is '${definition.follow}', not a list of edge labels; a filter that is not a list is ignored, and the view walks every edge instead`);
  }
  for (const [i, label] of (Array.isArray(definition.follow) ? definition.follow : []).entries()) {
    if (!EDGE_LABELS.includes(String(label))) {
      report(entry.rel, 'view-follow-unknown', `view.follow[${i}] is '${label}', not one of ${EDGE_LABELS.join(', ')}`);
    }
  }
  if (definition.depth !== undefined && !/^\d+$/.test(String(definition.depth))) {
    report(entry.rel, 'view-depth-malformed', `'view.depth' is '${definition.depth}', not a whole number of steps`);
  }

  const built = rebuild(root, entries, entry);
  if (built.missing) {
    report(entry.rel, 'view-generated-block-missing', 'no generated marker, so the diagram and its link index have nowhere to go; run node tools/build-views.mjs');
  } else if (built.stale) {
    report(entry.rel, 'view-stale', 'the committed diagram and index are not what these records generate; run node tools/build-views.mjs');
  }
  // What the view drew is what it cites. Recording it here is what lets the
  // prose-link rule hold the generated index to exactly its own selection.
  for (const token of built.nodes) refs.add(token);
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

const { entries, problems } = collectEntries(root);
for (const { file, rule, message } of problems) report(file, rule, message);

const refsByToken = new Map();
for (const entry of entries) {
  if (!entry.data) continue;
  checkIdentifier(entry);
  const refs = new Set();
  refsByToken.set(entry.token, refs);
  const resolved = resolveAll(entry, refs);
  if (entry.kind === 'skill') checkSkill(entry);
  if (entry.kind === 'knowledge') checkKnowledge(entry, resolved);
  if (entry.kind === 'case') checkCase(entry);
  if (entry.kind === 'evidence') checkEvidence(entry);
  if (entry.kind === 'view') checkView(entry, refs, entries);
  if (entry.kind === 'founder') checkFounder(entry);
  if (entry.kind === 'mission') checkMission(entry);
}
const linksChecked = checkLinks(entries.filter((e) => e.data), refsByToken);
const filesScanned = scanForLocalPaths();

const counted = (kind, noun) => {
  const n = entries.filter((e) => e.kind === kind).length;
  return `${n} ${noun}${n === 1 ? '' : 's'}`;
};
const refsResolved = [...refsByToken.values()].reduce((n, s) => n + s.size, 0);

if (findings.length === 0) {
  console.log(`GREEN  ${counted('mission', 'mission')}, ${counted('founder', 'founder entry')}, ${counted('skill', 'skill')}, ${counted('knowledge', 'knowledge entry')}, ${counted('case', 'case')}, ${counted('evidence', 'evidence record')}, ${counted('view', 'view')}`);
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

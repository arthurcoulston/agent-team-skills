#!/usr/bin/env node
// The vocabulary of the layout, in one place: what the four kinds of file
// are, where a typed ref resolves to, and how to read a tree of them.
//
// This module knows the shape of a collection and nothing about what is
// wrong with one. tools/check.mjs judges; tools/build-views.mjs draws; both
// read the tree through here, so a new kind of reference is added once
// rather than added to the checker and forgotten in the generator.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

export const KIND_PATH = {
  knowledge: (id) => join('knowledge', `${id}.md`),
  evidence: (id) => join('evidence', `${id}.md`),
  case: (id) => join('cases', `${id}.md`),
  skill: (id) => join('skills', id, 'SKILL.md'),
  view: (id) => join('views', `${id}.md`),
  founder: (id) => join('founder', `${id}.md`),
  mission: (id) => join('missions', `${id}.md`),
};
// The kind names a ref uses are singular; three of the directories are not.
export const FLAT_DIR = { knowledge: 'knowledge', evidence: 'evidence', case: 'cases', view: 'views', founder: 'founder', mission: 'missions' };
export const STATUSES = ['exemplar', 'draft', 'accepted', 'superseded'];
export const RELATION_TYPES = ['applies_to', 'supports', 'depends_on', 'supersedes'];
export const DATE = /^\d{4}-\d{2}-\d{2}$/;
export const IDENTIFIER = /^[a-z0-9]+(-[a-z0-9]+)*$/;
export const TYPED_REF = /^(knowledge|evidence|case|skill|view|founder|mission):(.+)$/;

// Fixtures are deliberately broken and carry fictional local paths on
// purpose; the fixture runner points the checker at each of them directly.
export const SKIPPED = ['.git', 'node_modules', join('tools', 'fixtures')];

// ---------------------------------------------------------------- YAML

// Enough YAML for the frontmatter LAYOUT.md defines: scalars, nested maps,
// lists of maps, inline flow sequences, and folded/literal block scalars. Not
// a general parser — it is deliberately small so it has no dependency and no
// surprises. Where it cannot read a value it leaves it whole as a scalar
// rather than half-reading it, so the checker can name it.
export function parseYaml(text) {
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
      out[key] = flowSequence(rest) ?? scalar(rest);
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

// An inline flow sequence — `[applies_to, sources]`, the form LAYOUT.md
// documents for a view's edge filter. Returns null for anything that is not
// one, so a plain scalar reads exactly as it did before. Splitting respects
// quotes and nesting, and an unclosed bracket reads as null rather than as a
// guess: a value this parser cannot read has to arrive whole at the checker,
// because a list silently read as a string is a filter that does nothing.
function flowSequence(raw) {
  const s = raw.trim();
  if (s[0] !== '[') return null;
  const items = [];
  let item = '';
  let depth = 0;
  let quote = null;
  for (const ch of s) {
    if (quote) { item += ch; if (ch === quote) quote = null; continue; }
    if (ch === '"' || ch === "'") { quote = ch; item += ch; continue; }
    if (ch === '[' || ch === '{') { depth++; if (depth === 1) continue; }
    if (ch === ']' || ch === '}') {
      depth--;
      // The closing bracket ends the value; a trailing comment after it is
      // outside the sequence, which is how LAYOUT.md writes the example.
      if (depth === 0) { if (item.trim() !== '') items.push(scalar(item)); return items; }
    }
    if (ch === ',' && depth === 1) { items.push(scalar(item)); item = ''; continue; }
    item += ch;
  }
  return null;
}

function scalar(raw) {
  let s = raw.trim();
  const quoted = (s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"));
  if (quoted) return s.slice(1, -1);
  const comment = s.indexOf(' #');
  if (comment >= 0) s = s.slice(0, comment).trim();
  return s;
}

export function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/.exec(text);
  return m ? parseYaml(m[1]) : null;
}

// ------------------------------------------------------------ discovery

export function listDir(dir) {
  return existsSync(dir) ? readdirSync(dir).sort() : [];
}

export function walk(root, dir = root, out = []) {
  for (const name of listDir(dir)) {
    const path = join(dir, name);
    const rel = relative(root, path);
    if (SKIPPED.some((s) => rel === s || rel.startsWith(s + sep))) continue;
    if (statSync(path).isDirectory()) walk(root, path, out);
    else out.push(path);
  }
  return out;
}

// Reads every entry in a tree. Problems that stop an entry being read at all
// are returned alongside it rather than thrown: the checker turns them into
// findings, and the generator draws what it can.
export function collectEntries(root) {
  const entries = [];
  const problems = [];
  for (const name of listDir(join(root, 'skills'))) {
    const dir = join(root, 'skills', name);
    if (!statSync(dir).isDirectory()) continue;
    const path = join(dir, 'SKILL.md');
    if (existsSync(path)) entries.push({ kind: 'skill', id: name, path });
    else problems.push({ file: relative(root, dir), rule: 'skill-entrypoint-missing', message: 'skill directory has no SKILL.md' });
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
    if (!entry.data) problems.push({ file: entry.rel, rule: 'frontmatter-missing', message: 'no YAML frontmatter delimited by ---' });
  }
  return { entries, problems };
}

// ------------------------------------------------------------ typed refs

const asList = (value) => (Array.isArray(value) ? value : []);

// Every place a typed ref can appear in frontmatter, with the field path a
// finding names it by, the label a generated view draws the edge with, and —
// where the field names one kind of record and nothing else — the kind it has
// to resolve to. This list is the single answer to "what refers to what":
// adding a kind of reference here reaches the checker and the views in one
// edit, and the expectation stays beside the field rather than inside
// whichever check happens to read it.
export function typedRefs(data) {
  const out = [];
  if (!data) return out;
  for (const [i, rel] of asList(data.relations).entries()) {
    if (rel?.to !== undefined) out.push({ field: `relations[${i}].to`, ref: rel.to, label: String(rel.type ?? 'relates') });
  }
  for (const [i, source] of asList(data.sources).entries()) {
    if (source?.evidence !== undefined) out.push({ field: `sources[${i}].evidence`, ref: source.evidence, label: 'sources', expect: 'evidence' });
  }
  // These two are named for the kind they hold, and hold nothing else.
  for (const field of ['skill', 'case']) {
    if (data[field] !== undefined) out.push({ field, ref: data[field], label: field, expect: field });
  }
  for (const [i, ref] of asList(data.view?.include).entries()) {
    out.push({ field: `view.include[${i}]`, ref, label: 'includes' });
  }
  return out;
}

// The edge labels a view may follow. A view's own 'includes' is not one of
// them: it says where to start, not what to walk.
export const EDGE_LABELS = [...RELATION_TYPES, 'sources', 'skill', 'case'];

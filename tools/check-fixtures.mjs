#!/usr/bin/env node
// Proves check.mjs can go red, and for the right reason.
//
//   node tools/check-fixtures.mjs
//
// Runs the checker on the repository (must be green), then on each tree under
// fixtures/ (each must be red, and its output must contain every line of that
// fixture's EXPECT file). A check that has never been seen failing is not
// known to check anything.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const repo = join(HERE, '..');
const checker = join(HERE, 'check.mjs');

const run = (root) => {
  const r = spawnSync(process.execPath, [checker, root], { encoding: 'utf8' });
  return { code: r.status, output: (r.stdout ?? '') + (r.stderr ?? '') };
};

const failures = [];
const show = (ok, name, detail) => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  — ${detail}` : ''}`);
  if (!ok) failures.push(name);
};

const green = run(repo);
show(green.code === 0, 'repository is green', green.code === 0 ? green.output.trim().split('\n')[0] : green.output.trim());

for (const name of readdirSync(join(HERE, 'fixtures')).sort()) {
  const root = join(HERE, 'fixtures', name);
  if (!statSync(root).isDirectory()) continue;
  const expectFile = join(root, 'EXPECT');
  if (!existsSync(expectFile)) { show(false, name, 'no EXPECT file saying what it must be caught for'); continue; }
  const expected = readFileSync(expectFile, 'utf8').split('\n')
    .map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));

  const { code, output } = run(root);
  if (code === 0) { show(false, name, 'checker passed a tree that is broken on purpose'); continue; }
  const missed = expected.filter((line) => !output.includes(line));
  show(missed.length === 0, name, missed.length ? `red, but never said: ${missed.join(' | ')}` : `red on ${expected.length} expected finding${expected.length === 1 ? '' : 's'}`);
}

if (failures.length) {
  console.log(`\nRED    ${failures.length} fixture${failures.length === 1 ? '' : 's'} did not behave as recorded: ${failures.join(', ')}`);
  process.exit(1);
}
console.log(`\nGREEN  the checker passes the real tree and fails every fixture, naming what is wrong`);

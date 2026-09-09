#!/usr/bin/env node
// Runs one behavioural case twice — once with the skill's text in the prompt
// and once without — and preserves both results as an evidence record.
//
//   node tools/run-case.mjs <case-id> --agent '<command>' --model '<model id>' \
//        --harness '<harness and version>' --by '<who ran it>'
//
// The command is run once per variant with the prompt on stdin; whatever it
// writes to stdout is the answer. Any command that reads a prompt and writes
// an answer works, so the collection does not assume a harness.
//
// It records, it does not score. The baseline exists so that a later
// judgement of the skill has something to be measured against, and a run
// graded by the same machinery that produced it is not a measurement.
//
// Options: --id <evidence id>  --timeout <seconds>  --out <directory>

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const root = join(HERE, '..');

const VARIANTS = ['baseline', 'with-skill'];

const die = (message) => { console.error(`run-case: ${message}`); process.exit(2); };

// ------------------------------------------------------------ arguments

function parseArgs(argv) {
  const opts = {};
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) opts[argv[i].slice(2)] = argv[++i];
    else rest.push(argv[i]);
  }
  return [opts, rest];
}

const [opts, rest] = parseArgs(process.argv.slice(2));
if (rest.length !== 1) die('name exactly one case, e.g. run-case.mjs skill-description-trigger');
const caseId = rest[0];

const agent = opts.agent ?? process.env.CASE_AGENT;
const model = opts.model ?? process.env.CASE_MODEL;
const harness = opts.harness ?? process.env.CASE_HARNESS;
const runBy = opts.by ?? process.env.CASE_RUN_BY;

// Identity is required rather than defaulted. A result whose model and
// harness are unknown cannot be compared with a later one, so it is not a
// baseline — and a guessed identity is worse than a refusal to run.
if (!agent) die("no agent command: pass --agent '<command>' or set CASE_AGENT");
if (!model) die("no model identity: pass --model '<model id>' or set CASE_MODEL; a run whose model is unknown is not a baseline");
if (!harness) die("no harness identity: pass --harness '<name and version>' or set CASE_HARNESS");
if (!runBy) die("no runner: pass --by '<who ran it>' or set CASE_RUN_BY");

const timeoutSeconds = Number(opts.timeout ?? 300);
if (!Number.isFinite(timeoutSeconds) || timeoutSeconds <= 0) die(`--timeout '${opts.timeout}' is not a positive number of seconds`);

// ---------------------------------------------------------- the case

const casePath = join(root, 'cases', `${caseId}.md`);
if (!existsSync(casePath)) die(`no case at cases/${caseId}.md`);
const caseText = readFileSync(casePath, 'utf8');

// The same small frontmatter reader check.mjs uses, kept to the two scalar
// fields this needs; the checker is what validates the whole record.
const field = (text, name) => {
  const m = new RegExp(`^${name}:[ \\t]*(.*)$`, 'm').exec(text.split(/^---\s*$/m)[1] ?? '');
  const value = (m?.[1] ?? '').trim().replace(/^['"]|['"]$/g, '');
  return value === '>' || value === '|' ? '' : value;
};
const caseTitle = field(caseText, 'title');
const skillRef = field(caseText, 'skill');

// The prompt is the '## Task' section, verbatim: what an operator reads as
// the task is exactly what the agent is sent.
const task = /^##\s+Task\s*$([\s\S]*?)(?=^##\s|$(?![\s\S]))/m.exec(caseText)?.[1]?.trim();
if (!task) die(`cases/${caseId}.md has no '## Task' section, so there is no prompt to send`);

const skillId = /^skill:(.+)$/.exec(skillRef)?.[1];
if (!skillId) die(`cases/${caseId}.md has skill '${skillRef}', not 'skill:<name>'`);
const skillPath = join(root, 'skills', skillId, 'SKILL.md');
if (!existsSync(skillPath)) die(`cases/${caseId}.md names ${skillRef}, and skills/${skillId}/SKILL.md does not exist`);
// Prompt-loading, not the harness's own skill discovery. What the with-skill
// variant tests is the guidance reaching the model at all; a harness that
// decides for itself whether to open a skill is a separate question, and this
// runner deliberately does not answer it.
const skillText = readFileSync(skillPath, 'utf8').replace(/^---\r?\n[\s\S]*?\r?\n---\s*\r?\n/, '').trim();

const prompts = {
  baseline: task,
  'with-skill': `${skillText}\n\n---\n\n${task}`,
};

// ------------------------------------------------------------- the runs

const today = new Date().toISOString().slice(0, 10);
const evidenceId = opts.id ?? `run-${caseId}-${today}`;
const outDir = opts.out ? resolve(root, opts.out) : join(root, 'evidence');
const outPath = join(outDir, `${evidenceId}.md`);
// An evidence record is never edited to match a later reading: a second run
// is a second record, and the entry cites both.
if (existsSync(outPath)) die(`${evidenceId}.md already exists; a new run is a new record — pass --id`);

const runs = VARIANTS.map((variant) => {
  const started = Date.now();
  const r = spawnSync(agent, {
    shell: true,
    input: prompts[variant],
    encoding: 'utf8',
    timeout: timeoutSeconds * 1000,
    maxBuffer: 32 * 1024 * 1024,
  });
  const timedOut = r.error?.code === 'ETIMEDOUT' || r.signal === 'SIGTERM';
  const failed = timedOut || r.status !== 0 || r.error !== undefined;
  const run = {
    variant,
    status: failed ? 'failed' : 'ok',
    exit_code: r.status ?? 'none',
    duration_ms: Date.now() - started,
    answer: (r.stdout ?? '').trim(),
    stderr: (r.stderr ?? '').trim(),
    note: timedOut ? `no answer within ${timeoutSeconds}s` : (r.error ? String(r.error.message) : ''),
  };
  console.log(`${run.status === 'ok' ? 'ran ' : 'FAIL'}  ${variant}  exit ${run.exit_code}  ${(run.duration_ms / 1000).toFixed(1)}s  ${run.answer.length} chars`);
  return run;
});

// ---------------------------------------------------------- the record

// A fence longer than any run of backticks in the text, so an answer that
// contains fenced code is preserved as it was written rather than escaped.
function fenceFor(...texts) {
  const longest = Math.max(0, ...texts.flatMap((t) => [...t.matchAll(/`+/g)].map((m) => m[0].length)));
  return '`'.repeat(Math.max(3, longest + 1));
}

const block = (label, text) => {
  if (!text) return `### ${label}\n\n*(empty)*\n`;
  const fence = fenceFor(text);
  return `### ${label}\n\n${fence}\n${text}\n${fence}\n`;
};

const section = (run) => [
  `## ${run.variant}`,
  '',
  `Exit ${run.exit_code}, ${(run.duration_ms / 1000).toFixed(1)}s.${run.note ? ` ${run.note}.` : ''}`,
  run.status === 'failed' ? '\nThis run failed. It is recorded as it happened: a failure is a result, and a\nbaseline that quietly drops its failures overstates what the collection has\nbeen shown to do.\n' : '',
  '',
  block('Answer (stdout)', run.answer),
  run.stderr ? `\n${block('stderr', run.stderr)}` : '',
].join('\n');

const record = `---
id: ${evidenceId}
kind: behavioural_run
source_title: "Behavioural case: ${caseTitle.replace(/"/g, "'")}"
source_date: ${today}
read_on: ${today}
read_by: ${runBy}
method: tools/run-case.mjs ran cases/${caseId}.md twice through '${agent.replace(/\s+/g, ' ').trim()}', with the skill's text prepended to the prompt in the with-skill variant
case: case:${caseId}
model: ${model}
harness: ${harness}
runs:
${runs.map((r) => `  - variant: ${r.variant}\n    status: ${r.status}\n    exit_code: ${r.exit_code}\n    duration_ms: ${r.duration_ms}`).join('\n')}
verdict: unjudged
---

# Run record — ${caseTitle}

Two runs of [cases/${caseId}.md](../cases/${caseId}.md) on ${today}, one with
the skill's text in the prompt and one without, on ${model} under ${harness}.

The runner preserves; it does not score. \`verdict: unjudged\` is the honest
state until a reviewer who did not run it reads both answers against the
case's rubric and records what they found.

The with-skill variant put the skill's body into the prompt. It did not
exercise a harness deciding on its own to load the skill — that is a
different question, and this record is not evidence about it.

${runs.map(section).join('\n')}`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, record);

const failures = runs.filter((r) => r.status === 'failed');
console.log(`\nrecorded  evidence/${evidenceId}.md`);
if (failures.length) {
  console.log(`RED       ${failures.length} of ${runs.length} runs failed — the record holds them, and says so`);
  process.exit(1);
}
console.log(`GREEN     both variants ran; the record is unjudged until someone reviews it`);

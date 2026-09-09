---
id: run-skill-description-trigger-2026-09-09
kind: behavioural_run
source_title: "Behavioural case: Does an agent write a description that names the occasion, not the subject?"
source_date: 2026-09-09
read_on: 2026-09-09
read_by: mason
method: tools/run-case.mjs ran cases/skill-description-trigger.md twice through 'claude -p --model claude-sonnet-5', with the skill's text prepended to the prompt in the with-skill variant
case: case:skill-description-trigger
model: claude-sonnet-5
harness: claude-code-2.1.259
runs:
  - variant: baseline
    status: ok
    exit_code: 0
    duration_ms: 12798
  - variant: with-skill
    status: ok
    exit_code: 0
    duration_ms: 5078
verdict: guidance-not-shown
---

# Run record — Does an agent write a description that names the occasion, not the subject?

Two runs of [cases/skill-description-trigger.md](../cases/skill-description-trigger.md) on 2026-09-09, one with
the skill's text in the prompt and one without, on claude-sonnet-5 under claude-code-2.1.259.

The runner preserves; it does not score. `verdict: unjudged` is the honest
state until a reviewer who did not run it reads both answers against the
case's rubric and records what they found.

The with-skill variant put the skill's body into the prompt. It did not
exercise a harness deciding on its own to load the skill — that is a
different question, and this record is not evidence about it.

## baseline

Exit 0, 12.8s.


### Answer (stdout)

```
The skill file doesn't exist yet, so there's nothing to base the description on beyond what's stated in the prompt. Based solely on the described body content (reading the migration alongside the schema, checking reversibility, checking safety under mixed old/new app versions), here's the description line:

description: Use when reviewing a database migration before merge — checks it against the current schema, confirms it can be rolled back, and verifies it's safe to run while the previous application version is still live.
```


## with-skill

Exit 0, 5.1s.


### Answer (stdout)

```
Review migration correctness and safe rollout before merge — reversibility against the schema and safety under mixed old/new app versions during deploy.
```

## Reviewer verdict

Judged by proof (did not run this case) against `cases/skill-description-trigger.md`'s rubric, 2026-09-09.

**Occasion vs. subject — the rubric's central test — goes the wrong way.** The
baseline answer opens with "Use when reviewing a database migration before
merge," an explicit occasion-first frame despite having no guidance to draw
it from. The with-skill answer, "Review migration correctness and safe
rollout before merge," reads as a topic label with a trailing condition, not
an occasion a mid-task agent matches against. On this run the unguided
answer names the occasion more clearly than the guided one does — the
opposite of what the skill asks for.

**"Puts the case that matters most first" is not exercised by this task.**
The task gives one occasion (reviewing a migration) with three sub-checks,
not several candidate trigger occasions to rank and order. Neither answer's
difference from the other can be attributed to this criterion; it is a gap
in this exemplar case's design, not a result about the guidance.

**Both answers stay one line.** No difference here.

Net: on this single run, the guidance did not produce the intended effect,
and if anything moved the answer in the wrong direction on the rubric's main
criterion. Consistent with CONTRIBUTING.md's own limit — one pair, one
model, one day does not separate the guidance's effect from the variation the
model would show anyway — this judges the run, not the guidance's transfer.


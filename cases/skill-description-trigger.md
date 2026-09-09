---
id: skill-description-trigger
title: Does an agent write a description that names the occasion, not the subject?
status: exemplar
skill: skill:writing-a-skill-entrypoint
rubric: >
  The with-skill answer should differ from the baseline in three ways the
  guidance asks for: it names the occasion an agent would recognise mid-task
  ("about to review or approve a migration") rather than only the subject
  ("migration review conventions"); it puts the case that matters most first,
  because the listing truncates; and it stays one line. A reviewer reads both
  answers before knowing which is which, and records whether the difference
  is present, absent, or in the wrong direction.
---

# Case — a description that names its trigger

The exemplar behavioural case. It exists to fix the shape of a case file and
to give the runner something real to run; whether it discriminates well is a
question for the same review as any other entry.

It targets the one claim
[skills/writing-a-skill-entrypoint/SKILL.md](../skills/writing-a-skill-entrypoint/SKILL.md)
makes that is behavioural rather than structural: that an agent given this
guidance writes a `description` an agent mid-task can match against.

## Task

A team has a skill at `skills/reviewing-a-migration/SKILL.md`. Its body
explains how to review a database migration before it is merged: reading the
migration alongside the schema it changes, checking that it can be reversed,
and checking that it is safe to run while the previous version of the
application is still serving traffic.

Write the `description` line for that skill's YAML frontmatter. Reply with
the description line and nothing else.

## What this run does not establish

A case is one task run twice. It shows what happened on this task, with this
model, on this day. It is not evidence that the guidance transfers to other
tasks or other models, and a single pair of runs cannot separate the effect
of the guidance from the variation the model would show anyway. Judging a
skill needs several cases and repeated runs; this one establishes the
baseline that any such judgement is measured against.

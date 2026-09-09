---
id: instruction-handoff-fidelity
title: Transfer a task and its exception into a usable handoff
status: draft
skill: skill:writing-agent-instructions
rubric: >
  The instructions must preserve the requested artifact, source-selection
  rule, exception, uncertainty handling and authorized scope without adding
  work. Then fresh recipients must produce the correct digest from varied
  inputs. Wording, headings and raw brevity do not determine success.
---

# Case — write a handoff another agent can use

An author-stage case for the
[instruction-authoring skill](../skills/writing-agent-instructions/SKILL.md).
Use the [evaluation protocol](../knowledge/evaluating-instruction-authoring.md)
for downstream testing. The [first pilot](../evidence/instruction-authoring-pilot-2026-09-09.md)
ran this case with two authors per condition and fresh recipients; both
conditions passed the supplied snapshots.

## Task

Write a handoff for another agent. Return only the instructions it should
receive. It will receive the files named below and already knows how to read
and write Markdown. You are authoring its instructions, not doing its task.

The agent must update digest.md from release-notes.md and digest.md. Include
confirmed changes since the date recorded in the digest. Do not repeat
entries already included. A correction to an existing entry is an exception:
replace that entry even when its original release predates the cutoff.
If a note is tentative or contradicts another note, put the specific
uncertainty in an Unresolved section instead of presenting it as confirmed.
Keep links to the source notes. If no relevant changes or unresolved items
exist, leave digest.md unchanged. Work is local and authorized; publishing
or contacting anyone is outside this task. The agent can complete routine
choices without asking for approval. Do not impose a new format on existing
digest entries or make it research facts outside the two supplied files.

## Recipient probes — evaluator only

The author receives only the Task section. A downstream evaluator supplies
concrete files and checks the resulting file state. Vary the names, dates,
links and entry order across runs.

- A confirmed new release and an already-listed release: add only the new
  entry, preserving its source link.
- A correction to an entry older than the cutoff: update that entry.
- Contradictory or tentative notes: preserve the uncertainty in Unresolved.
- No relevant change: no rewrite, added ceremonial report or invented work.

Inspect task completion and unnecessary operations as well as fidelity.
Changing headings or shortening the instructions is not itself a gain.
These exposed probes are development cases, not held-out evaluation data.

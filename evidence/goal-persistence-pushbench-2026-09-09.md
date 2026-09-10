---
id: goal-persistence-pushbench-2026-09-09
kind: source_reading
source_title: "Push Your Agent: Measuring and Enforcing Quantitative Goal Persistence in Long-Horizon LLM Agents"
source_url: https://arxiv.org/abs/2605.23574
source_date: 2026-05-22
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page only. The abstract and the headline controller results were extracted; the per-condition tables, the verifier design and any limitations section were not retrieved, and no claim resting on this record depends on them.
---

# Reading — PushBench

[Source](https://arxiv.org/abs/2605.23574). Cai, Zhu, Gao, Tang, Qin. v1,
2026-05-22. Reading scope: abstract page only.

## Abstract

"Long-horizon language agents can make many plausible local tool calls yet
fail to persist until a requested count is actually complete. We study this
gap as Quantitative Goal Persistence (QGP): whether an agent keeps working
until an external verifier confirms enough distinct valid items. PushBench
turns this into a benchmark for repository-artifact collection and
verifier-backed work units, so repeated work, duplicate submissions, false
completion, and progress drift are measured directly rather than hidden
behind a final success flag."

## What it establishes

The benchmark's design point is the one worth carrying: **repeated work,
duplicate submissions, false completion and progress drift are invisible
behind a final success flag**, and separating them requires an external
verifier counting distinct valid items rather than the agent's own report.

Agents evaluated: Claude Code (Sonnet 4.6) and Codex CLI (gpt-5.4). Frontier
agents solved many 50-artifact tasks but reached only "3 out of 9 successes
per condition at 100 artifacts". A state-tracking retrieval controller reached
69–78% success and eliminated duplicates; a backlog-tracking controller
reached 25–50% success in conditions where the unaided approach failed
entirely.

The authors' framing: "Quantitative goals stress a different reliability
requirement from local task competence: agents must maintain verified progress
and stop only when the requested work is complete."

## Caveats

Read from the abstract page alone. The task is artifact collection against a
countable target, which is the most favourable case for external verification
and the least like an open-ended directive whose completion has no count. The
controller results are the paper's own proposals measured by their authors on
their own benchmark. No limitations section was retrieved.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

---
id: instruction-authoring-pilot-2026-09-09
kind: controlled_subagent_trial
source_title: First instruction-authoring subagent pilot
source_date: 2026-09-09
read_on: 2026-09-09
read_by: mason
method: Matched source tasks, fresh author and recipient agents, blinded semantic review, and file-state checks
model: gpt-6-astra
harness: Codex 0.153.4 native collaboration subagents
reasoning_effort: xhigh
verdict: No downstream advantage demonstrated in this sample
relations:
  - type: applies_to
    to: skill:writing-agent-instructions
  - type: supports
    to: case:instruction-handoff-fidelity
  - type: supports
    to: case:instruction-revision-fidelity
---

# First instruction-authoring pilot

The skill changed the authored instructions in this sample, but did not
demonstrate better downstream task performance. Keep it draft.

## Design

Tested the skill at commit `b0a1f9459b395fe207eb321ab58cf68bd5e7405e` on the
[handoff](../cases/instruction-handoff-fidelity.md) and
[revision](../cases/instruction-revision-fidelity.md) tasks. Eight fresh
authors gave two outputs per task per condition: task alone, or the same
task with the skill body prepended. Supporting references were not loaded.
No candidate was revised or discarded during the test.

Eight fresh recipients used those authored instructions on actual local
files. Each processed two isolated snapshots: mixed changes and unchanged
input. Two more fresh agents independently reviewed author fidelity and
recipient outputs without the condition mapping. All 18 agents used the
model, effort and harness recorded above, with no parent conversation fork.
Ordinary harness instructions and tools remained in their contexts.

## Observations

| Measure | Without skill | With skill |
|---|---:|---:|
| Author drafts passing blinded fidelity review | 4 / 4 | 4 / 4 |
| Recipient snapshots passing state checks and semantic review | 8 / 8 | 8 / 8 |
| Handoff mean words | 199 | 159.5 |
| Revision mean words | 94 | 104 |
| Handoff mean tokens, o200k_base | 247.5 | 206.5 |
| Revision mean tokens, o200k_base | 114 | 132 |

The handoff outputs were about 20% shorter by word count with the skill;
the revision outputs were about 11% longer. The skill added 805 o200k_base
tokens to each supplied author prompt. These counts describe text, not
billed usage or end-to-end operating cost.

Every recipient handled the relevant correction, uncertainty, duplication,
deletion, pending-state and completed-work conditions correctly. Unchanged
snapshots retained their bytes and modification times. All 92 mechanical
assertions passed; these are overlapping checks, not independent trials.
The blinded semantic reviewers found all candidates acceptable, with minor
wording and source-link differences.

One treated handoff added a pre-save check for duplicates, unsupported
confirmations and missing source links. The author reviewer judged it a
bounded additional procedure supporting required outcomes. No benefit or
harm from that procedure was demonstrated. The index revisions were
substantively equivalent across conditions.

## Limits and implication

This small development pilot does not establish a causal general effect,
cross-model transfer, or usefulness for indefinite autonomous operation.
There were only two author outputs per condition per task, and both source
tasks already specified their requirements clearly. The strong baseline
left little room to distinguish better performance.

The source tasks existed during skill drafting. Concrete recipient fixtures
were hidden from the authors and frozen before recipient execution, but
some author outputs had arrived during fixture preparation. Each recipient
handled two snapshots in one session. Reviewers were separate agents from
the same model family. Natural discovery, supporting-reference loading,
crash recovery, concurrent edits and long-term reuse were not tested.

The finding supports neither accepting the skill as effective nor rejecting
it as useless. The next meaningful test is harder authoring work: deriving
instructions from substantial source material, preserving interacting
requirements and resolving placement or scope decisions. Freeze that test
before drafting; preserve null and negative results as well as wins.

[Task text, all authored answers, fixtures, outputs and blinded reviews](instruction-authoring-pilot-artifacts-2026-09-09.md) are preserved for inspection.

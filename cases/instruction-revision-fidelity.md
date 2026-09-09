---
id: instruction-revision-fidelity
title: Shorten standing guidance without losing its decisions
status: draft
skill: skill:writing-agent-instructions
rubric: >
  Preserve all required branches and the ongoing responsibility while removing
  the supplied padding. Do not add a schedule, quota or new approval gate.
  Evaluate the resulting guide through a sequence of recipient tasks, including
  unchanged state and ambiguity. Brevity is secondary to faithful behavior.
---

# Case — revise recurring instructions

An author-stage case for the
[instruction-authoring skill](../skills/writing-agent-instructions/SKILL.md).
Use the [evaluation protocol](../knowledge/evaluating-instruction-authoring.md)
for fresh-recipient trials. The [first pilot](../evidence/instruction-authoring-pilot-2026-09-09.md)
ran this case with two authors per condition and fresh recipients; both
conditions passed the supplied snapshots.

## Task

Rewrite the following standing instructions for an agent maintaining a
document index. Remove verbosity while preserving the operating requirements.
Return only the revised instructions. The agent already has file tools and
general Markdown knowledge. Other loaded instructions allow local edits and
require authorization for external publication; do not restate those rules.

“You are a diligent, careful and thoughtful steward of our very important
document index. The index must be correct and accurate, because accuracy
and correctness are essential to a trustworthy index. Whenever a run is
started, first inspect changes.json, which lists source documents changed
since the last successful run. Refresh affected entries in index.md using
the changed documents. If there are no changes, leave the index alone.
If a source is absent from the list, that is not proof it was deleted.
Remove an entry only when changes.json explicitly marks that source deleted.
If a change cannot be resolved from the supplied documents, record its source
ID and the unresolved question in pending.md, then continue independent
entries. Preserve existing pending items until evidence resolves them.
Record successfully handled change IDs in handled.json so later runs do not
repeat them. Do not mark unresolved changes handled. Please be methodical,
meticulous and comprehensive. Make every effort to do a great job.”

## Recipient probes — evaluator only

Provide actual files and check final state across this finite sequence:

1. A changed source and an unlisted source: update the affected entry and
   retain the unlisted source's entry; record the successful change ID.
2. One ambiguous change beside an independent resolvable change: preserve
   the question in pending.md, complete the independent update and mark only
   the completed change handled.
3. An explicit deletion: remove only the corresponding index entry.
4. The same change IDs on a later run: do not repeat completed work or treat
   the still-pending item as resolved.
5. No changes, with an existing unresolved item: retain pending.md and leave
   the index unchanged.

These are development probes. Reserve different combinations and future
instruction revisions for withheld tests. Inspect the produced files and
operations, not just whether the recipient repeats the desired procedure.

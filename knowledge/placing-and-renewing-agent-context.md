---
id: placing-and-renewing-agent-context
title: How context placement, retrieval and renewal fail
status: draft
relations:
  - type: applies_to
    to: skill:designing-context-and-retrieval
  - type: applies_to
    to: mission:adaptive-ambition-support
  - type: applies_to
    to: mission:public-evidence-ledger
  - type: applies_to
    to: mission:accessible-work-tools
sources:
  - title: "STALE: Can LLM Agents Know When Their Memories Are No Longer Valid?"
    url: https://arxiv.org/abs/2605.06527
    source_date: 2026-05-07
    evidence_date: 2026-09-09
    evidence: evidence:stale-memory-validity-2026-09-09
  - title: "Does Your Agent's Memory Survive a Model Upgrade?"
    url: https://arxiv.org/abs/2609.05339
    source_date: 2026-09-04
    evidence_date: 2026-09-09
    evidence: evidence:memory-portability-2026-09-09
  - title: Effective harnesses for long-running agents
    url: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
    source_date: 2025-11-26
    evidence_date: 2026-09-09
    evidence: evidence:long-running-harnesses-2026-09-09
  - title: Harness design for long-running applications
    url: https://www.anthropic.com/engineering/harness-design-long-running-apps
    source_date: 2026-03-24
    evidence_date: 2026-09-09
    evidence: evidence:harness-design-long-running-apps-2026-09-09
  - title: "Agent Skills Can Be Harmful, v1"
    url: https://arxiv.org/abs/2608.11888v1
    source_date: 2026-08-12
    evidence_date: 2026-09-10
    evidence: evidence:skill-induced-failures-2026-09-10
review:
  last_checked: 2026-09-10
  checked_by: scout
uncertainty: >
  The controlled studies use synthetic memory, coding or web-development tasks;
  the engineering reports are single implementations. No source compares this
  four-layer design or measures a continuing role over an indefinite life.
applicability: >
  Continuing agent roles whose runtime can load standing context and reach durable
  files or systems. This does not choose the contents of a particular instruction,
  replace a task handoff, or establish access and authority the role lacks.
---

# How context placement, retrieval and renewal fail

Context has at least four separate failure points: the needed information may not
be preserved, the agent may not discover or retrieve it, conflicting state may not
be resolved, or the agent may retrieve the correction and still act on the old
premise. Treating all four as “memory” hides which repair is needed.

STALE isolates the last two failures. Across constructed conflict scenarios, its
best evaluated model reached only 55.2% overall accuracy; the authors distinguish
state resolution, resistance to a stale premise and adaptation of dependent policy.
This supports testing action after retrieval, not only retrieval itself. It does not
establish the rate for operating-team records.

The memory-portability study separates storage from migration. In 48 synthetic
histories, a fixed-schema graph was effectively invariant to the tested writer swap,
while model-written notes shifted by +9.91 or -13.28 percentage points depending on
migration direction. The authors attributed most NOTES loss to information discarded
when the summary was first made and most RAG loss to retrieval. This favors stable,
inspectable structure for commitments and provenance, but exact-answer tests on two
small models do not prove that graphs beat prose for leadership judgment.

Two Anthropic engineering accounts report a practical continuation pattern: durable
feature state, progress records, version history and a restart check let fresh
sessions resume work when compaction alone was insufficient. A later account also
reports that a model upgrade moved the useful boundary and made earlier sprint
scaffolding overhead. These are observations from application-building projects,
not controlled evidence for any individual component. Their transferable lesson is
to make continuation state external and inspectable, then reevaluate the apparatus
after model change.

More loaded guidance is not automatically safer. Differential testing across two
skill benchmarks found 125 cases where a skill-guided run failed while its control
passed and 182 efficiency regressions; excessive procedure dominated the latter.
That result concerns supplied benchmark skills, not carefully curated standing
boundaries. It nevertheless makes every context addition a hypothesis about a
particular task, model and runtime rather than a free improvement.

The four-layer design is therefore reasoned synthesis: keep universal preconditions
small and always loaded; route substantial methods selectively; read volatile state
from its live authority; retain dated evidence outside operational instructions.
Test the complete path from trigger to action, preserve provenance and supersession,
and renew it when its conditions change.

Mission transfer changes what earns each layer. For **adaptive ambition support**,
current consent and chosen direction are live state; sensitive history is evidence,
not standing permission, and an old preference embedded in a request is a stale-
premise probe. For the **public evidence ledger**, source dates, corrections and
contrary findings remain durable evidence while the current publication queue is
live state; correction policy can be selective guidance. For **accessible work
tools**, enduring safety and authority bounds may stay loaded, while user studies
and audit reports remain retrievable evidence linked from current product decisions.

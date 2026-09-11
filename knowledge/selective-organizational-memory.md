---
id: selective-organizational-memory
title: Why useful organizational memory is selective and revisable
status: draft
relations:
  - type: applies_to
    to: skill:cultivating-organizational-memory
  - type: applies_to
    to: mission:adaptive-ambition-support
  - type: applies_to
    to: mission:public-evidence-ledger
  - type: applies_to
    to: mission:reproducible-practice
  - type: applies_to
    to: mission:accessible-work-tools
sources:
  - title: "EvoAgentBench: Benchmarking Agent Self-Evolution via Ability Transfer, v1"
    url: https://arxiv.org/abs/2607.05202v1
    source_date: 2026-07-06
    evidence_date: 2026-09-10
    evidence: evidence:evoagentbench-transfer-2026-09-10
  - title: "SWE-Skills-Bench, v1"
    url: https://arxiv.org/abs/2603.15401v1
    source_date: 2026-03-16
    evidence_date: 2026-09-10
    evidence: evidence:swe-skills-bench-2026-09-10
  - title: "Signal or Noise?, v1"
    url: https://arxiv.org/abs/2608.23067v1
    source_date: 2026-08-24
    evidence_date: 2026-09-10
    evidence: evidence:webdev-skills-signal-noise-2026-09-10
  - title: "Agent Skills Can Be Harmful, v1"
    url: https://arxiv.org/abs/2608.11888v1
    source_date: 2026-08-12
    evidence_date: 2026-09-10
    evidence: evidence:skill-induced-failures-2026-09-10
  - title: "Beyond pass@1, v1"
    url: https://arxiv.org/abs/2603.29231v1
    source_date: 2026-03-31
    evidence_date: 2026-09-10
    evidence: evidence:long-horizon-reliability-gds-2026-09-10
  - title: "STALE: Can LLM Agents Know When Their Memories Are No Longer Valid?"
    url: https://arxiv.org/abs/2605.06527
    source_date: 2026-05-07
    evidence_date: 2026-09-09
    evidence: evidence:stale-memory-validity-2026-09-09
  - title: Effective harnesses for long-running agents
    url: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
    source_date: 2025-11-26
    evidence_date: 2026-09-09
    evidence: evidence:long-running-harnesses-2026-09-09
review:
  last_checked: 2026-09-11
  checked_by: scout
uncertainty: >
  The studies examine bounded tasks, constructed memory conflicts, or one
  engineering implementation. None evaluates this four-place taxonomy, a
  consent-aware retention lifecycle, or long-term organizational memory in a
  continuing agent team.
applicability: >
  Continuing teams that can keep live state, durable records, role-specific
  memory, and selectively loaded guidance distinct. Local authority, privacy,
  retention, and recordkeeping rules still govern what may be stored or promoted.
---

# Why useful organizational memory is selective and revisable

The evidence does not support preserving or loading every experience. In a
supported transfer setting, EvoAgentBench's curator-verified content improved
every measured cell while each automatic method had negative cells. In other
bounded studies, 39 of 49 software skills produced no pass-rate improvement,
web-development skills reduced mean performance while adding substantial token
cost, and differential testing found both task failures and excessive procedure
caused by loaded skills. A separate long-horizon benchmark found its memory
scaffold neutral or harmful for every tested model. These methods and settings
differ, so their shared implication is selection and measurement, not a general
verdict for or against memory.

The lifecycle has distinct failure points. Experience must be encoded without
losing the decisive conditions, routed to the right decision, reconciled with
newer or governing state, and then applied. STALE isolates the latter failures:
its best evaluated model reached 55.2% overall accuracy, and retrieving updated
evidence did not ensure acting on it. Recording more cannot repair a failure to
resolve or use what was already retrieved.

The four-place taxonomy—live state, durable evidence, role memory, and reusable
guidance—is therefore reasoned design. Volatile commitments need an authority
that changes with reality. Evidence needs dates, provenance, contrary findings,
and correction history. A role heuristic needs a recurring consumer and limits.
Reusable guidance needs support across the class of decisions it governs.
Separating these functions prevents an old observation or permission from
quietly becoming a current command.

Consolidation and retirement follow from the same risk. Combining overlapping
guidance reduces retrieval and context cost only if material exceptions and
source paths survive. Removing obsolete material from active influence matters
because an agent may accept a stale premise even after encountering a correction.
The engineering account supports external, inspectable continuation records, but
it is an uncontrolled report from one application project and does not establish
the taxonomy or an optimal review cadence.

For an adaptive support mission, current consent and chosen direction are live
state while earlier preferences remain protected evidence. A public evidence
ledger retains claims, contradictions, and corrections but promotes only scoped,
reviewed synthesis. A reproducible-practice team keeps failures that delimit
transfer conditions. An accessible-tools team separates current user needs and
defects from protected raw sessions, role diagnosis, and tested cross-product
guidance. These transfers illustrate the distinctions; none is an effectiveness
result for this combined method.

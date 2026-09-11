---
id: evaluating-context-and-skill-changes
title: What a context or skill evaluation can establish
status: draft
relations:
  - type: applies_to
    to: skill:evaluating-context-and-skill-changes
sources:
  - title: "SkillsBench, v4"
    url: https://arxiv.org/abs/2602.12670v4
    source_date: 2026-06-14
    evidence_date: 2026-09-09
    evidence: evidence:skillsbench-authoring-2026-09-09
  - title: "SWE-Skills-Bench, v1"
    url: https://arxiv.org/abs/2603.15401v1
    source_date: 2026-03-16
    evidence_date: 2026-09-10
    evidence: evidence:swe-skills-bench-2026-09-10
  - title: "WebDev-Skills-Bench: Signal or Noise?, v1"
    url: https://arxiv.org/abs/2608.23067v1
    source_date: 2026-08-24
    evidence_date: 2026-09-10
    evidence: evidence:webdev-skills-signal-noise-2026-09-10
review:
  last_checked: 2026-09-11
  checked_by: scout
uncertainty: >
  The direct studies concern bounded software and web tasks. They disagree on
  aggregate benefit, and none tests this combined method or continuing teams.
applicability: >
  A leader deciding whether to adopt, reject, narrow, or further develop a
  particular context, retrieval, memory, or skill revision on named models,
  harnesses, tasks, and operating conditions.
---

# What a context or skill evaluation can establish

Evidence does not support a general claim that adding skills helps. SkillsBench
reports positive mean effects from curated skills across its bounded tasks,
while SWE-Skills-Bench reports many null results and some harm. WebDev-Skills-
Bench separates useful content from length distraction with matched conditions
and finds weak transfer across models. The common lesson is conditional:
evaluate the particular revision in the configuration where it will be used.

Natural discovery and loaded content are different interventions. A selector
can miss good guidance or expose it on the wrong task; useful-looking content
can also mislead after correct selection. A routing panel, forced-exposure
comparison, and end-to-end comparison make those explanations observable
without pretending their interaction is perfectly additive.

Context has operating cost beyond source-file size. The relevant exposure is
what reaches the run: discovery metadata, selected bodies, retrieved references,
duplication, generated work, tools, latency, and cap pressure. A length-matched
irrelevant control can distinguish content value from volume effects when that
confound matters.

Matched trials support only the population they sample. Repeated runs expose
variation; negative and preserved-success cases expose regressions; and severe
boundary failures remain visible outside an average. A forced-load improvement
supports content value on tested applicable cases. Only natural discovery plus
downstream improvement supports the tested deployed route. Neither establishes
cross-model transfer, longitudinal reliability, beneficiary value, or indefinite
operation without additional evidence.

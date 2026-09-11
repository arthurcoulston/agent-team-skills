---
id: integrating-expertise-and-disagreement
title: How synthesis can preserve expertise and material disagreement
status: draft
relations:
  - type: applies_to
    to: skill:integrating-expertise-and-disagreement
  - type: depends_on
    to: knowledge:integrating-delegated-contributions
sources:
  - title: Multi-Agent Teams Hold Experts Back, v4
    url: https://arxiv.org/abs/2602.01011v4
    source_date: 2026-05-28
    evidence_date: 2026-09-09
    evidence: evidence:teams-hold-experts-back-2026-09-09
  - title: Patterns and problems in emerging multiagent systems
    url: https://www.anthropic.com/research/multiagent-systems
    source_date: 2026-08-13
    evidence_date: 2026-09-09
    evidence: evidence:multiagent-patterns-problems-2026-09-09
  - title: Towards a Science of Scaling Agent Systems, v3
    url: https://arxiv.org/abs/2512.08296v3
    source_date: 2026-04-08
    evidence_date: 2026-09-09
    evidence: evidence:scaling-agent-systems-2026-09-09
  - title: Why Do Multi-Agent LLM Systems Fail?, v3
    url: https://arxiv.org/abs/2503.13657v3
    source_date: 2025-10-26
    evidence_date: 2026-09-09
    evidence: evidence:mast-failures-2026-09-09
  - title: How we built our multi-agent research system
    url: https://www.anthropic.com/engineering/multi-agent-research-system
    source_date: 2025-06-13
    evidence_date: 2026-09-09
    evidence: evidence:multi-agent-research-system-2026-09-09
  - title: OCE Technical Authority
    url: https://nodis3.gsfc.nasa.gov/OCE_docs/OCE_1005_7B.pdf
    source_date: 2023-07-18
    evidence_date: 2026-09-10
    evidence: evidence:nasa-technical-authority-2026-09-10
  - title: Artificial Intelligence Risk Management Framework 1.0 — Core
    url: https://airc.nist.gov/airmf-resources/airmf/4-sec-core/
    source_date: 2023-01-26
    evidence_date: 2026-09-10
    evidence: evidence:nist-ai-rmf-roles-2026-09-10
review:
  last_checked: 2026-09-11
  checked_by: scout
uncertainty: >
  No retained source tests the complete named-owner and claim-ledger method,
  whether asking for uniquely held evidence recovers it, or whether preserved
  dissent remains usable over repeated operation. The strongest experiments
  concern finite tasks, equal-status model teams and knowably correct answers;
  the governance sources are operating precedents, not intervention tests.
applicability: >
  Synthesizing findings, recommendations or artifacts when contributors have
  unequal expertise, different evidence or unresolved conclusions. Transfer to
  continuing teams assumes claims can remain separately addressable, evidence
  can be compared, and later events can trigger reconsideration.
---

# How synthesis can preserve expertise and material disagreement

Combining contributions can erase the information the combination was meant to
capture. The evidence supports that failure mechanism more strongly than it
supports any complete remedy.

## What was observed

In equal-status model teams with knowably correct answers, integrative
compromise correlated with larger gaps between the team and its best member,
while epistemic deference correlated with smaller gaps. Merely identifying the
expert produced modest gains. The same averaging made teams more resistant to
an adversarial member, so expert-weighting is a trade rather than a universal
rule.

In hidden-profile tasks, commonly held facts pointed to the wrong answer while
different agents held the facts needed for the right one. Group accuracy was
17–36% for most tested models while one agent given all facts approached 100%.
Discussion often failed to surface or credit the uniquely held information.

Architecture and failure-taxonomy studies add a separate warning: task and
arrangement interact, errors amplify across agents, specifications disappear
between components, and termination or verification checks fail. Better
coordination measures can coexist with a poor product. A first-party research
system account supplies one centralized-synthesis example with explicit task
boundaries and citation controls, at high token cost; it does not establish
that centralization is generally superior.

NASA Technical Authority and the NIST AI RMF provide governance precedents for
independent bounded judgment alongside named responsibility for outcomes. They
describe accountable practice rather than testing model-team integration.

The narrower measurements and their conditions are retained in
[the delegated-contribution synthesis](integrating-delegated-contributions.md).

## The transfer into operating guidance

A named synthesis owner addresses responsibility for coverage, dependencies
and the combined artifact. It does not make that owner epistemically superior
or grant authority over the final decision. Keeping those roles explicit
prevents coordination ownership from silently becoming command authority.

A claim ledger is a proposed control for the observed loss of expert and unique
information. Recording contributor, source or revision, conditions, evidence,
confidence and disposition makes omission and compromise inspectable before
they disappear into fluent prose. Asking what only each inquiry found targets
the hidden-profile failure, but no retained study shows that the prompt
reliably recovers missing facts.

Decision rules should follow the kind of claim:

- compare evidence for truth-apt claims and unevenly distributed expertise;
- preserve independent safety and acceptance judgments instead of voting them
  away;
- let the authorized owner decide defensible trade-offs; and
- use consensus for preference aggregation or as a robustness signal, not as
  proof.

This rejects both majority vote and automatic deference to a claimed expert.
The first confuses prevalence with evidential quality; the second fails when
expertise is miscalibrated, evidence is weak or a contributor is compromised.
Direct evidence inspection and independent checks address that risk more
selectively than averaging every ordinary contribution.

Unresolved disagreement is useful state. Retaining the competing claims,
shared facts, point of divergence, consequence and reopening condition lets a
decision proceed without turning uncertainty into agreement. Escalation is
needed when purpose, authority or acceptance is disputed—not simply whenever
careful contributors differ.

## What remains unproved

No retained evidence shows that the combined procedure prevents expertise
dilution, preserves dissent over time or improves the resulting product. Its
components are a reasoned design transfer from observed failures and governance
precedents. A behavioural comparison with realistic uneven expertise and an
adversarial contribution would be needed before claiming effectiveness; none
has been run.

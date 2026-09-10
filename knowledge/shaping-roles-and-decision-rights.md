---
id: shaping-roles-and-decision-rights
title: When work earns a role and what that role must own
status: draft
relations:
  - type: applies_to
    to: skill:designing-roles-and-decision-rights
  - type: applies_to
    to: mission:accessible-work-tools
  - type: applies_to
    to: mission:community-decision-watch
  - type: applies_to
    to: mission:reproducible-practice
sources:
  - title: Towards a Science of Scaling Agent Systems, v3
    url: https://arxiv.org/abs/2512.08296v3
    source_date: 2026-04-08
    evidence_date: 2026-09-09
    evidence: evidence:scaling-agent-systems-2026-09-09
  - title: Multi-Agent Teams Hold Experts Back, v4
    url: https://arxiv.org/abs/2602.01011v4
    source_date: 2026-05-28
    evidence_date: 2026-09-09
    evidence: evidence:teams-hold-experts-back-2026-09-09
  - title: How we built our multi-agent research system
    url: https://www.anthropic.com/engineering/multi-agent-research-system
    source_date: 2025-06-13
    evidence_date: 2026-09-09
    evidence: evidence:multi-agent-research-system-2026-09-09
  - title: Artificial Intelligence Risk Management Framework 1.0 — Core
    url: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
    source_date: 2023-01-26
    evidence_date: 2026-09-10
    evidence: evidence:nist-ai-rmf-roles-2026-09-10
  - title: OCE Technical Authority
    url: https://www.nasa.gov/technical-authority/
    source_date: 2023-07-18
    evidence_date: 2026-09-10
    evidence: evidence:nasa-technical-authority-2026-09-10
review:
  last_checked: 2026-09-10
  checked_by: scout
uncertainty: >
  The execution-mode evidence concerns bounded agent tasks; NIST and NASA are
  governance frameworks rather than comparative tests. No source tests the
  combined role-design method or persistent agent roles over an indefinite life.
applicability: >
  Reshaping responsibility around recurring work in an agent organization. It
  does not assign a selected bounded task, grant authority the organization does
  not possess, or prescribe human employment and legal governance structures.
---

# When work earns a role and what that role must own

A recurring subject is not enough to justify a role. A role earns its continuing
context and coordination cost when a body of work repeatedly needs distinct
judgment, durable accountability or an independent decision right that cannot be
supplied reliably by the current owner, a tool or temporary assistance.

Bounded-task evidence argues against “more agents” as the default. Across 260
configurations, agent count alone did not predict performance; the work's
separability, tool intensity and single-agent baseline mattered, with multi-agent
arrangements hurting sequential PlanCraft and helping decomposable Finance Agent.
Anthropic's deployed research account likewise reserves parallel subagents for
valuable breadth-first work and reports roughly 15 times chat token use. These
measurements support trying tools or temporary help before creating durable
organization; they do not provide a tested threshold for persistence.

The decision-rights case is different from throughput. Self-organizing teams in
Pappu et al. repeatedly fell below their strongest member because discussion
averaged expertise away; simply identifying the expert did not cure it. NASA's
Technical Authority demonstrates one operating response in a high-consequence
setting: delegate a bounded independent challenge or approval right while the
program manager retains responsibility for the result. NIST similarly calls for
empowered accountable actors, clear communication lines, lifecycle review and
safe decommissioning. Neither source proves this structure best for agent teams.

Translate those mechanisms into a compact role contract: purpose; owned result;
decisions it may make; decisions it must challenge, escalate or leave elsewhere;
inputs and their provenance; outputs and consumers; authority and resources;
interfaces; review signals; and succession or retirement state. Responsibility
without the needed decision right creates a powerless owner. A decision right
without a named accountable result creates an unowned veto.

Mission transfer changes the design. Accessible work tools may use temporary
accessibility review for one release, but recurring user-research judgment and
support obligations can justify a persistent owner when findings repeatedly
reshape product choices. Community decision work needs independent collection of
minority evidence and a separate synthesis decision: free discussion can erase
the very disagreement the mission must preserve. Reproducible practice should
keep production and attempted refutation independent enough that the producer
cannot silently accept its own claim, while one program owner remains accountable
for what enters the public corpus.

Because no source tests the combined method, treat add/combine/retire triggers as
reasoned design guidance: add when repeated work exposes an unowned judgment or
required independence; combine when distinctions no longer change decisions;
retire when the owned work ends or another mechanism supplies it. Before changing
the chart, trace live commitments, authority, context and external interfaces so
the work does not disappear with the label.

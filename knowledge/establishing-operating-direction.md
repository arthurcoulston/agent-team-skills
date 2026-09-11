---
id: establishing-operating-direction
title: What an operating direction must make testable
status: draft
relations:
  - type: supports
    to: skill:turning-a-directive-into-operating-direction
  - type: applies_to
    to: mission:accessible-work-tools
  - type: applies_to
    to: mission:community-decision-watch
sources:
  - title: "Magenta Book: Central Government guidance on evaluation"
    url: https://www.gov.uk/government/publications/the-magenta-book/magenta-book-central-government-guidance-on-evaluation-html
    source_date: 2026-05-15
    evidence_date: 2026-09-10
    evidence: evidence:mission-assessment-magenta-book-2026-09-10
  - title: "Managing for Results: Agencies Report Positive Effects of Data-Driven Reviews on Performance but Some Should Strengthen Practices"
    url: https://www.gao.gov/products/gao-15-579
    source_date: 2015-07-07
    evidence_date: 2026-09-10
    evidence: evidence:operating-direction-gao-reviews-2026-09-10
  - title: NASA Systems Engineering Handbook, Revision 2
    url: https://www.nasa.gov/wp-content/uploads/2018/09/nasa_systems_engineering_handbook_0.pdf
    source_date: 2016-12-01
    evidence_date: 2026-09-10
    evidence: evidence:operating-direction-nasa-change-control-2026-09-10
  - title: SWE-053 — Manage Requirements Changes
    url: https://swehb.nasa.gov/spaces/7150/pages/16449679/SWE-053%2B-%2BManage%2BRequirements%2BChanges
    source_date: unknown
    evidence_date: 2026-09-11
    evidence: evidence:direction-change-nasa-swe-053-2026-09-11
uncertainty: >
  The sources support causal models, evidence-led reviews and controlled
  propagation in policy and engineering settings. They do not test this
  combined method on agent teams or establish one best review cadence.
applicability: >
  Establishing or revising the strategic interpretation beneath repeated work
  under a continuing directive. It does not choose the next bounded increment,
  grant authority, or prove that an intervention caused an observed outcome.
review:
  last_checked: 2026-09-11
  checked_by: scout
---

# What an operating direction must make testable

An open-ended directive names an enduring purpose but commonly leaves several
plausible routes. An operating direction is the current, revisable account of
who should benefit, what change counts as value, how the team's activity is
expected to produce that change, and which observations would challenge that
account. It sits between the directive and selection of bounded work.

The 2026 Magenta Book distinguishes inputs, outputs and outcomes and asks a
theory of change to expose actors, affected groups, causal steps, assumptions,
context and evidence strength. It explicitly recommends negative programme
theory—why the expected steps may fail—and continued revision as evidence
develops. This supports recording strategic assumptions and intermediate
outcomes; it does not make a causal diagram true or prescribe a linear system.

GAO's 23-agency study supplies a weaker, observational basis for review
practice. Agencies commonly prepared data, involved accountable leaders,
examined progress and recorded follow-up actions. Reported benefits and a
correlation with follow-up actions do not establish causation, and the
quarterly statutory interval does not transfer automatically. Reviews should
therefore be tied to the time in which evidence or exposure can change a real
decision, with event triggers for failed assumptions and changed conditions.

NASA change control supplies a propagation mechanism from a different,
high-formality setting: identify affected interfaces and documentation,
coordinate consequential changes, track their state and verify release. Its
current Software Engineering Handbook likewise says impact analysis should
reach beyond the immediate artifact to architecture, interfaces, operations,
requirements, safety, reliability, performance and needed expertise. For a
team's direction this supports a change ledger and impact pass over active
commitments, outcome criteria, roles, permissions, context, allocations and
external promises. It does not support importing a configuration-control
board or treating strategy as a frozen engineering specification.

Two mission transfers show why the same fields do not imply the same content.
For `accessible-work-tools`, beneficiary value is less avoidable friction in
work people choose to do; voluntary continued use and reported task friction
can challenge the initial product hypothesis. For `community-decision-watch`,
value includes accurate understanding and material participation across
conflicting residents; engagement volume or apparent consensus can rise while
the mission deteriorates. The first may review after a research or release
cycle; the second also needs event-triggered review before an irreversible
public decision. Neither activity counts as outcome evidence by itself.

The combined method is reasoned transfer and remains untested on a continuing
agent team. Its main contrary condition is exploratory work where neither the
route nor useful intermediate outcomes can yet be stated. In that case record
a bounded learning hypothesis and what decision its result will inform; do not
invent a precise outcome chain that the evidence cannot support.

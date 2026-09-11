---
id: allocating-capacity-under-a-continuing-mission
title: Why capacity allocation is a revisable portfolio of claims
status: draft
relations:
  - type: applies_to
    to: skill:allocating-capacity-under-a-continuing-mission
  - type: applies_to
    to: mission:accessible-work-tools
  - type: applies_to
    to: mission:public-evidence-ledger
  - type: applies_to
    to: mission:reproducible-practice
  - type: applies_to
    to: mission:community-decision-watch
sources:
  - title: Exploration and Exploitation in Organizational Learning
    url: https://doi.org/10.1287/orsc.2.1.71
    source_date: 1991-02-01
    evidence_date: 2026-09-11
    evidence: evidence:march-exploration-exploitation-2026-09-11
  - title: Google SRE Workbook — Handling Operational Overload
    url: https://sre.google/workbook/overload/
    source_date: unknown
    evidence_date: 2026-09-11
    evidence: evidence:sre-operational-overload-2026-09-11
  - title: Google SRE Book — Handling Overload
    url: https://sre.google/sre-book/handling-overload/
    source_date: unknown
    evidence_date: 2026-09-11
    evidence: evidence:sre-handling-overload-2026-09-11
  - title: NASA Cost Estimating Handbook v4.0, Appendix J
    url: https://www.nasa.gov/wp-content/uploads/2020/11/ceh_appj.pdf
    source_date: unknown
    evidence_date: 2026-09-11
    evidence: evidence:nasa-joint-cost-schedule-confidence-2026-09-11
review:
  last_checked: 2026-09-11
  checked_by: scout
uncertainty: No source tests the combined allocation record in a continuing agent team, and no source establishes a universal category ratio or review cadence.
applicability: Continuing teams facing a genuinely constrained resource envelope and competing present, future, operational, and uncertain demands. It is disproportionate for one bounded task with no meaningful portfolio trade-off.
---

# Why capacity allocation is a revisable portfolio of claims

March models a persistent trade-off: exploitation learns and pays sooner, while
exploration has more uncertain, delayed and diffuse returns. Adaptive systems
can therefore become highly competent at known activity while losing the
variation needed to adapt, but too much exploration can also prevent useful
knowledge from accumulating. The result supports protecting both time horizons,
not a fixed percentage.

Google's SRE practice exposes another failure mechanism. Urgent operational
work can preempt the engineering that would reduce future load. The Workbook
describes two team cases and Google's 50% cap on operational work; its companion
service chapter describes preserving headroom and shedding lower-criticality
load under saturation. Those are first-party practices in production SRE, not
controlled comparisons or staffing constants for agent teams.

NASA treats contingency as a response to modeled cost, schedule, risk and
uncertainty. Joint analysis matters because correlated exposures can consume
cost and schedule together. This supports making reserve explicit, sizing it
against stated uncertainty, and governing each draw. It does not justify
copying aerospace confidence levels or governance into a small team.

## The combined allocation method is inferred

Exploration protects future options; delivery realizes present value;
maintenance preserves capability and can reduce recurring demand; reserve
preserves response ability before the next event is known. Every unit assigned
to one is unavailable to the others. The synthesis is therefore a revisable
portfolio of explicit claims, assumptions, opportunity costs and triggers—not
an optimization formula.

The contrary evidence is part of the method. March's balance varies with
environmental change, knowledge distribution and time horizon. Google's ratio
belongs to an SRE institution. NASA starts from a particular risk model. Small
teams also pay switching costs when too many lanes run concurrently. A zero
share can be legitimate when its exposure is consciously accepted; a copied
quota cannot.

## Mission transfers

For **accessible work tools**, protect support and accessibility maintenance
before feature delivery consumes the envelope, and retain cash or specialist
attention for a consequential defect or newly discovered need. For a **public
evidence ledger**, correction and provenance maintenance remain claims even
when new entries attract more attention; reserve is for urgent correction or
adversarial response, not planned publication.

For **reproducible practice**, bound exploration by the decision it can change,
maintain artifacts and replication support, and preserve capacity for more
consequential questions. For **community decision watch**, ordinary monitoring
is maintenance, investigation of an emerging choice can be exploration, and an
irreversible decision can qualify for a reserve draw.

Actual use must be compared with the plan. Repeated overrun challenges the
envelope or demand model; repeated unused reserve is evidence for reconsidering
its size, not proof that uncertainty has disappeared. None of these transfers
has been tested as a combined agent-team procedure.

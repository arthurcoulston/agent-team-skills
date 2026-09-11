---
id: reconciling-portfolio-delivery
title: Why portfolio reconciliation follows deliveries rather than status
status: draft
relations:
  - type: applies_to
    to: skill:reconciling-portfolio-delivery
sources:
  - title: GAO Schedule Assessment Guide
    url: https://www.gao.gov/products/gao-16-89g
    source_date: 2015-12-22
    evidence_date: 2026-09-11
    evidence: evidence:gao-schedule-guide-2026-09-11
  - title: NASA Systems Engineering Handbook, Rev 2
    url: https://www.nasa.gov/wp-content/uploads/2018/09/nasa_systems_engineering_handbook_0.pdf
    source_date: 2016-12-01
    evidence_date: 2026-09-11
    evidence: evidence:nasa-se-handbook-2026-09-11
  - title: Government Functional Standard GovS 002, Project Delivery
    url: https://www.gov.uk/government/publications/project-delivery-functional-standard
    source_date: 2025-09-17
    evidence_date: 2026-09-11
    evidence: evidence:govs-002-project-delivery-2026-09-11
review:
  last_checked: 2026-09-11
  checked_by: scout
uncertainty: The sources concern engineered systems and public-sector portfolios, not agent teams; the combined delivery ledger and change traversal are reasoned synthesis and remain untested as instructions.
applicability: Several commitments contribute to shared consumer outcomes and their dependencies can change. For one bounded delegation or handoff, use the narrower skills.
---

# Why portfolio reconciliation follows deliveries rather than status

GAO shows why a connected schedule matters: missing or incorrect dependency
logic prevents early slippage from propagating and can invalidate the critical
path. Its schedule model is useful for tracing consequences, but a continuing
team should not inherit the assumption that dates alone define success.

NASA adds the missing interface and realization distinction. Interface control
coordinates the parties whose products must fit; verification checks the
specified product, validation checks fitness for intended use, and transition
puts the realized product into the next level or customer's hands. This supports
separating producer completion, interface compatibility, delivery and consumer
acceptance.

GovS 002 treats portfolio, programme and project governance as connected but
proportionate practices, and its current revision explicitly includes solution
transition, use and disposal. It supports portfolio-level ownership and
lifecycle attention, not one universal ledger schema.

The operative method is an inference across those mechanisms: keep a small
delivery network, traverse it when change occurs, and close a result against
live artifact and consumer evidence. None of the sources tests this synthesis
with agents, and no fixed review cadence, critical-path algorithm or status
taxonomy is justified across all missions.

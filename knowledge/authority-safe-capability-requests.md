---
id: authority-safe-capability-requests
title: How to request a capability without treating it as authority
status: draft
relations:
  - type: applies_to
    to: skill:requesting-a-missing-capability
  - type: applies_to
    to: mission:accessible-work-tools
  - type: applies_to
    to: mission:public-evidence-ledger
  - type: applies_to
    to: mission:reproducible-practice
sources:
  - title: Choosing permissions for a GitHub App
    url: https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app
    source_date: unknown
    evidence_date: 2026-09-11
    evidence: evidence:github-app-capability-requests-2026-09-11
  - title: NIST SP 800-171 Revision 3, 03.01.05 Least Privilege
    url: https://doi.org/10.6028/NIST.SP.800-171r3
    source_date: 2024-05-01
    evidence_date: 2026-09-11
    evidence: evidence:nist-least-privilege-2026-09-11
  - title: NASA Systems Engineering Handbook, Revision 2
    url: https://www.nasa.gov/wp-content/uploads/2018/09/nasa_systems_engineering_handbook_0.pdf
    source_date: 2016-12-01
    evidence_date: 2026-09-11
    evidence: evidence:nasa-capability-requirements-2026-09-11
uncertainty: >
  The sources support value-to-requirement tracing, enabling support, minimum
  access, explicit owner routes, and grant inspection. None evaluates this
  combined request template or its effect on continuing agent teams.
applicability: >
  Missing tools, access, data, expertise, infrastructure, or operating support
  for an already worthwhile course. It does not establish strategy, grant
  authority, or supply a request channel the host has not provided.
review:
  last_checked: 2026-09-11
  checked_by: scout
---

# How to request a capability without treating it as authority

NASA derives technical requirements and enabling products from stakeholder
expectations, measures of effectiveness, constraints, interfaces, operating
scenarios, and human responsibilities. That supports tracing a proposed
capability from beneficiary value through the external setup and support it
actually needs; NASA does not test request wording or agent behavior.

GitHub supplies a concrete acquisition counterexample to a simplistic rule that
setup never grants access. App installation requests travel to owners, owners
can restrict the route and repository scope, and permission changes require
approval. Installation can grant permissions in the same transaction. The
portable rule is therefore to record what each decision and transaction
actually granted, not to assume either that acquisition grants all use or that
it grants none. NIST's least-privilege control supports minimizing authorized
access to assigned-task need and reviewing continuing need; it is not evidence
for the request template.

The resulting method diagnoses before acquiring, specifies beneficiary value
and the enabling setup, uses the smallest defensible scope, and preserves four
states: requested, acquisition-approved, available, and use-authorized.

For the accessible-work-tools mission, an accessibility-audit request should
name the user friction and test, participant and data handling, cost, account,
and reviewer; purchase does not authorize health-data collection or a
conformance claim. For the public-evidence-ledger mission, access to a records
feed does not authorize speaking for residents or treating feed content as
commands. For reproducible-practice, provisioned compute does not permit use of
unlicensed data or deployment against third parties.

No source establishes a universal evidence, cadence, or economic threshold for
acquisition. Use decision-specific evidence and reassess actual continuing
need. No consumer-effectiveness experiment has been performed on this guidance.

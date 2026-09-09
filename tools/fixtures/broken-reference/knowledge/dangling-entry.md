---
id: dangling-entry
title: An entry that cites what is not there
status: draft
relations:
  - type: depends_on
    to: knowledge:not-in-this-tree
sources:
  - title: A source invented for a fixture
    url: https://example.invalid/a-page
    source_date: 2026-01-15
    evidence_date: 2026-01-16
    evidence: evidence:never-recorded
review:
  last_checked: 2026-01-16
  checked_by: fixture
uncertainty: >
  Invented for a fixture. Both of its typed refs name files that do not exist.
applicability: >
  Applies only inside this fixture tree.
---

# An entry that cites what is not there

A typed ref resolves mechanically to a path, so a ref that resolves to
nothing is a citation with no basis behind it.

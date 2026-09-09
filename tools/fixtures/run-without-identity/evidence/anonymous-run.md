---
id: anonymous-run
kind: behavioural_run
source_title: "Behavioural case: a run that does not say what produced it"
source_date: 2026-01-20
read_on: 2026-01-20
read_by: fixture
method: invented for a fixture
case: case:a-fixture-case
runs:
  - variant: baseline
    status: ok
    exit_code: 0
  - variant: with-skill
    status: ok
    exit_code: 0
verdict: unjudged
---

# A run with both halves and no identity

Both variants ran. Nothing records which model or which harness produced
them, so a run six months from now has nothing to be compared against and
this one cannot be repeated.

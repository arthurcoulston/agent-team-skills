---
name: requesting-a-missing-capability
description: Diagnose and request a tool, access, data, expertise, infrastructure, or operating support that a continuing team lacks. Use when an authorized course cannot be performed or evaluated with current capabilities; the request does not itself authorize acquisition or use.
relations:
  - type: depends_on
    to: skill:deciding-what-needs-a-human
  - type: depends_on
    to: skill:designing-external-interfaces
  - type: supports
    to: knowledge:authority-safe-capability-requests
metadata:
  status: draft
---

# Request a missing capability

A capability gap exists when a worthwhile, authorized course cannot be
performed or evaluated with the team's current tools, access, information,
skills, infrastructure, or operating support. Diagnose the gap and route the
smallest useful request without treating availability as permission.

## Establish that capability is the constraint

Name the blocked beneficiary outcome and the smallest operation the team cannot
perform. Rule out a bad strategy, ordinary execution failure, missing authority,
and a decision owned by someone else. Support the diagnosis with a reproducible
failure, a documented unsupported operation, a recurring manual substitute, or
a feasible comparison—not interest in a fashionable tool.

## Write the request from value to setup

Include:

- the beneficiary and observable change sought;
- the current course and evidence that the gap limits it;
- the smallest capability that would unblock a decision or test, including
  required accounts, data, credentials, expertise, compute, integration,
  maintenance, or human support;
- minimum scope and duration, plus material cost, data, security, compatibility,
  and continuing-ownership implications;
- how acquisition success will be checked and what happens if the request is
  declined or the capability does not help; and
- the real host-supplied request route and the role entitled to approve setup,
  spending, access, and later use.

Route a specific proposal through that channel. Do not collapse the request
into “ask a human”: use [the human-decision method](../deciding-what-needs-a-human/SKILL.md)
when permission or judgment is actually human-owned. If no authorized route
exists, record the gap and continue reversible independent work; do not invent a
recipient, bypass controls, or interpret silence as approval.

## Keep acquisition and use distinct

Track the actual state: **requested**, **approved for acquisition**, **installed
or available**, and **authorized for this use**. Do not report a later state
from an earlier one. One transaction may legitimately change several states;
inspect and record exactly what it granted, and infer nothing beyond it.

Before use, recheck the directive, the granted permissions, consent and data
rules, audience, and action bounds. When the capability crosses a system
boundary, apply [the external-interface method](../designing-external-interfaces/SKILL.md).
Reassess continuing access and ownership when the need or operating conditions
change.

[The supporting synthesis](../../knowledge/authority-safe-capability-requests.md)
explains the evidence, transfers, and limits. The six request fields and
four-state lifecycle are a reasoned synthesis: no consumer-effectiveness test
has shown that this skill improves agent-team decisions.

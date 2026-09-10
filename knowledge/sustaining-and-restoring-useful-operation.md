---
id: sustaining-and-restoring-useful-operation
title: How to sustain and restore useful operation
status: draft
relations:
  - type: applies_to
    to: skill:sustaining-and-recovering-operations
  - type: applies_to
    to: mission:accessible-work-tools
  - type: applies_to
    to: mission:public-evidence-ledger
  - type: applies_to
    to: mission:adaptive-ambition-support
sources:
  - title: Google SRE Workbook — Alerting on SLOs
    url: https://sre.google/workbook/alerting-on-slos/
    source_date: unknown
    evidence_date: 2026-09-10
    evidence: evidence:sre-alerting-on-slos-2026-09-10
  - title: Timeouts, retries, and backoff with jitter
    url: https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter
    source_date: unknown
    evidence_date: 2026-09-10
    evidence: evidence:aws-retries-backoff-2026-09-10
  - title: Making retries safe with idempotent APIs
    url: https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/
    source_date: unknown
    evidence_date: 2026-09-10
    evidence: evidence:aws-idempotent-retries-2026-09-10
  - title: Kubernetes Jobs
    url: https://kubernetes.io/docs/concepts/workloads/controllers/job/
    source_date: unknown
    evidence_date: 2026-09-10
    evidence: evidence:kubernetes-jobs-2026-09-10
  - title: NIST SP 800-34 Rev. 1
    url: https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf
    source_date: unknown
    evidence_date: 2026-09-10
    evidence: evidence:nist-contingency-planning-2026-09-10
review:
  last_checked: 2026-09-10
  checked_by: scout
uncertainty: >
  None of the sources studies a continuing agent team. The four operational
  states, recoverable-operation record, minimum-useful-capability test and
  capacity partition are reasoned synthesis and have not been tested together.
applicability: >
  Continuing teams operating through interruptions, external waits, ambiguous
  effects and recoverable failures. Exact thresholds and recovery objectives
  must be chosen from local consequence, authority, workload and resources.
---

# How to sustain and restore useful operation

The SRE Workbook identifies a 2020 publication year but no day in the material
read; NIST identifies May 2010 but no day. Their metadata therefore keeps
`source_date` unknown instead of inventing calendar precision. The three live
documentation and engineering pages likewise exposed no publication date.

Continuity is the ability to take the next useful action, not proof that a
process is alive. The source domains expose different parts of that decision:
service objectives tie intervention to user-visible consequence; distributed
systems show how retries consume shared capacity and duplicate ambiguous effects;
job controllers make attempts and terminal conditions explicit; contingency
planning restores prioritized functions under chosen time and data-loss bounds.

## Transfer the mechanism, not the infrastructure constants

Google's SRE examples use error-budget burn over multiple windows to balance
detection speed and alert volume. The same chapter warns that rate-based alerts
behave poorly at low request volumes. A continuing team should therefore connect
an alarm to a consequential mission condition and a useful next action, while
rejecting the examples' numerical thresholds as defaults for sparse work.

AWS describes retries as selfish consumers of server capacity. Layered retries
can amplify load, while capped exponential backoff and jitter spread attempts.
Its idempotency account addresses the harder case: a caller can time out after an
effect succeeded. Stable request identity and semantic checks permit safe replay
in designed APIs. Agent operations often include tools without those semantics,
so resumption must inspect external state and treat unresolved irreversible
effects as an escalation, not an automatic retry.

Kubernetes Jobs separate active, complete and failed conditions; limit attempts
or elapsed time; and allow different failure classes to be ignored, counted or
made terminal. They also warn that the same program may start more than once.
This supports explicit attempt state, budgets and cause-sensitive action. It does
not establish a four-state vocabulary or universal attempt count for agents.

NIST contingency planning begins from a business-impact analysis, recovery
priorities, recovery-time and recovery-point objectives, then requires testing
and maintenance. Its institutional apparatus is disproportionate for many agent
missions. The transferable mechanism is consequence-shaped restoration of a
prioritized function, with an exercised check and explicit tolerance for delay
and lost state.

## The combined operational method is inferred

From those mechanisms, distinguish useful activity, intentional waiting, block
and failure by the next transition each permits. Preserve a stable operation
identity, verified state, completed effects, uncertainty, remaining bounds and
next discriminating action. Retry only after classifying cause and replay safety;
give one layer ownership of the retry budget. Recover a declared minimum useful
capability before restoring convenience or backlog.

No source tested that combined procedure. In particular, “minimum useful
capability” is a mission-level adaptation of recovery priorities, and the
delivery/maintenance/reserve partition is opportunity-cost reasoning rather than
a measured allocation. The resulting skill therefore gives no fixed timeout,
retry limit, reserve percentage or exactly-once promise.

## Mission conditions change the operational decision

For **accessible work tools**, restoration includes a working build and support
path plus reachable accessibility evidence. A dependency's named restoration
window can justify waiting; absence of release evidence is a block. For the
**public evidence ledger**, ambiguous publication requires an external-state
check before replay, and provenance loss can require containment even while
read-only service continues. For **adaptive ambition support**, consent remains
an authority condition: a human availability window can create intentional
waiting, but recovery cannot manufacture permission.

The adjacent boundaries matter. A session-handoff method determines what the
next run receives; live continuity determines whether replay is safe and what to
restore. A repeated-failure method learns after recurrence; incident recovery
does not silently rewrite standing practice. A reliability method evaluates
operation across repeats; one successful recovery supplies only one observation.

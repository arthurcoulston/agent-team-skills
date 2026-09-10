---
name: sustaining-and-recovering-operations
description: Keep a continuing agent team able to do useful work through stalls, outages, interrupted runs and constrained capacity. Use when operation may be waiting, blocked or failed; before retrying an ambiguous effect; when defining recovery; or when activity and cost no longer show whether the mission remains operable.
relations:
  - type: depends_on
    to: skill:handing-work-across-sessions
  - type: depends_on
    to: skill:correcting-repeated-failures
  - type: supports
    to: skill:building-reliability-evidence
metadata:
  status: draft
---

# Sustain and recover continuing operations

Keep the team able to make the next useful move. A running process is not
continuity, and restarting one is not recovery. Operability means that a
prioritized mission function can proceed under valid authority, from verified
state, with a safe next action and reachable evidence.

## Name the operational state by its next transition

Classify each live operation as one of four states:

- **Useful activity** is producing or testing an outcome tied to the directive.
- **Intentional waiting** names the external condition being awaited, its owner
  or observation window, and the next review point.
- **Blocked** means a necessary input, capability or authority is absent and the
  request has been routed to someone who can supply it.
- **Failed** means a defined attempt or deadline ended without its acceptance
  condition.

This four-state classification is a reasoned transfer from service alerting and
bounded job-controller semantics; no cited source tested it on continuing agent
teams. Use it to make the next action explicit, not as a universal state machine.
A timestamp alone cannot separate the four states. Fixed inactivity alarms are
especially unreliable for sparse work: choose review points by consequence and
the expected rhythm of the operation.

## Keep a recoverable operation record

Before an interruption, and whenever an effect may be ambiguous, preserve:

- the intended outcome and a stable identity for this operation;
- the last verified state and the evidence for it;
- effects already made, including anything sent or published;
- open uncertainty and mutable dependencies;
- remaining authority, attempt, time, cost and harm bounds; and
- the next safe action that would discriminate progress from failure.

On resumption, verify mutable dependencies and check whether the intended effect
already happened before replaying it. Stable operation identity can make an API
retry idempotent, but it cannot make an irreversible human or public action safe
to repeat. When that check cannot resolve ambiguity, contain the operation and
escalate according to its consequence.

Use [handing work across sessions](../handing-work-across-sessions/SKILL.md) to
construct and verify the boundary record. This skill owns the live decision to
continue, wait, stop or recover after the boundary.

## Spend retries to learn or recover, not to look busy

Classify the cause before another attempt:

1. Retry a plausibly transient failure only when replay is safe.
2. Change the method only when new evidence distinguishes a cause.
3. Escalate when authority, consequence or repeated ambiguity requires another
   decision.
4. Stop when the declared attempt, elapsed-time, cost or harm bound is reached.

Give one coordinator ownership of the retry budget. Otherwise nested workers can
multiply a small local retry policy into a large system load. Backoff and jitter
protect shared capacity during transient faults; they do not turn an unchanged
attempt into learning. No source here supplies a generally useful retry count or
timeout, so select bounds from the operation's consequence, latency distribution
and resource envelope rather than copying infrastructure defaults.

When a failure recurs beyond this incident, use
[correcting repeated failures](../correcting-repeated-failures/SKILL.md). That
skill owns causal learning and changes to standing practice; repeatedly retrying
the live operation is not a substitute.

## Recover a minimum useful capability

Declare what must return before recovery begins:

- the prioritized mission function;
- valid authority and current constraints;
- trustworthy state and reachable evidence;
- a safe next action; and
- a check that demonstrates those conditions hold.

Also state how soon the function must return and how much state loss is
tolerable. Restore this minimum before convenience features or backlog. Exercise
the recovery path before relying on it; an unexercised procedure is a hypothesis.

“Minimum useful capability” is this collection's reasoned operational transfer
from consequence-shaped contingency planning, not a tested agent-team construct.
It deliberately asks for mission function rather than process liveness. A green
worker that cannot reach its evidence, lacks authority, or can only repeat an
ambiguous effect is not ready.

## Protect capacity for continuity

Keep committed delivery, maintenance and an incident-or-opportunity reserve
visible as different claims on capacity. This partition is reasoned guidance,
not evidence for a universal percentage. Direction and work selection decide the
allocation; this skill requires only that current commitments do not silently
consume the ability to recover or respond to important new information.

Track attempt cost, delay and human or other-agent intervention alongside useful
outcomes. Cheap activity that neither advances nor protects beneficiary value is
not continuity. A fast burn of a meaningful error budget can justify urgent
intervention for a high-frequency service; a sparse mission instead needs named
consequences and review points, not borrowed service thresholds.

## Apply the method to the mission

For **accessible work tools**, a dependency outage with a known restoration
window can be intentional waiting; a release missing required accessibility
evidence is blocked. Retry a failed deployment only if replay is safe and
bounded. Recovery restores a working build and support path plus reachable
accessibility evidence—not merely green CI.

For a **public evidence ledger**, check an ambiguous publication before replay:
a duplicate or conflicting entry is consequential. Bound ordinary fetch retries;
contain suspected provenance loss or adversarial corruption. Minimum useful
recovery may restore trustworthy reading, correction history and the ability to
abstain while intake stays paused.

For **adaptive ambition support**, absence during an agreed availability window
is waiting, while missing consent is a block. Do not infer permission or keep
prompting in the name of recovery. The minimum capability may be a current
consent record and a safe deferred next action.

## Where this stops

This skill keeps a live operation recoverable. It does not choose strategic
outcomes, allocate a universal capacity mix, preserve every detail of a session
handoff, diagnose a repeated organizational failure, or establish longitudinal
reliability. Use the adjacent skills for those decisions.

The [supporting synthesis](../../knowledge/sustaining-and-restoring-useful-operation.md)
records the source conditions, contrary evidence and transfer reasoning.

**Draft.** The sources cover production services, distributed calls, batch jobs
and federal contingency planning. No source tests this combined method on a
continuing agent team, and no behavioural case or product-effectiveness test has
been run for this skill.

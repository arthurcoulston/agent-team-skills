---
name: reconciling-portfolio-delivery
description: Reconcile dependencies, owners, artifacts and consumer acceptance across several changing commitments. Use when local task reports no longer show whether the portfolio can deliver an integrated result.
relations:
  - type: depends_on
    to: skill:handing-work-across-sessions
  - type: supports
    to: skill:turning-a-directive-into-operating-direction
metadata:
  status: draft
---

# Reconcile portfolio delivery

Maintain one portfolio ledger at the grain of **deliveries**, not every task.
For each promised result record its consumer, accountable owner, current
artifact or external state, acceptance condition, prerequisite deliveries,
and the next decision. A status report is evidence only when it points to the
artifact or state it describes.

## Trace the delivery network

Work backward from each consumer-accepted result. Link every prerequisite to
the delivery it enables and name the owner of the seam. Treat missing links,
unjustified fixed dates, orphan outputs and circular dependencies as defects;
do not hide them with optimistic dates. Identify the chain whose delay would
delay the next portfolio outcome, but also retain near-critical alternatives
and externally constrained handoffs.

For every interface, specify:

- what exact artifact, decision or state crosses it;
- where it will be delivered and how the receiver recognizes the current version;
- who produces it, who receives it and who resolves incompatibility;
- the readiness and acceptance checks, including evidence; and
- what happens if it changes, arrives late, is rejected or is cancelled.

## Reconcile on change

When any commitment, assumption or artifact changes, traverse both directions:
upstream to prerequisites that may now be unnecessary or insufficient, and
downstream to deliveries, dates and acceptance checks that depended on it.
For each affected delivery choose **keep, revise, replace, wait or cancel**.
Apply that decision in the owning system; a ledger annotation alone does not
change the work.

Then inspect the live artifacts. Confirm that the producer's output exists at
the named location, matches the version the consumer expects, and has reached
the consumer's acceptance mechanism. “Done” by the producer and “accepted” by
the consumer are separate observations. Close a delivery only when both are
evidenced, or record the named blocker and owner.

## Use exceptions, not ceremony

Reconcile at a decision point or when a dependency, owner, acceptance
condition, delivery location or critical-chain assumption changes. Review the
whole network only when the change can propagate widely; otherwise inspect the
affected neighborhood. Escalate conflicting priorities to the authority that
owns the portfolio trade-off. Coordination does not grant authority to cancel
another owner's commitment or waive a consumer's acceptance.

This skill complements bounded delegation and handoff guidance: those make one
commitment transferable; this method tests whether many commitments still
compose into accepted outcomes. The [supporting basis](../../knowledge/reconciling-portfolio-delivery.md)
explains the transfer and limitations. **Draft:** no behavioural or
consumer-effectiveness test has been performed.

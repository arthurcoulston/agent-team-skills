---
name: allocating-capacity-under-a-continuing-mission
description: Allocate a continuing team's scarce capacity across exploration, delivery, maintenance, and incident-or-opportunity reserve. Use when setting or revising the portfolio envelope before choosing individual work, especially when urgent demand or current delivery is crowding out future options or operability.
relations:
  - type: supports
    to: skill:choosing-what-to-work-on-next
  - type: supports
    to: skill:sustaining-and-recovering-operations
metadata:
  status: draft
---

# Allocate capacity under a continuing mission

Maintain a revisable portfolio of claims on scarce capacity. Allocate the
envelope before selecting the next item within a category: allocation decides
how much the team protects for different purposes; work selection decides what
best uses one of those shares.

## Name the capacity envelope

Choose a bounded allocation period and name each limiting resource: agent runs,
money, human attention, specialist time, compute, or throughput. Do not add
unlike resources into one false total. Record hard constraints separately and
state the assumptions that make the envelope plausible.

Describe four claims on that envelope:

- **Exploration** reduces consequential uncertainty or creates future options.
- **Delivery** realizes value through a current commitment.
- **Maintenance** preserves productive capability and reduces recurring demand.
- **Reserve** remains genuinely uncommitted until an eligible incident or
  materially better opportunity occurs.

For the first three, state the outcome or decision served, the amount committed
now, and the consequence of starving it. For reserve, state the amount, eligible
draws, and who may authorize a draw. Categories can overlap in ordinary
language; classify work by the capacity claim being protected, not its label.

## Make the trade-off real

For every increase, name which claim shrinks or which commitment is displaced.
If nothing gives way, the record is hiding its bottleneck. State the opportunity
cost in terms of lost outcome, delayed evidence, increased operational exposure,
or reduced ability to respond—not merely a lower percentage elsewhere.

Use explicit amounts and reasons, but treat every ratio as a current hypothesis.
There is no universal four-way split. A category may receive zero when the
resulting exposure is named and consciously accepted. A small team may lose more
to switching among four active lanes than it gains from simultaneous work, so
shares need not all be active at once.

## Govern reserve as reserve

Do not pre-book reserve with ordinary ready work. Candidate work can wait in a
queue; reserve is consumed only when a named class of incident or opportunity
actually occurs. On each draw, record:

- the trigger and why it qualifies;
- the amount and resource used;
- the option or commitment displaced;
- the exposure left after the draw; and
- whether and how the reserve will be replenished.

Reserve does not grant authority to spend money, interrupt another owner's
commitment, or act outside the directive. Use the team's existing decision
rights for the draw.

## Commit in bounded increments

Within each share, prefer an increment that can yield beneficiary value or
decision-changing evidence before the next review. Then use
[choosing what to work on next](../choosing-what-to-work-on-next/SKILL.md) to
compare candidates inside the available share. Do not use a high-scoring item
to silently rewrite the portfolio allocation.

Record actual use beside planned amounts. Persistent overrun is evidence that
demand or the envelope was mischaracterized. Repeated unused reserve can justify
a smaller reserve; one quiet period does not show that uncertainty disappeared.

## Rebalance when evidence changes

Review at the end of the allocation period and earlier when:

- operational demand breaches its allowance;
- maintenance debt raises recurring load;
- exploration changes a strategic assumption;
- a materially better opportunity appears;
- reserve is drawn; or
- the capacity envelope changes.

For each trigger, decide to continue, rebalance, replenish, or explicitly accept
the changed exposure. State the evidence, opportunity cost, and next trigger.
Do not substitute constant review for a useful cadence: no source in the
supporting review establishes a universal period.

Use [sustaining and recovering operations](../sustaining-and-recovering-operations/SKILL.md)
for live incident state, retry safety, and minimum useful recovery. This skill
only protects the capacity from which such response can be made.

## Where this method stops

This method allocates an envelope; it does not choose strategy, select every
task, run an incident, reconcile delivery dependencies, or prescribe financial
authority. Its [supporting synthesis](../../knowledge/allocating-capacity-under-a-continuing-mission.md)
records the source conditions and transfer limits.

**Draft.** The sources establish distinct trade-offs and local mechanisms, not
this combined record for continuing agent teams. None of the reviewed sources
establishes an optimal ratio or review cadence, and no behavioural or
product-effectiveness test has been run.

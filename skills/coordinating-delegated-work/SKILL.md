---
name: coordinating-delegated-work
description: Decide whether a bounded piece of work should be delegated, divide and assign it, then integrate and verify what comes back. Use when choosing between doing selected work yourself, running independent workers or coordinating several agents, and when delegated results are returning and must be combined, accepted or stopped.
relations:
  - type: depends_on
    to: skill:writing-agent-instructions
metadata:
  status: draft
---

# Coordinate work you delegate

You have selected a bounded piece of work and you own its result whatever
executes it. Delegation buys parallel attention and coverage; it charges
coordination, integration and verification in advance, and it charges them
whether or not the work turns out to need them. Decide deliberately, divide
only what separates, and accept nothing you have not inspected.

## Decide the execution mode before you divide anything

Establish first how a single competent attempt already performs, by running one
or by reasoning from comparable work you have seen. That result governs the
decision more than anything about the arrangement you were considering:
coordination adds least exactly where the single attempt is already close to
the bar, and its cost is paid regardless.

Delegate when all three hold. Otherwise do the work yourself, or with tools.

1. **The parts separate.** A worker can finish its piece without needing
   another worker's intermediate results. Sequential or tightly dependent work
   degrades sharply when split.
2. **The single attempt is visibly short**, not marginally short. Work a single
   agent nearly succeeds at is the worst case for delegation.
3. **The result is worth several times the cost.** Expect a large token
   multiple over doing it once, plus your own integration and verification time.

Delegate for **coverage** rather than throughput when the value is in searching
a space you cannot enumerate in advance — independent workers reach different
places, and their findings overlap far less than you would expect. Do not
delegate work that needs every worker to share the same context.

The measured task properties, the thresholds, and the conditions they were
measured under are in
[what decides whether delegating helps](../../knowledge/delegation-decision-basis.md).
Read it before exporting any number from it.

## Divide the work, then make each assignment self-sufficient

Split along the seams you found in step 1, not into equal shares. For each
piece name the owner, its inputs, the output and its form, what it must not
cover, the dependencies it waits on, and the condition under which it is
finished. Name the integration owner before any work starts — usually you.

Under-specified assignments are the largest single failure group in the
annotated evidence, and they fail in a characteristic way: workers duplicate
each other's effort, leave gaps between their pieces, and keep working past the
point of being done. Write the assignment so each of those is detectable.

Use [writing agent instructions](../writing-agent-instructions/SKILL.md) for
composing the brief itself. State the stopping condition explicitly; a worker
that does not know when it is finished is a common and expensive failure.

## Connect workers no more than the coupling requires

Default to independent execution with no cross-talk, and add a channel only
where a real dependency needs one. Every added connection multiplies
coordination cost several times over, and reorganizing prompts — assigning
roles, naming a leader — has been measured to change coordination outcomes
very little.

Where workers can see each other, expect their approaches to converge, often
to a striking degree, and do not read that convergence as evidence that the
approach is right. Independent workers going wrong unchecked is the most
wasteful arrangement of all, so pair loose coupling with a real verification
step rather than with trust.

## Integrate by weighing evidence, never by averaging it

Combining contributions reliably loses the best one. Teams that discuss freely
land below their own strongest member, and information only one worker holds is
exactly what a consensus process discards. Telling everyone who the expert is
does not fix it.

So, as integration owner:

- Require each contribution to arrive with its basis — what was checked, what
  it rests on — not only its conclusion.
- Ask each worker directly for what only it saw.
- Resolve disagreement by inspecting the stronger evidence. Do not split the
  difference, and do not count positions.
- Carry surviving dissent and minority findings into the integrated result with
  their reasoning, so a later check can reopen them.

There is a trade here worth knowing before you make it: the same averaging that
dilutes your best worker also absorbs a bad one. If a contributor may be
unreliable, verify its evidence directly rather than restoring averaging as a
defence. The reasoning and the measurements are in
[why combining contributions loses the best one](../../knowledge/integrating-delegated-contributions.md).

## Verify against artifacts, not against reports

A completion report is a claim. Check the artifact: that it exists where its
consumer will look, that it does what it was for, and that the consumer can
actually use it. Check the seams between pieces, which is where gaps and
duplication live, and check that nothing is waiting on a dependency that has
since changed.

Watch for coordination measures that improve while the product does not. Work
can merge cleanly, on schedule, with every worker reporting success, and still
produce something that does not run. Verification is the control with the best
evidence behind it and it is still only partial — adding it is not the same as
having fixed what it addresses.

## Revise, cancel or stop

Stop delegated work when its assumptions changed, when a dependency it needs
has gone stale, when spend has passed what the result is worth, or when the
returning artifacts show the split was wrong. Reassign or reabsorb the piece
rather than letting it run to its original stopping condition. Say what changed
when you cancel, so the next decision inherits the reason.

If two rounds of revision have not converged, the problem is the division or
the assignment, not the worker.

The failure surface this section works against, and which controls were
actually tested rather than merely proposed, is in
[where delegated work fails](../../knowledge/coordination-failure-controls.md).

## What this method rests on

The evidence behind it is bounded-task research and two first-party engineering
accounts: controlled benchmark comparisons of agent architectures, an annotated
failure taxonomy, a study of self-organizing teams, and observed swarm
behaviour. None of it measures a team that keeps operating after the task
ends, and the numeric thresholds in the linked entries are properties of their
own benchmarks and models rather than constants.

**Draft.** This skill's own effectiveness has not been tested. No behavioural
case has been run against it, and no measurement here shows that a leader
following it coordinates better than one who does not.

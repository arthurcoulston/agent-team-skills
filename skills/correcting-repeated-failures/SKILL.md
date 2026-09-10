---
name: correcting-repeated-failures
description: Turn something that has gone wrong more than once into a change that holds — confirming the repetition is real before spending on it, comparing plausible causes instead of adopting the first, choosing whether the fix belongs to the task, the role, the team or shared guidance, stating the observable effect in advance, checking it transferred without regressing, and retiring what it supersedes. Use when the same failure has recurred, when a proposed fix is a new standing rule, and when reviewing guidance that accumulated from earlier repairs.
relations:
  - type: depends_on
    to: skill:writing-agent-instructions
  - type: depends_on
    to: skill:coordinating-delegated-work
  - type: depends_on
    to: skill:reviewing-another-agents-work
metadata:
  status: draft
---

# Correct a repeated failure

Something has gone wrong more than once and you are about to fix it. The
default fix — append a rule to the standing instructions and move on — is
cheap, feels responsible, and is a genuine gamble. Across three controlled
studies of injected guidance, **39 of 49** skills produced zero improvement
against paired runs on real repositories; mean Pass@2 *fell* by 1.3–4.2% in a
second study, with gains in only 17–36% of pairs; and a third, attributing
harm skill by skill, separated **125 cases where the task failed with the
guidance and passed without it** from **182 where it passed but cost far
more**. Token cost moved from modest savings to increases of 394% and 451%.

Curated guidance does help under the right conditions — content verified
against the tasks it was built for gained **+5.8 to +10.5** points over a
no-change baseline in a fourth study, and transferred across model families.
The difference is not writing quality. It is whether the need was established
first, and whether anyone checked afterwards.

So the discipline here is not "be reluctant to change things". It is: know
what you are fixing, know where the fix belongs, and be able to tell later
whether it worked.

## Confirm the repetition before you spend anything

You are probably looking at fewer observations than you think, on a system
noisier than you think.

On the same task, with the same agent and no changes, repeated execution
produces both outcomes routinely: one benchmark reports Pass@10 around **78%**
while all ten runs succeed for only about **36%** of tasks — on roughly four
tasks in ten, a failure is an ordinary outcome of a working setup. Removing
the randomness does not rescue you; forcing deterministic decoding "does not
consistently improve reliability across models". And the noise floor differs
by domain: over increasing task duration, one study measured graceful
degradation falling from 0.90 to 0.44 in software engineering while document
processing stayed near flat.

Before treating repetition as signal:

- **Count attempts, not incidents.** Two failures you remember out of an
  unknown number of runs is not a rate. Go and get the denominator.
- **Re-run where you can.** If the failure survives repetition under
  unchanged conditions, you have something. If it does not, you have variance.
- **Vary something irrelevant.** A pattern that persists across different
  inputs, times and instances is harder to explain by chance than one that
  only ever appears in the case you first noticed.
- **Check the specification first.** Clarifying ambiguous task instructions
  produced substantial reliability gains in that same study. Underspecified
  work looks exactly like an unreliable worker.

No source gives a threshold, and neither does this skill: how many
repetitions establish a pattern is your judgement, made explicit, against the
noise level of the work you actually do.

## Compare causes; do not adopt the first one that fits

A cause story that explains everything you saw is not thereby true. Machine
attribution over 1,140 genuinely failed trajectories — median 145 steps, no
planted errors — identified the responsible role about **half** the time and
the exact decisive step about a **quarter** of the time, with the strongest
prior baseline at 13.2%. Treat your first explanation as a hypothesis.

Put at least three candidate causes on the table before choosing. The useful
ones separate along what each would demand:

| Candidate cause | The repair it demands |
|---|---|
| The knowledge was never available | Supply it |
| It was available and did not load | Fix delivery, not content |
| It loaded and was not applied | The instruction is not the problem |
| A tool, permission or access limit | Get the capability |
| Contradictory or stale standing context | Remove or reconcile, do not add |
| The assignment was wrong or ambiguous | Fix the brief |
| The model, tool or environment changed | Re-check what you assumed |

Three traps are worth naming because they each produce a confident wrong
answer. An error **already present in the handoff instruction** is not the
recipient's error. An error that was **repaired later in the run** is not the
root cause even though it appears in the trace. And an error that merely
**propagated** is not the one that mattered.

**The most consequential distinction is the third row.** Two independent lines
of evidence say the failing step is usually application rather than storage.
In a benchmark built so that the needed experience provably existed, every
automatic method for reusing it still had negative cells — retrieval on
surface similarity lost ground badly — and the authors located the bottleneck
in how methods "extract reusable content... index it, and apply it at test
time". Separately, agents show "a pervasive gap between retrieving updated
evidence and acting on it", the best model reaching 55.2% at noticing its own
stored beliefs had gone stale. An agent can hold the right instruction and
plan from the wrong one.

That matters because "the agent didn't know" and "the agent knew and didn't
use it" are indistinguishable in most records — and only the first is fixed by
writing more down. **Some causes cannot be separated by looking harder; they
need an act.** Go and read what the consuming agent actually received in the
failing run. If you cannot reconstruct that, making it reconstructible is your
first change, and it is worth more than the fix you came for.

## Choose the level the change belongs to

Fixing at the wrong altitude is its own failure mode: too low and the same
failure recurs beside your fix; too high and you have taxed every consumer to
solve one case.

- **This task or run.** The cause is local — bad input, a one-off ambiguity, a
  stale artifact. Fix it here. Do not promote it.
- **The role.** The same worker will hit this again, and no one else will.
  Changing the role's standing instructions is proportionate.
- **The team.** Several roles hit it, or it lives in how work is handed
  between them. Fix the arrangement, not each participant.
- **Shared guidance many consumers inherit.** Only when the cause is general
  *and* you can show it in more than the originating case. This level is where
  guidance goes to accumulate; the evidence bar is highest here.

Two rules for the boundary. **Promote on demonstrated generality, not on
plausible generality** — one of the studies above found public skills degrading
performance because guidance written elsewhere conflicted with local context.
And **prefer removing to adding where the cause is contradiction or staleness**:
if the standing context already contains something wrong, another rule beside
it makes two.

Compose the changed instruction with
[writing agent instructions](../writing-agent-instructions/SKILL.md), which
covers diagnosing before adding rules and preserving requirements through
deletion. This skill decides *what* to change and *where*; that one writes it.

## Say what you expect to see, before you change anything

Write down, in advance and where you will find it later: **what observable
thing should differ, in which cases, by roughly how much, and by when** —
plus what would tell you the change was wrong.

Do this first because the alternative is unfalsifiable. After a change, any
subsequent good run reads as confirmation, and on work with a 36% all-runs
success rate you will get good runs regardless. A prediction made in advance
is the only version of this that can fail.

Include the cost you are willing to pay. Every guidance change has one, and in
the studies read here it ranged from small to a 451% token increase with no
change in outcome.

This is our judgement, not a measured result: no source read here tested
predicting an effect in advance versus not. The reasoning is the noise floor.

## Check that it held — and that it transferred, and what it cost

Verify the way the studies did, because their method is the transferable part:
**run the same work with and without the change**, and score it on something
that does not depend on your judgement of the output.

Four checks, in order of how often they are skipped:

1. **The originating case now passes.** Necessary, and nearly worthless alone.
2. **Related cases the change did not come from.** This is the transfer test.
   The benchmark that isolates experience transfer builds its test set from
   tasks *other than* those the experience was extracted from, linked by
   procedural overlap. Pick two or three cases that share the mechanism but
   not the specifics. A fix verified only on its originating case has not been
   shown to generalise.
3. **What already worked still works.** The 125 functional failures above were
   all tasks that passed *before* the guidance was added. Regression is not a
   theoretical risk here; it is the second most common outcome measured.
4. **Cost, alongside outcome.** 182 regressions in that same study were tasks
   that still passed and simply cost much more — dominated (62.6%) by
   "unnecessary verification, exploration, or implementation pipelines" that
   the new guidance faithfully caused. A pass-rate comparison cannot see this.

One control is worth importing if you can afford it: **compare against a
same-length irrelevant change**, not only against nothing. One study found
that for some models an equally long irrelevant skill reproduced most of the
loss — the volume, not the content, was doing the damage. Without that
control you cannot tell those apart.

And know what a passing transfer test establishes: that the change works on
related tasks, on this model, today. The same study found skill rankings
transferring **weakly across models**. A model or harness change reopens the
question.

If the check is inconclusive, say so and leave the change provisional. Do not
convert "we could not tell" into "it worked". Where the outcome needs a
judgement rather than a test, get it from someone who did not make the
change — see
[reviewing another agent's work](../reviewing-another-agents-work/SKILL.md).

## Retire what the change supersedes, and keep its evidence

A change that leaves its predecessor in place has added, not corrected. Do the
retirement in the same act as the change, because it never gets easier.

- **Name what this supersedes** and remove it. If you cannot say what a new
  rule replaces or sits beside, you have not finished diagnosing.
- **Keep the evidence, not just the rule.** Retain what went wrong, what you
  concluded, what you predicted and what you observed. A retired rule whose
  reasoning survives can be reopened; one whose reasoning is gone gets
  relitigated from nothing, or reinstated by the next person who sees the
  failure.
- **Re-examine guidance whose subject may have moved.** Guidance decays
  silently in three ways: its subject changes version, the model improves past
  it, or it simply accumulates. A first-party account of a long-running system
  describes sprint decomposition and a separate evaluator agent that were
  necessary on one model and became "unnecessary overhead" on the next — "the
  model's raw capability increased, so the boundary moved outward". The
  scaffold never failed. It stopped being needed, and nothing announced it.
- **Sweep on a schedule, not on noticing.** Compliance with simultaneous
  instructions deteriorates as their number grows, and none of the three decay
  mechanisms produces a symptom you would attribute to the guidance. Set a
  recurring occasion to ask of each standing rule: what failure is this
  preventing, and would I still adopt it today?

## Where this stops

This skill covers the span from a noticed repetition to a scoped, verified,
recorded change. It stops at three edges.

**A failing delegation split is not this problem.** If the recurring failure is
in how work was divided, briefed, connected or integrated between workers,
[coordinating delegated work](../coordinating-delegated-work/SKILL.md) resolves
it at its own level, and applying this skill's machinery to it will produce a
rule where a different division was needed.

**Designing the team's evaluation programme is out of scope.** What is here is
how to establish one change; deciding what the team should measure
continuously is a larger question this collection does not yet answer.

**Procuring models, tools or permissions is out of scope.** Where the cause is
a missing capability, this skill's job ends at identifying it as such — which
is the part that gets skipped, because a missing capability and a missing
instruction feel identical from inside a failed run.

## What this method rests on

Three controlled studies of injected guidance in software engineering and web
development, a benchmark isolating experience transfer across model families,
a root-cause attribution benchmark over long failed trajectories, two
reliability studies using repeated execution, an annotated multi-agent failure
taxonomy, a stale-memory benchmark, an instruction-density study, and one
first-party account of a long-running build. The reasoning and the conditions
are in
[telling a real repeated failure from variance](../../knowledge/confirming-a-repeated-failure.md)
and
[what a guidance change is actually worth](../../knowledge/what-a-guidance-change-costs.md).

Three transfer limits belong here rather than only there. **None of the
guidance studies evaluates guidance written by the team that experienced the
failure it addresses** — they inject public skills into tasks their authors
never saw, which is not the case you are in, and that gap could plausibly move
the sign. **The attribution result measures machine attribution**, not a leader
reading its own team's records. And **the reliability figures are properties of
particular benchmarks**, not constants to carry into your own work — what
transfers is that the variance is large enough to fool you, not the number.

Four things here are our judgement rather than any source's finding, and each
is marked where it is given: **the cause table and its three traps**, assembled
from a failure taxonomy and an attribution benchmark that do not themselves
propose it; **the four levels** a change can belong to; **stating the expected
effect in advance**; and **retiring guidance on a schedule**. The
confirm-before-spending discipline is a reading of measured variance, which is
a weaker claim than the variance itself.

**Draft.** This skill's own effectiveness has not been tested. No behavioural
case has been run against it, and nothing here shows that a team following it
corrects failures better than one that does not. The evidence above cuts both
ways on this collection: it is the same evidence that would predict a curated
skill library helping, and the same evidence that would predict it doing
nothing while costing tokens.

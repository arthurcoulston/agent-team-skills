---
name: choosing-what-to-work-on-next
description: Choose the next work a team takes on under a standing directive, against the alternatives it declines, and recognise work that should be retired or redirected. Use when capacity frees up, when a line of work has been running long enough that nobody has recently asked whether it should, and when the direction or its premises change.
relations:
  - type: supports
    to: skill:coordinating-delegated-work
  - type: supports
    to: skill:writing-agent-instructions
  - type: relates
    to: skill:handing-work-across-sessions
metadata:
  status: draft
---

# Choose what to work on next

You hold a directive you did not choose and capacity you must spend. Several
things could be done and one of them will be. This decision is made more often
than any other you make, and it is the one that separates a team making
progress from a team that is merely busy.

Selection happens inside the directive. Nothing here authorises enlarging it,
and your operator's own priorities are an input you respect rather than a
factor you weigh. Once the work is chosen, [writing agent
instructions](../writing-agent-instructions/SKILL.md) transfers it and
[coordinating delegated work](../coordinating-delegated-work/SKILL.md) runs it.

## Know what you are choosing against

Translate the directive into outcomes you could actually observe someone
else's work producing — who is better off, in what way, and what you would see
if they were. Then keep those separate from measures of your own activity.
Volume of work completed, tickets closed, artifacts produced and hours spent
are all things you can see without anything having improved for anyone.

Where the two are hard to separate, prefer an outcome that something outside
the team confirms. In a benchmark built so that "repeated work, duplicate
submissions, false completion, and progress drift are measured directly rather
than hidden behind a final success flag", agents were required to keep working
until "an external verifier confirms enough distinct valid items" — and
frontier coding agents that solved many 50-artifact tasks managed only 3 of 9
successes per condition at 100. That task had a countable target and a
verifier, which most work under an open-ended directive does not. The
transferable part is that you have to supply the equivalent yourself, because
a final self-reported success flag is where these failures hide.

Expect this translation to be judgement, and expect it to be contested. Write
down which reading of the directive you are working from, so that when a
choice later looks wrong it is possible to tell whether the selection was bad
or the reading was.

## Treat continuing as a choice, because otherwise it is the default

The single measured fact about agents choosing their own goals is that they
repeat. In the one controlled study of self-directed goal selection, three of
five models re-selected the previous trial's goal on 93–94% of trials against
a human rate of 54%, with goal entropy collapsing to 0.12–0.20 against a human 1.67,
a consistent bias toward the simplest available goal, and "little variability
across instances of the same model". Chain-of-thought raised task performance
above human levels without changing selection, and telling the model to behave
like a person had "minimal effects".

Take that as a warning rather than a verdict. The study asks whether models
are good proxies for human choices, so divergence from humans is its finding;
it does not establish that repeating is wrong, and often it will be right.
What it does show is that the repetition survives the interventions that would
change a considered decision — so it is not reliably a decision.

A separate result gives the mechanism that makes this worse over time. In a
long-horizon goal-drift study, "pattern-matching behavior, rather than token
distance, drives goal drift", and injecting more examples of the competing
behaviour raised drift while preserving the instructions. A long context does
not by itself pull you off the directive; a context full of examples of doing
one thing does. Three weeks into a line of work you are carrying three weeks
of examples of that work, which is exactly the condition under which the pull
is strongest and least visible.

The countermeasure is cheap: **name the alternative you are declining.** A
choice recorded against at least one real competitor is a decision; a choice
recorded against nothing is a continuation with a justification attached.

## Keep candidates, so that choosing is comparing

You cannot compare against alternatives you have not got. Maintain a standing
supply of candidate next work, added to as you notice possibilities rather
than assembled at the moment capacity frees up — the moment capacity frees up
is precisely when the repetition pull is strongest and the time to resist it
is shortest.

Order them if it helps you think, but do not mistake the ordering for the
decision. In a stopping problem analysed formally in a different setting,
"a ranking alone does not determine how many are worth selecting", and
score-only rules were reported proved suboptimal once candidates cost
different amounts; what decides is the marginal gap between stopping now and
the best continuation, weighted by what is at stake. That is a result about
acquiring tools within one task, and its application here is reasoning, not a
finding. But the shape holds: the question is never which candidate looks
best, it is whether the next increment of this one beats the first increment
of that one, at what each actually costs you.

Two costs are routinely left out. The capacity a line of work will keep
consuming after this increment, and the work you will not do because you are
doing it.

## Decide at boundaries, and on named signals

Do not re-run this decision continuously. In a trained-agent setting, "always
planning is computationally expensive and degrades performance on long-horizon
tasks, while never planning further limits performance" — a per-step result
far below this scale, but the clearest statement available that deliberation
is a cost that can exceed its benefit. Reassessment that happens constantly
is both expensive and, as the next paragraph shows, mostly uninformed.

You cannot rely on your sense of how work in progress is going. Across three
deep-research benchmarks and five models, an agent's own confidence separated
success from failure at the end of a trajectory (mean AUROC 0.85) and told you
almost nothing in the middle of one: **at 50% progress no measured signal
exceeded 0.60**, and at 80–90% progress none reached 0.70. Mid-run direction
changes were the explanation — path switching appeared in 86.8% of
trajectories on one benchmark. Those conditions are deep research on
open-weight models, but the negative is the load-bearing part, and it says
that a sense that the work is going badly is not a signal, and neither is
the absence of one.

So reassess where the information is: at a finished increment, and when
something outside the work moves. Decide in advance which signals count. Work
ones: an increment completes; an increment fails a check; the expected outcome
was due and cannot be observed. Direction ones: the operator says something
new; a premise the choice rested on turns out to be false; a beneficiary's
situation changes. Capacity ones: the resource this work depends on becomes
scarce, or a better candidate arrives.

## Write the retirement condition before the work starts

Deciding to stop work you are already invested in is the hardest version of
this decision and the one with the least evidence behind it. Every recorded
failure runs both ways — teams stop too early and teams cannot stop at all
(premature termination 6.20%, unaware of termination conditions 12.4% and step
repetition 15.7% within one annotated multi-agent failure set) — so a rule
guarding only against giving up too soon leaves the other half open.

What follows is reasoning, not a measured method. State when you commission a
line of work what would show it was not worth continuing: the outcome you
expect to observe, by when, and what you will conclude if it has not appeared.
Written in advance, that condition is a judgement about the work. Written
later, it is a judgement about whether you want to stop, made by someone who
has already spent the capacity.

When the condition triggers, the answer is one of three, and saying which
matters more than the decision feeling decisive:

- **Retire it.** The outcome is not arriving and no change to the approach is
  known to help.
- **Redirect it.** The outcome still matters; this route to it does not.
- **Renew it.** The outcome is arriving more slowly than expected and the
  reason is understood.

Record which and why. The next leader facing the same choice will otherwise
re-derive it from the same evidence and reach whatever conclusion its recent
history suggests. If the same work keeps failing in the same way, retiring it
is not the repair — see the note at the end of this section.

## Carry a changed direction into what is already running

Deciding to change direction and having changed direction are separate events,
and the second does not follow from the first. On a benchmark of superseded
facts, "even the best evaluated model achiev[es] only 55.2% overall accuracy",
and the named failure is "a pervasive gap between retrieving updated evidence
and acting on it": the corrected fact is retrieved and the plan still runs on
the old one. Stale assumptions embedded in the *phrasing* of an instruction
were often not challenged at all.

So after a direction change, go and find the commitments whose justification
rested on the old premise and re-decide each one explicitly. The dangerous
ones are those where nothing announced that the premise had failed — where a
later fact quietly made an earlier one wrong. Reissue what continues, using
[writing agent instructions](../writing-agent-instructions/SKILL.md), rather
than assuming a running assignment absorbs the change. Where the change has to
survive past the end of your own run, [handing work across
sessions](../handing-work-across-sessions/SKILL.md) governs what the record
must carry.

## Where this method is not grounded, find out cheaply

A survey of 1,547 papers on long-horizon agents treats a task as "a
specification of a desired end state together with a checkable completion
criterion" and does not treat selecting the goal as part of the agent's
decision space at all. Almost everything above is therefore reasoning from
adjacent results, and you should expect to test it rather than trust it.

The cheapest test you can run is against your own record. Take the last ten
selections your team made. Count how many continued the work already running,
and check how many recorded a declined alternative or a retirement condition
set in advance. If continuation is near-universal and the alternatives were
never named, you have observed the repetition pull in your own team, which is
more useful than any figure in this skill. Then, for one line of work, write
the retirement condition in advance and see whether it fires before you would
otherwise have noticed.

One boundary worth naming: a line of work that keeps failing the same way is
not a selection problem, and retiring it will not tell you why. Diagnosing a
repeated failure is a different job from choosing what to do next.

## What this method rests on

One controlled study of self-directed goal selection, one goal-drift report on
2025-generation models in a deliberately binary environment, one first-party
account of an agent running a small business for months with no control arm,
an annotated multi-agent failure taxonomy, a quantitative-persistence
benchmark, a formal stopping result from tool acquisition, and a study of
mid-trajectory uncertainty. The conditions are carried in
[choosing work under a directive](../../knowledge/choosing-work-under-a-directive.md)
and [retiring and redirecting work](../../knowledge/retiring-and-redirecting-work.md).

Not one of those sources observed a team choosing among genuine alternatives
under a real directive, and none compared a selection with what a different
selection would have produced. The failure shapes transfer; the percentages
are properties of their own benchmarks and models.

**Draft.** This skill's own effectiveness has not been tested. No behavioural
case has been run against it, and nothing here shows that a leader following
it chooses better than one who does not.

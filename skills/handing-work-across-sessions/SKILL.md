---
name: handing-work-across-sessions
description: Leave a record a later run can act on when this run ends, and check an inherited record before acting on it. Use when context is filling or a run is about to stop, when work passes to another owner or another model, and when resuming work you did not do yourself.
relations:
  - type: depends_on
    to: skill:writing-agent-instructions
  - type: supports
    to: skill:coordinating-delegated-work
metadata:
  status: draft
---

# Hand work across the end of your run

A team that operates indefinitely is a chain of finite runs. At the boundary
— context exhausted, a crash, a compaction, an ownership change — everything
you know that is not in the record stops existing, and nothing warns the
successor that it is missing. Two moments need method: closing a run, and
opening one on someone else's work.

Assume nothing about the successor except that it can read what you leave and
inspect the world. It may be a fresh instance of you, a different agent, or a
different model.

## Persist what the world cannot tell the next run

The successor can re-read the world. Files, code, records, the artifacts
themselves are all still there and are more current than any description of
them. Narrating them wastes the space and dates instantly.

What disappears with you is everything that never left your context:

- what you tried that did not work, and how far you got before it failed;
- what you rejected, and on what grounds — otherwise it gets tried again;
- which of several plausible artifacts is the authoritative one;
- what you committed to, to whom, and under what acceptance condition;
- what you assumed but could not check, and how long that assumption is
  likely to hold.

Write those. Point at everything else. In the one controlled comparison of
storage forms, roughly 80% of a summary store's deficit was traced to
information lost when the summary was written, and repairing it afterwards
from the store alone failed in every one of 48 cases. Treat what you do not
write as unrecoverable, because for that store it was.

Persisting more is not therefore better. Every item you leave is something a
later run must keep true or retire, and in the same study most of the
retrieval store's deficit was failure to find material that was present
rather than material being absent. What decides the amount is in
[what a session boundary costs](../../knowledge/session-boundary-losses.md).

## Pin the record to artifacts and write its claims as checkable

Three properties make a record survivable.

**It names artifacts and says what is claimed about each.** Not "the parser
is done" but the path, and which of *exists*, *does what it was for*, and
*was checked, by this method* you are actually asserting. A completion report
that names no artifact cannot be checked and will not be.

**It has a shape you fill in every time rather than prose you compose.** A
fixed-schema store survived a model swap almost unchanged (+0.0004 ±0.0020);
model-written natural-language summaries moved by +9.91 or −13.28 percentage
points depending on which direction the swap went. Those are small models on
a recall task, so do not export the numbers — but the asymmetry is the
warning. A summary is written *by* a model *for* the one it expects to read
it, and a compressed narrative is the least portable common form.

**Its assumptions are stated as claims, not carried as premises.** "Continue
with the current approach" presents its basis as settled. "This approach was
chosen because X; X was last confirmed on <date> by <check>" offers the same
direction and exposes the part that can rot. Agents have been measured
accepting outdated assumptions embedded in the phrasing of a request, so the
grammar of the handoff is not cosmetic.

**Compose the record deliberately; do not let compaction be your handoff.**
An automatic summarizer condenses without knowing what the next run will
need, and the resulting failure is silent — work derived from a bad summary
reads coherently and cannot expose its own gap. Write the record while you
still hold the context that would let you notice what is missing.

## Say what is unfinished so that waiting is distinguishable from stopping

For every commitment still open, leave the owner, the current state, what it
is waiting on, **the observation that ends the wait**, and what finished
means. Agree what done means before the work rather than declaring it after —
one long-running build had its worker and its checker negotiate that contract
per increment before any code was written, and not knowing when to stop is
one of the largest single failure modes in the annotated multi-agent
evidence.

The continuation condition carries the most weight and is most often
skipped. From outside, an intentional wait, a stalled dependency and a silent
failure look identical; naming the observation that would end the wait is
what separates them, and naming a date by which the absence of that
observation is itself a finding closes the last gap. That specific rule is a
reasoned transfer, not a measured result: no source here tested it. What is
measured is the negative half — an agent's own mid-run signals do not reveal
whether it is on track, so nothing internal to the waiting run will tell you.

**End at a completion boundary when the ending is yours to schedule.** An
agent's self-assessment separates its successes from its failures well at the
end of a piece of work and barely at all in the middle of one. A run that
stops when its context runs out hands over its status claim from the least
informative position available. Stopping deliberately one step earlier, at
something finished, is worth more than the step you gave up.

## Check the handoff against the next action, not against itself

Before you finish: name the next concrete action the successor will take —
from the work, not from the draft — then read your record asking only whether
it carries what that action needs. Doing it in the other order, deriving the
next action from the record you just wrote, checks nothing, because both
sides come from the same source. That independence is the transferable part
of a compaction-validation result that gained accuracy precisely by
generating the check from something other than the summary.

Use [writing agent instructions](../writing-agent-instructions/SKILL.md) for
composing the text itself, and where the handoff hands over a bounded piece
of delegated work, [coordinating delegated
work](../coordinating-delegated-work/SKILL.md) governs the assignment.

## On resuming, establish what the record does not establish

The record is the predecessor's claims, not knowledge. Work outward from what
is hardest to fake.

1. **Check the world before the record's account of it.** Confirm the named
   artifacts exist where they are said to be and do what they were for. One
   long-running build had every resumed session start the environment and
   drive one real end-to-end interaction before doing anything else, because
   its agents marked features complete without testing them.
2. **Find what moved while you were gone.** Direction, a dependency, an
   external fact the plan rested on. Then **re-derive the decisions that
   depended on anything that changed** — this does not happen by itself.
   Agents have been measured retrieving a corrected fact and continuing to
   plan from the superseded one; on the benchmark built for this, the best
   model scored 55.2%. Noticing the change is the easy half.
3. **Discount status claims by where the predecessor was standing.** A claim
   made at a finished piece of work is worth far more than the same claim
   made mid-task, and a run that ended involuntarily made all of its claims
   mid-task.
4. **Record what you checked and what you did not.** A check bounds what you
   may claim by what it could have observed — the same build reports its
   browser checks were blind to whole classes of defect. Pass the boundary of
   the check on, not just its verdict.
5. **Correct the record where it lives.** A successor that quietly works
   around a wrong inherited claim leaves the next one to rediscover it.

What each check catches, and what none of them do, is in
[why an inherited record has to be checked](../../knowledge/verifying-an-inherited-record.md).

## When the successor is a different owner or model

Rewrite the structured parts; do not forward a prose summary written by a
different model and expect it to land the same way. Migrate a retrieval store
completely or accept that you have mostly not migrated it — a half-migrated
index captured 4.96 points of an available 11.90. And re-examine the
scaffolding itself after a model change rather than inheriting it: one
first-party account found that a verification agent and a work-decomposition
scheme that were both necessary on one model had become "unnecessary
overhead" on the next.

A repeated failure that survives several handoffs is no longer a handoff
problem. Preserving it accurately is this skill's job; diagnosing why the
team keeps making it is not.

## What this method rests on

Two first-party engineering accounts of long-running builds, a cross-domain
diagnostic benchmark of long-horizon failures, an annotated multi-agent
failure taxonomy, and three controlled studies — of mid-trajectory
uncertainty, of stale stored state, and of memory portability across a model
change. The two knowledge entries above carry the conditions. None of that
evidence observes a team that keeps operating after its task ends; the
engineering accounts are single builds with no arm run without the records
they credit; and every number here is a property of its own benchmark and
models rather than a constant.

**Draft.** This skill's own effectiveness has not been tested. No behavioural
case has been run against it, and nothing here shows that a leader following
it hands over better than one who does not.

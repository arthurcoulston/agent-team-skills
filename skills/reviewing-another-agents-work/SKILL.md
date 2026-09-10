---
name: reviewing-another-agents-work
description: Run one independent judgment of one contribution — deciding what the review must establish, choosing a reviewer whose errors differ from the author's, pinning the verdict to an exact artifact, and knowing what a pass does and does not show. Use when deciding whether a contribution needs review and what it must clear, when performing that review, and when a reviewer and an author disagree about a finding.
relations:
  - type: supports
    to: skill:coordinating-delegated-work
metadata:
  status: draft
---

# Review another agent's work

A team's confidence is built one review at a time. Each one is a single
judgment of a single contribution by someone who did not produce it, and its
worth depends almost entirely on how much the reviewer can be wrong in ways the
author was not. A team whose reviews are performed by the author, or by a
reviewer that agrees with whatever it is shown, has the appearance of
confidence and none of it — and that failure is invisible from the inside,
because a review that passes everything looks exactly like a review of good
work.

## Decide what the review must establish before the work is done

Write the criteria when you commission the contribution, not when it returns.
Deciding afterwards means deciding while looking at the answer.

State, for this contribution: what it must do for its consumer, what would
count as failing, and what evidence would settle each. If you cannot describe a
plausible artifact that would fail, you have not written criteria — you have
written a description, and the review will pass everything.

Criteria that cannot separate a good contribution from a mediocre one produce a
pass that carries no information, and it is indistinguishable from an
informative one. In the judge literature this shows up as a benchmark on which
every judge scores alike; the instrument was the ceiling, not the models. Aim
your criteria at the distinctions you actually care about.

Match the grain to the work. Boolean criteria are worth writing wherever a
question genuinely has a checkable answer, because they remove interpretive
room. But finer is not uniformly better: detailed criteria have been measured
helping on reasoning work and *hurting* on coding work, and where completeness
is the point, a whole-artifact judgment holding detailed criteria beats a
checklist walked item by item. And no finite criteria set is complete — expect
to review something the criteria did not anticipate, and say so rather than
passing it by omission.

Not everything needs a review. Reserve it for contributions whose failure would
be expensive or hard to detect later, and say plainly which contributions are
being accepted without one.

## Choose a reviewer whose errors differ from the author's

Never the author. Self-review does not fail gently and evenly — it fails
precisely where you need it. Most of a strong model's preference for its own
output is legitimate, because its output is usually better; the harmful
remainder concentrates on the instances where it got the work wrong, and
stronger models are *worse* at recognising their own errors, not better.
Capability does not fix this and neither does asking nicely.

Then reduce correlation as far as you can:

- **Prefer a reviewer from a different model family.** Dependence between
  models is strongest within a family, and real across families too, including
  choosing the same wrong answer. A different family lowers the correlation; it
  does not remove it.
- **Do not buy confidence by adding reviewers.** Nine judges from seven
  families were measured carrying about two independent votes between them,
  landing below their own best member in every condition tested. Unanimous
  agreement among correlated reviewers is close to no evidence.
- **If it must be the same model as the author**, you have self-review under
  another name. Mitigate: hand over the finished artifact as an external
  object with none of the author's narration attached, and require the reviewer
  to reason through the criteria before stating a verdict, which measurably cut
  the harmful part of self-preference. Then record on the verdict that the
  reviewer was not independent.

Hand over the artifact and the intent, not the author's account of what it did.
A completion report is a claim and it anchors the reviewer to the author's
framing. The gain here is real and partly a framing effect — the same model
flags far more errors in identical content when it arrives labelled as someone
else's work — so make sure your arrangement produces the separate judgment and
not only the label.

## Judge the artifact, and judge it separately from fixing it

Go to the artifact where its consumer will find it and use it as the consumer
would. Check it against the criteria you wrote, then look once more for what
the criteria did not anticipate.

Then the single most useful thing in this skill: **do not ask for the verdict,
the explanation and the repair in one pass.** Reviewers asked to judge, explain
and propose a fix together rejected *correct* work far more often than
reviewers asked only to judge — in the worst measured case going from roughly a
quarter of correct submissions wrongly rejected to nearly three quarters. The
direction was systematic across models, though the size varied a lot. The
mechanism is plain enough: a reviewer told to produce a fix has been given a
reason to find something to fix.

So judge first and record the verdict. Only then, separately, work out what
should change.

Two more habits, both cheap:

- **Control the order** when you are comparing options. Position bias ranged
  from negligible to severe depending on the reviewer, so present the options
  in both orders and treat a verdict that flips as no verdict.
- **Do not treat a repeated verdict as a confirmed one.** Reviewers have been
  measured returning the same answer more than 98% of the time while carrying
  severe position bias. Consistency measures stability, not correctness.

Relative length is not worth worrying about much: verbosity bias was small
across a broad cohort of judges, under one rubric, which is weaker than a
general result but enough to spend your attention elsewhere.

## Make each finding carry its basis and its cost

For every finding, say what it is, what it rests on, and what it would take to
settle it. Sort them honestly:

- **A defect** — a criterion is not met, and you can name the observation that
  shows it.
- **A risk** — a way this could fail that you have not observed, with what
  would confirm it.
- **A preference** — you would have done it differently and the criteria are
  met. Say so and let it go, or argue that the criteria were wrong, which is a
  different conversation with the person who set them.

Findings that cost nothing to raise arrive in volumes that swamp real ones. The
best-evidenced discipline against this is to make a finding pay for itself:
require that acting on it would produce an observable difference, and drop the
ones where it would not. Where the artifact can be exercised, do it — running
the current version against the proposed change and keeping only findings whose
correction changes something observable cut wrongly rejected work by roughly
two thirds while adding almost no missed defects. Where nothing is executable,
the same test applies in words: name what would be different if the finding
were acted on, and if you cannot, it is a preference.

## Pin the verdict to an exact artifact

A verdict is about one identified revision of one artifact, and it says so. Any
change afterwards, however small, means there is no verdict on what now exists.

This is the discipline that stops a review from being quietly inherited. Work
that was passed, then edited, then shipped, is unreviewed work carrying a pass
that was earned by something else. Record the identifier of exactly what was
judged, who judged it, when, and against which criteria.

## Dispose of disagreement rather than dissolving it

When the reviewer and the author disagree, one of three things happens, and all
three are recorded:

1. **Handed back with reasons.** The reviewer names the criterion, the
   observation and what would resolve it. The author revises and the review
   runs again against the new revision.
2. **Escalated.** The disagreement is about the criteria, the intent, or
   whether the finding is a defect at all. That is not the reviewer's to settle
   — it goes to whoever owns the work's purpose.
3. **Accepted over dissent.** The contribution is taken with the disagreement
   written into the record, so a later check can reopen it.

What must not happen is the disagreement dissolving — resolved by whoever
speaks last, split down the middle, or dropped because a round trip is
expensive. Disagreement alone does not establish a defect, and neither does
seniority.

If two rounds have not converged, stop revising and raise it as a question
about the criteria or the assignment. A third attempt at the same argument is
evidence that the argument is not where the problem is.

## Know what a pass establishes

A pass says: this exact revision met these stated criteria, in the judgment of
one reviewer, whose errors overlap with the author's to a degree you have
estimated and cannot measure.

It does not say the contribution is correct, that it will work for its
consumer, or that a different reviewer would agree. Judge–human agreement looks
reassuring until it is corrected for the agreement you would get by chance,
after which the best judges in a large cohort sat close to the middle of the
scale on the harder material — and the spread between reviewers was far larger
than the difference between reviewing and not reviewing.

Verification is nonetheless the control with the best evidence behind it.
Around a quarter of annotated failures in multi-agent systems are the
verification step failing — reviewing incorrectly, reviewing incompletely, or
stopping early — and adding an explicit verification requirement improved task
success on the benchmarks where it was tested. Those same authors report that
failures persisted afterwards. Adding a review is a real improvement and not a
solution.

Say all of that when you record the verdict. A pass whose limits are stated can
be relied on for what it covers; a pass reported as confidence cannot be relied
on at all.

## Where this stops

This skill covers one judgment of one contribution. Deciding whether to
delegate, dividing work, and integrating what returns are in
[coordinating delegated work](../coordinating-delegated-work/SKILL.md) — that
skill's acceptance step is where this one is called from, and it should not be
restated here.

Designing an evaluation programme for a team's output as a whole — what to
measure across many contributions, how to keep the measurement honest as the
work changes, what a body of verdicts says about the team — is **not covered
here and is a real gap**. The findings in this skill about correlated
reviewers, chance-corrected agreement and consistency-without-correctness bear
directly on that design, so treat this as an input to it, not a substitute.

## What this method rests on

Measurements of models judging outputs: a large-scale judge evaluation across
21 judges and three benchmarks, an audit of behavioural dependence across 18
models, a panel-correlation study, self-preference decompositions, a code
conformance review study, a rubric survey, and an annotated multi-agent failure
taxonomy. The reasoning is in
[what reviewer independence buys](../../knowledge/choosing-an-independent-reviewer.md)
and
[what a review verdict establishes](../../knowledge/what-a-review-verdict-establishes.md).

Almost all of it is bounded, single-turn work graded against a reference
answer. Your reviews are of substantive work with no reference answer, which is
the harder case, and the transfer is reasoned rather than measured: the
direction of each finding is what carries over, and none of the numbers are
constants. Where this skill gives a threshold or a procedure that no source
measured in this setting, it is our judgment, and the linked entries say which
is which.

**Draft.** This skill's own effectiveness has not been tested. No behavioural
case has been run against it, and nothing here shows that a team following it
reviews better than one that does not.

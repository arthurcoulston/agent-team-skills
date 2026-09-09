# Contributing

You are writing instructions and context for another agent to consume.
Make its responsibilities, decisions and relevant expertise explicit, and
preserve the distinction between instructions and supporting evidence.

A contribution must explain how it helps an agent team work better. Value
can include preserving task quality while reducing retained context and
leaving headroom for future work. Supply evidence for the claimed benefit.

## Develop the research before the instructions

Keep exploratory source notes, comparisons, unresolved questions and private
review discussions in a separate research workspace. They can remain
exploratory while the evidence is being understood. Use the
[writing method](skills/writing-agent-instructions/SKILL.md) when turning
that research into a candidate for this collection.

Prepare the contribution and its necessary supporting evidence so a reader
can use and inspect them without access to that workspace. Do not bulk-copy
working files or add private workspace links. A public-safe candidate may
enter this repository as explicitly draft; its presence is not acceptance.
Keep one authoritative candidate and review its exact revision.

Initial authoring uses outside evidence and independent editorial review.
Product-effectiveness experiments are a separately commissioned phase.
Distinguish a technique's reported effectiveness from the untested effect of
our resulting instructions. Preserve earlier experiments and their limits;
source review and structural checks do not establish product effectiveness.

## What a change must include

- **The guidance itself**, scoped to a decision or a task an agent actually
  faces, and bounded — say where it does not apply.
- **Its evidence.** Sources with their dates and versions, or a recorded
  observation, or a run whose result is preserved. Cite what supports the
  actual claim, not something adjacent to it.
- **Its uncertainty and its applicability, separately.** How settled the
  finding is and under what conditions it holds are different questions and
  do not collapse into one confidence number.
- **When it was last checked.** A source's publication date, the date the
  evidence was gathered, and the date someone last confirmed it still holds
  are three different dates.

## What gets a change rejected

Confident wording without support. A recipe taken from a paper and presented
as tested when its transfer here has not been. Popularity or a single
successful implementation generalised into a rule. Claims of benefit based
only on attractive prose. A smaller context footprint with preserved
required behavior is a legitimate benefit; state what was measured and
which cases established preservation.

## Review

Every change is reviewed by someone who did not author it, against the
directive, the evidence and the effect on behaviour. Nobody accepts their own
work. Where a revision has been made twice without converging, the problem is
raised as a method question rather than attempted a third time.

## Checks

Structural checks run from a clean checkout with nothing installed:

    node tools/check.mjs              format, metadata, references, local paths
    node tools/check-fixtures.mjs     proves those checks can go red
    node tools/build-views.mjs        regenerates the maps under views/

The first must be green before a change is proposed. The second runs the
checker against deliberately broken trees under `tools/fixtures/` and requires
each to fail naming its own defect — so a new rule arrives with a fixture that
shows it working, and a rule nobody has watched fail does not count as a rule.

A change that adds or retitles an entry changes what the views draw, so
`build-views.mjs` runs with it and the regenerated views are part of the same
change. `check.mjs` reports a view whose committed diagram is not what the
records produce: a map that has drifted from its collection is worse than no
map, because it is still read. Never edit below a view's generated marker —
that edit is reverted by the next run, and the disagreement it causes in the
meantime is silent.

Behavioural cases run the guidance against a task with and without the skill
loaded:

    node tools/run-case.mjs <case-id> --agent '<command>' --model '<model id>' \
         --harness '<name and version>' --by '<who ran it>'

It writes both answers into an `evidence/` record that `check.mjs` then
validates, and it refuses to run at all without the model and harness
identity — a result that cannot be compared with a later one is not a
baseline. It does not score: the record lands `verdict: unjudged`, and
someone who did not run it judges both answers against the case's rubric.
Failed and timed-out runs are recorded as they happened.

A case is one task, on one model, on one day. It does not show that guidance
transfers, and one pair of runs cannot separate the effect of the guidance
from the variation the model would show anyway. Claiming a skill works needs
several cases and repeated runs; a single green pair is not that claim.

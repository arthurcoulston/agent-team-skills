# Contributing

A contribution here is a claim that some guidance will make an agent team
work better. What it has to carry is the basis for that claim.

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
successful implementation generalised into a rule. Guidance that reads well
and changes no behaviour.

## Review

Every change is reviewed by someone who did not author it, against the
directive, the evidence and the effect on behaviour. Nobody accepts their own
work. Where a revision has been made twice without converging, the problem is
raised as a method question rather than attempted a third time.

## Checks

Structural checks run from a clean checkout with nothing installed:

    node tools/check.mjs              format, metadata, references, local paths
    node tools/check-fixtures.mjs     proves those checks can go red

The first must be green before a change is proposed. The second runs the
checker against deliberately broken trees under `tools/fixtures/` and requires
each to fail naming its own defect — so a new rule arrives with a fixture that
shows it working, and a rule nobody has watched fail does not count as a rule.

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

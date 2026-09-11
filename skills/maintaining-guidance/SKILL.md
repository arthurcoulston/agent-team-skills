---
name: maintaining-guidance
description: Keep standing guidance true as its evidence, subject, models, tools, harness, or observed results change. Use after a relevant change, during a scheduled guidance review, or when deciding whether advice should remain, be qualified, replaced, or retired; use repeated-failure correction instead when the work begins with a recurring incident.
relations:
  - type: depends_on
    to: skill:writing-agent-instructions
  - type: depends_on
    to: skill:correcting-repeated-failures
  - type: supports
    to: knowledge:what-a-guidance-change-costs
metadata:
  status: draft
---

# Maintain guidance as conditions change

Guidance can become wrong without producing an obvious failure. Its subject
changes version, the model or harness changes underneath it, new evidence
narrows the claim, or accumulated instructions make a once-useful rule costly.
Treat standing guidance as a set of maintained claims, not an append-only log.

## Open a review on an event and on a cadence

Review guidance when a source, dependency, model, tool, permission, harness,
user result, or operating condition named in its basis changes. Also review it
periodically: silent decay supplies no incident to wake you. A cadence is a
backstop, not evidence that every entry needs editing.

Start from an inventory that links each entry to:

- the claim and action it recommends;
- its evidence, date checked, applicability, and uncertainty;
- the models, tools, versions, and operating conditions it assumes;
- the skills, profiles, templates, tests, and live commitments that consume it.

If those links do not exist, reconstruct the high-consequence ones first. Do
not pretend an exhaustive sweep occurred when only filenames were searched.

## Trace the change before editing

State what changed and what did not. Compare the new source or result with the
preserved prior reading; a newer date alone does not make it authoritative.
Then follow both directions: which claims depend on the changed condition, and
which downstream artifacts or decisions depend on those claims. Search for
paraphrases and compatibility statements, not only exact citations.

Separate observation from inference. “Tool version 4 removed this flag” is an
observation; “all workflows using the tool are broken” is an impact claim that
still needs checking.

## Give every affected entry a disposition

Choose one and record why:

- **Keep:** the changed fact is immaterial to the claim. Record the check; do
  not rewrite merely to look current.
- **Qualify:** the method still works under narrower conditions. Put those
  conditions where a consumer will see them before acting.
- **Replace:** a different method now earns the recommendation. Name what it
  supersedes and update affected consumers in the same bounded change.
- **Retire:** the need disappeared, the evidence no longer supports action, or
  cost now exceeds benefit. Remove it from active discovery while keeping its
  identity, prior evidence, decision, and replacement if one exists.

Do not erase contrary evidence or edit an old reading to agree with a new one.
Preserved history lets a later worker distinguish reversal, narrowed scope,
and ordinary source drift.

## Re-establish compatibility and usefulness

For a qualification or replacement, write the expected effect and failure
signal before testing. Check the changed condition, at least one unaffected
case that should still work, and every materially different model or harness
for which you continue to claim compatibility. A passing check on one model
does not renew a cross-model claim.

Measure cost with outcome. Controlled studies of agent skills found both
content-induced failures and large token increases without pass-rate gains;
removing obsolete material can be a substantive improvement. When feasible,
compare the candidate with the current guidance and with no guidance. If the
result is inconclusive, narrow the claim or keep the change provisional.

Have someone who did not author a consequential revision review its evidence,
impact trace, disposition, and exact candidate. Structural checks establish
integrity, not effectiveness.

## Close the loop

Update entry metadata, discovery surfaces, compatibility claims, tests, and
downstream artifacts together. Record the exact revision and next review
trigger. Close an unchanged review with its scope and date; do not create a
new article or imply the whole collection was recertified.

If the review exposes a recurring incident, use
[correcting repeated failures](../correcting-repeated-failures/SKILL.md) to
diagnose its cause. For a loaded-context change, design a matched comparison
that checks the consumer's actual model and harness. The evidence and its limits are in
[what a guidance change costs](../../knowledge/what-a-guidance-change-costs.md).

No evidence currently shows that this maintenance workflow improves a real
continuing team. The cited studies justify its triggers and cautions, not its
consumer effectiveness.

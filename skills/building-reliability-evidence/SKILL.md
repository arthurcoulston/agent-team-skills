---
name: building-reliability-evidence
description: Establish or renew justified confidence in an agent team's operating reliability across repeated work. Use before expanding reliance, after a material system change or incident, or when single successes and output reviews do not show how consistently, robustly and recoverably the team operates.
relations:
  - type: supports
    to: skill:reviewing-another-agents-work
metadata:
  status: draft
---

# Build reliability evidence across repeated operation

Make a bounded reliance decision from repeated evidence. Do not infer continuing
reliability from one accepted output, a persuasive progress report, high average
accuracy or a finite period without a visible incident.

## Define the claim before collecting evidence

Write one claim contract naming:

- the team configuration: models, roles, instructions, tools, data and controls;
- the work population and operating conditions it covers;
- the useful-outcome threshold and unacceptable failures;
- permitted human or agent intervention and resource limits;
- the observation period and exposures required;
- the decision a pass supports; and
- the incidents or changes that expire the claim.

Narrow the claim until its terms can be observed. “The team is reliable” is not
a claim; “this configuration can handle these support and release tasks under
these conditions with these limits” can be tested.

## Establish a comparison and two panels

Choose the current arrangement, a simpler arrangement or both as baselines.
Keep task mix, success criteria and operating conditions comparable. Predeclare
sampling and thresholds; retain failures, withdrawals and post-result analyses.

Use a **repeat panel** for recurring task families under nominally identical and
semantically equivalent conditions. It reveals outcome and cost variance and can
isolate a change.

Use an **operating panel** across representative real cycles. It reveals drift,
recovery, accumulated state and changing work. Record dated configuration and
conditions so that unlike periods are not pooled into one rate.

Select duration by exposure: include enough relevant opportunities, a normal
operating cycle and the variations the claim assumes. Report elapsed time and
denominators. No observed severe failure is not evidence about a hazard the team
never encountered or tested safely.

## Measure a reliability profile

Track, by task family and consequence:

1. useful outcomes and ordinary failures;
2. repeatability of outcomes, paths and resource use;
3. degradation under predeclared prompt, tool, environment, workload and owner
   changes;
4. whether observable signals distinguish success, verification, abstention and
   escalation;
5. constraint breaches, severity, detection, recovery and recurrence; and
6. human or other-agent interventions, retries, elapsed time and cost per useful
   outcome.

Keep severe failures and hard boundaries outside an average. Consistent failure
is repeatable but incapable. A team that succeeds with frequent rescue may be a
useful assistant but does not satisfy an unattended-operation claim.

Do not use self-confidence as the sole early-warning signal. Check observable
state, artifacts and independent controls, and measure the monitor's false alarms
and misses. Do not assume memory, extra instructions or another reviewer improves
reliability; compare the intervention because tested versions can regress.

## Decide only what the evidence supports

At the review point, continue, narrow, expand, pause or withdraw reliance for the
named conditions. Investigate whether a change improved reliability without
shifting failures, intervention or cost elsewhere. Preserve contrary slices and
unexplained results.

Expire the claim after a material change to the model, scaffold, role structure,
tools, instructions, critical data, threat model or success criteria; after a
severe incident; or when drift or intervention exceeds its bound. Re-establish a
baseline rather than inheriting a verdict earned by another configuration.

This skill evaluates operating capability across repeated work. Use
`reviewing-another-agents-work` for one contribution and a mission-progress lens
for whether the organization is advancing its purpose. Read the
[supporting method and mission transfers](../../knowledge/establishing-reliability-across-repeated-operation.md)
before designing a consequential evaluation.

**Draft.** The source studies are bounded and mostly single-agent. No continuing
team or product-effectiveness experiment has tested this combined method.

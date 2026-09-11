---
name: evaluating-context-and-skill-changes
description: Evaluate whether a context, memory, retrieval, or skill change improves downstream agent work. Use before adopting or expanding a consequential change, when discovery and content effects may be confused, or when added context could cause regressions or excess cost.
relations:
  - type: supports
    to: skill:designing-context-and-retrieval
  - type: supports
    to: skill:building-reliability-evidence
metadata:
  status: draft
---

# Evaluate a context or skill change

Make a bounded adoption decision from downstream behavior. Do not infer benefit
from relevant prose, successful loading, one good run, or a smaller file.

## Fix the claim and comparison

Name the candidate revision, prior or minimal faithful baseline, target tasks,
model, harness, tools, permissions, resource limits, required and forbidden
behavior, and the decision a pass supports. Freeze development cases before
revision and reserve unseen cases for the decision-bearing comparison.

Include positive cases, near-boundary and negative cases, preserved successes,
and consequence-weighted failure cases. Add stale, conflicting, and long-horizon
conditions when the proposed guidance may be forgotten or outlive its premise.

## Separate three effects

1. **Routing:** Under natural discovery, does the candidate become available on
   positive cases and stay absent on boundary and negative cases? Report misses
   and false triggers separately.
2. **Content after exposure:** On applicable cases, force the candidate to be
   available or loaded and compare downstream outcomes with the baseline. When
   context volume could explain the result, add a length-matched irrelevant
   control.
3. **End to end:** Compare the naturally discoverable candidate with the actual
   prior system. This measures selector, content, and their interaction; do not
   claim that subtracting component scores fully decomposes them.

Omit an arm only when its confound cannot affect the decision, and record why.
A forced-load gain does not prove discovery; correct routing does not prove the
selected content helps.

## Measure behavior and cost

Keep inputs, initial state, graders, retry policy, and operating limits matched.
Run repeated trials when output is stochastic and preserve failures and
exclusions. Grade observable outcomes and boundary observance first; inspect
traces for mechanisms such as discovery, retrieval, or excess procedure.

Measure actual per-run context: always-loaded metadata, selected entrypoints,
retrieved references, duplication, generated tokens, tool calls, latency, and
context-cap events. Shorter is better only when required behavior survives;
unchanged outcomes with restored headroom support an efficiency claim, not a
quality claim.

Report results by task stratum and surface severe failures outside averages.
Classify regressions as routing miss or false trigger, content harm after
exposure, context-volume distraction, or an unresolved configuration effect.
Add a failure to the regression set only after checking that its task and grader
are fair.

## Make only the earned decision

A positive forced-exposure comparison supports content value on those tested
applicable cases. Natural routing plus downstream benefit supports the tested
end-to-end configuration. Cross-model, cross-harness, longitudinal, or
continuing-team claims require those strata. A small null or noisy comparison
means unresolved, not equivalent; prefer reversible rollout when the decision
cannot wait for stronger evidence.

Use [designing context and retrieval](../designing-context-and-retrieval/SKILL.md)
to repair placement or renewal, and [building reliability
evidence](../building-reliability-evidence/SKILL.md) before expanding reliance
across repeated operation. The [supporting synthesis](../../knowledge/evaluating-context-and-skill-changes.md)
explains the evidence and transfer limits.

**Draft.** This combined method has not been tested on this collection or on a
continuing agent team.

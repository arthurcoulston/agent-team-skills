---
id: longrca-attribution-2026-09-10
kind: source_reading
source_title: "LongRCA Bench: Diagnosing Responsible Roles and Root Causes in Long-Horizon Agent Failures"
source_url: https://arxiv.org/abs/2608.15242v3
source_date: 2026-08-21
read_on: 2026-09-10
read_by: scout
method: Web retrieval of the abstract page for version history and verbatim abstract, plus the v3 full text for the labelling rules and baseline figures
---

# Reading — LongRCA Bench v3

[Source](https://arxiv.org/abs/2608.15242v3). Zhang, Feng, Pei, Wang, Peng,
Liu, Jiang, Ma, Zhang, Yao, Zhao, Sun, Huo, Liu, Li, Xie, Pei. v1 2026-08-15,
v2 2026-08-20, v3 2026-08-21. Reading scope: abstract, labelling rules,
headline baselines, limitations.

## The problem it names

"When a long-horizon agent execution fails, outcome-level evaluation reveals
the unsuccessful result but not where the decisive error entered the
trajectory. Developers must then inspect the full execution to identify the
responsible role and localize the earliest decisive root-cause step."

That is exactly the position a leader is in when the same thing goes wrong
twice: the outcome is legible, the cause is not.

## Design

"1,140 failed trajectories across five domains **without injected errors**",
with "independently scored human labels for the responsible role and earliest
decisive root-cause step". The absence of injected errors is what makes it a
measurement of real diagnosis rather than of finding a planted bug. "The
median trajectory contains 145 steps."

Two predictions are scored separately: which role was responsible, and which
step first introduced the decisive error.

The labelling rules are operational rather than a formal cause taxonomy, and
the distinctions they draw are the useful part: errors already present in a
handoff instruction versus errors introduced afterwards; errors that were
successfully repaired (excluded as root causes); and errors merely propagated
versus the one that introduced the decisive problem.

## Result

"The strongest baseline reaches only **13.2% exact root-step accuracy**."

Their own method, RCTA — "training-free", retrieving "candidate error steps
from segment summaries" and tracing them "to available earlier handoff
instructions" — reaches "**51.1% responsible-role accuracy and 24.1% exact
root-step accuracy**" on the same backbone, instances and scoring protocol.
The strongest prior baseline read in the body reached 27.5% role accuracy.

So the best reported attribution in this benchmark identifies the responsible
role about half the time and the exact decisive step about a quarter of the
time.

## Limitations, as stated

Single reference labels per trajectory; only the root step and role are
evaluated, not full causal chains; a post-hoc diagnosis setting rather than
early detection; backbone-dependent absolute performance; and difficulty
factors confounded across source domains.

## What it does and does not license

It licenses treating cause attribution from a trace as unreliable, and
treating an automated or single-pass attribution as a hypothesis. It does not
give a leader a cause taxonomy to apply, and it says nothing about how well a
*human* reads such traces.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

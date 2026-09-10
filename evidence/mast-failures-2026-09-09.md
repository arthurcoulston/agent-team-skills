---
id: mast-failures-2026-09-09
kind: source_reading
source_title: Why Do Multi-Agent LLM Systems Fail? (MAST), v3
source_url: https://arxiv.org/abs/2503.13657v3
source_date: 2025-10-26
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and the v3 full text, with targeted extraction of the taxonomy, per-mode prevalence, the intervention case studies and the authors' stated caveats
---

# Reading — Why Do Multi-Agent LLM Systems Fail? (MAST), v3

[Source](https://arxiv.org/abs/2503.13657v3). Cemri, Pan, Yang, Agrawal,
Chopra, Tiwari, Keutzer, Parameswaran, Klein, Ramchandran, Zaharia, Gonzalez,
Stoica. v1 2025-03-17; v3 2025-10-26. Reading scope: abstract, taxonomy and
prevalence, annotation method, intervention case studies, stated caveats.

## Method

The taxonomy was developed from rigorous expert analysis of 150 traces and
validated by inter-annotator agreement of kappa = 0.88; an LLM-as-judge
pipeline then scaled annotation to a dataset of 1600+ traces across 7 MAS
frameworks, 3 task domains (coding, math, general agent) and 4 models
(GPT-4, Claude 3, Qwen2.5, CodeLlama).

## The 14 failure modes, with reported prevalence

**System design (FC1)** — disobey task specification 11.8%; disobey role
specification 1.5%; step repetition 15.7%; loss of conversation history 2.80%;
unaware of termination conditions 12.4%.

**Inter-agent misalignment (FC2)** — conversation reset 2.20%; fail to ask for
clarification 6.80%; task derailment 7.40%; information withholding 0.85%;
ignored other agent's input 1.90%; reasoning-action mismatch 13.2%.

**Task verification (FC3)** — premature termination 6.20%; no or incomplete
verification 8.20%; incorrect verification 9.10%.

## Interventions actually tested

Two case studies. On **ChatDev / ProgramDev**, a structured prompt with an
explicit verification section requiring final approval gave **+9.4%** task
success, and adding a further verification step gave **+15.6%**. On **AG2
MathChat / GSM-Plus**, clarified role and verification prompts produced modest
improvement while substantial failures persisted.

The authors' own conclusion on these fixes: "Although first step interventions
lead to performance gains, not all failure modes are resolved, and task
completion rates still remain low, indicating that more substantial
improvements are needed." They argue tactical fixes are inconsistent and that
"sole reliance on final-stage, low-level checks is inadequate".

## Caveats

There is no dedicated limitations section. The authors describe MAST as "a
foundational first step" and do not claim it covers every failure pattern. The
prevalence figures describe annotated failing traces in the studied frameworks
and tasks; they are not incidence rates for an arbitrary deployed team, and the
taxonomy is diagnostic coverage rather than causal evidence.

This is a paraphrased reading record, not an independently reproduced result.

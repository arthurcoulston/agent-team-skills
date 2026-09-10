---
id: long-horizon-reliability-gds-2026-09-10
kind: source_reading
source_title: "Beyond pass@1: A Reliability Science Framework for Long-Horizon LLM Agents"
source_url: https://arxiv.org/abs/2603.29231v1
source_date: 2026-03-31
read_on: 2026-09-10
read_by: scout
method: Web retrieval of the v1 full text, with verbatim extraction of the memory-scaffold result, the degradation and meltdown figures and the limitations section
---

# Reading — Beyond pass@1 v1

[Source](https://arxiv.org/abs/2603.29231v1). Khanal, Tao, Zhou. v1,
2026-03-31. Reading scope: the framing, the memory-scaffold comparison, the
duration-degradation figures, the limitations section.

## Framing

"Machine learning benchmarks evaluate *capability* — whether a model succeeds
on a single attempt. Production deployments require *reliability* — whether a
model *consistently* succeeds across repeated invocations on tasks of varying
duration."

10 models, 23,392 episodes, a 396-task benchmark, four duration buckets and
three domains. The headline construct is a Graceful Degradation Score (GDS)
tracking how performance holds as task duration grows.

## The result this collection has to face

"**Memory scaffolds universally hurt long-horizon GDS (negative or neutral for
all 10 models)**" — and, stated again in the body, "the memory scaffold never
helps: 6 models are hurt, 4 are neutral (within ±0.03 GDS)." The largest
recorded drops are Kimi K2.5 at **−0.14** and Mistral 24B at **−0.13**.

A memory scaffold is the archetypal repair a team applies after a repeated
failure: retain what was learned, feed it back in. In this benchmark it did
not once pay off, on any model tested.

## Degradation and meltdown

"SE GDS drops from 0.90 to 0.44 over the full duration range", while document
processing "is nearly flat (0.74 to 0.71)" — how fast reliability decays is a
property of the domain, not of the model alone. Aggregate mean falls from 0.81
(short) to 0.59 (very long). "Frontier models exhibit the highest meltdown
rates (up to 19%)", with DeepSeek V3 at 19% and MiniMax M2.5 at 13% in the
very-long bucket.

## Limitations, as stated

"We evaluate 10 **open-source** models only, for cost and reproducibility
reasons"; web research tasks are scored against live content, so results have
a temporal-validity threat; "programmatic evaluation may have blind spots";
the 396-task benchmark "cannot cover all possible task types"; infrastructure
reliability is a validity threat; and duration is used as a proxy.

## A figure not relied on here

The paper quotes "GPT-4o achieves 61% pass@1 but only 25% pass@8" while its
own limitations say it evaluated open-source models only. That figure is
therefore read as cited from other work rather than measured here, and nothing
in this collection rests on it.

## What the memory-scaffold result does and does not show

It is one scaffold implementation, on open-weight models, in one benchmark. It
does not show that retaining experience is generally harmful — EvoAgentBench
finds curated experience transferring reliably in a setting built to support
it. It does show that the intuitive repair can be a net negative on the very
axis it was adopted to protect, and that nobody would know without measuring.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

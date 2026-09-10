---
id: dynamic-planning-2026-09-09
kind: source_reading
source_title: "Learning When to Plan: Efficiently Allocating Test-Time Compute for LLM Agents"
source_url: https://arxiv.org/abs/2509.03581
source_date: 2026-02-17
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page for the v3 record. The abstract and the authors' central negative claim were extracted; the per-condition numbers on Crafter, the training details and the limitations section were not retrieved.
---

# Reading — Learning When to Plan

[Source](https://arxiv.org/abs/2509.03581). Paglieri, Cupiał, Cook,
Piterbarg, Tuyls, Grefenstette, Foerster, Parker-Holder, Rocktäschel. v1
2025-09-03, v3 2026-02-17. Reading scope: abstract page only.

## Abstract

"Training large language models (LLMs) to reason via reinforcement learning
(RL) significantly improves their problem-solving capabilities. In agentic
settings, existing methods like ReAct prompt LLMs to explicitly plan before
every action; however, we demonstrate that always planning is computationally
expensive and degrades performance on long-horizon tasks, while never
planning further limits performance. To address this, we introduce a
conceptual framework formalizing dynamic planning for LLM agents, enabling
them to flexibly decide when to allocate test-time compute for planning. We
propose a simple two-stage training pipeline: (1) supervised fine-tuning on
diverse synthetic data to prime models for dynamic planning, and (2) RL to
refine this capability in long-horizon environments. Experiments on the
Crafter environment show that dynamic planning agents trained with this
approach are more sample-efficient and consistently achieve more complex
objectives. Additionally, we demonstrate that these agents can be effectively
steered by human-written plans, surpassing their independent capabilities and
highlighting the potential for safer and more collaborative agentic systems."

## Why it is here

It is the clearest retrieved statement that **deliberation has a cost that
can exceed its benefit**: "always planning is computationally expensive and
degrades performance on long-horizon tasks, while never planning further
limits performance". That is the contrary evidence against a recommendation
to add prioritisation machinery everywhere, and it points at the same answer
from both sides — the question is when to deliberate, not whether.

A second reported result is that these agents "can be effectively steered by
human-written plans, surpassing their independent capabilities".

## Caveats

Read from the abstract page alone; the quantitative comparisons and the
limitations section were not retrieved. The setting is a trained agent in the
Crafter game environment deciding when to emit a plan before an action — a
per-step decision inside one task, at a scale far below a team choosing what
work to take on. Both the degradation claim and the steerability claim are
that paper's results in that environment. Their application to a leader's
selection cadence is a reasoned transfer.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

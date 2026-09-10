---
id: evoagentbench-transfer-2026-09-10
kind: source_reading
source_title: "EvoAgentBench: Benchmarking Agent Self-Evolution via Ability Transfer"
source_url: https://arxiv.org/abs/2607.05202v1
source_date: 2026-07-06
read_on: 2026-09-10
read_by: scout
method: Web retrieval of the abstract page and the v1 full text, with targeted extraction of the encoding/routing/uptake decomposition, the per-method deltas against the no-evolution baseline, the cross-family transfer claim and the stated limitations
---

# Reading — EvoAgentBench v1

[Source](https://arxiv.org/abs/2607.05202v1). Gao, Hu, Chen, Yao, Wang, Bai,
Wu, Han, Cong, Gui, Deng, Li. v1, 2026-07-06. Reading scope: abstract,
method comparison against the vanilla baseline, the per-method failure
patterns, the cross-backbone transfer claim, cost, and limitations.

## What it measures

Whether an agent's *experience* — not stored facts, but "reusable procedures
for searching, debugging, and verification" — improves its later work. The
paper's complaint about existing evaluation is the reason it exists: "Agent
benchmarks test single-episode task solving; memory benchmarks target
information retention rather than procedural reuse."

Four domains (web research, algorithmic reasoning, software engineering,
knowledge work), a 528/267 train/test split, two scaffolds, three evaluation
backbones. Test tasks are constructed so that "every test task is backed by
verified training-side Ability support" — the experience needed to do better
provably exists on the training side, so a method that gains nothing has
failed to use available evidence rather than been given none.

## The three steps it separates

The paper's stated contribution is to shift evaluation "from aggregate
accuracy comparison to fine-grained diagnosis of experience **encoding,
routing, and uptake**" — extracting reusable content, indexing it so the
right piece is found, and actually applying it at test time.

Because "tasks, tools, scoring, timeouts, and agent configuration are
identical across methods", the paper attributes the gap between methods to
"method-side mechanisms: how each method extracts reusable content from the
available training evidence, indexes it, and applies it at test time."

## Curated content transfers; automatic self-improvement does not, reliably

The headline is a contrast, and both halves matter. Against a vanilla
no-evolution baseline:

- **Anchor** (curator-verified Abilities): **+7.5, +10.5 and +5.8** points on
  the three evaluation backbones, and positive "per-domain Δ in all 24
  method–domain–setting cells".
- **Memento** (case retrieval on query similarity): **−2.4** and **−0.7** on
  two backbones, with a worst cell of **−36.3** points. The paper reads this
  as the paradigm's assumption failing — that "surface similarity in queries
  predicts similarity in solutions".
- **ReasoningBank** (strategy distillation): gains "modest (+0.4 to +3.6)"
  with "six per-domain cells [that] are negative".
- **GEPA** (prompt evolution): "+1.2 to +5.7" with "domain-specific
  regressions, including −12.3".

Each automatic method has "at least one negative cell". The abstract's own
summary: "curated Ability content transfers reliably across model families,
but no current automatic method sustains positive gain in all settings."

## Transfer across model families

Anchor's Abilities were built on backbones (Kimi-K2.5, GLM-5.1,
DeepSeek-V3.2) disjoint from the ones it was evaluated on (Qwen, Gemma), which
the authors take to "confirm that the Ability content generalizes across model
families".

## Cost

"Evolution does not uniformly reduce cost" — on the most expensive backbone,
"Memento, GEPA, and ReasoningBank all add double-digit overhead."

## Limitations, as stated

Four text-based agentic domains and three open-source construction backbones.
"The Ability extraction step uses a single LLM, and the resulting Ability
vocabulary reflects this choice." Each cell aggregates three runs over 56–86
test tasks, and "finer-grained per-domain analysis would benefit from
larger-scale evaluation". Most consequentially for reading the numbers:
"Test tasks are preferentially sampled where construction backbones left
headroom... absolute Δ magnitudes are specific to this supported split."

The last point bounds the headline: this is a setting built so that the right
experience exists and the task has room to improve. It measures whether a
method can use available experience, not how often useful experience is there.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

---
id: cost-aware-stopping-2026-09-09
kind: source_reading
source_title: "Scores Are Not Decisions: Cost-Aware Stopping for Tool Acquisition in LLM Agents"
source_url: https://arxiv.org/abs/2607.27083
source_date: 2026-07-29
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page only. The abstract, the stated theoretical result and the headline experimental numbers were extracted; the proofs, the full experimental protocol and any limitations section were not retrieved.
---

# Reading — Scores Are Not Decisions

[Source](https://arxiv.org/abs/2607.27083). Feng, Zhang, Cheng, Qi. v1,
2026-07-29. Reading scope: abstract page only.

## Abstract

"As LLM agents increasingly depend on diverse external services such as
search engines, databases, and connectors, agent harnesses face a fundamental
tool-selection challenge: acquiring too few tools leaves the task
under-informed, while too many adds cost, context load, and privacy exposure.
Routers and retrievers can rank candidate tools by relevance, but a ranking
alone does not determine how many are worth selecting. Existing approaches
leave acquisition under heterogeneous costs unaddressed. We formulate this
decision as cost-aware marginal decision-focused stopping (CAM-DF) over
ranked tool prefixes, with CAM-DF-lite as a compact interpretable variant. We
train directly on the offline gap between stopping now and the best
continuation: its sign labels the decision, its magnitude weights each error
by the payoff at stake. We prove this objective is Bayes-aligned with the
stopping target and that score-only rules are suboptimal under heterogeneous
costs."

## What it establishes

Two things, in its own setting. First, a **ranking is not a decision**: an
ordering of candidates by relevance does not say how far down the list to go.
Second, the paper reports proving that **score-only stopping rules are
suboptimal when candidates have different costs** — the quantity that decides
is the marginal gap between stopping now and the best continuation, weighted
by the payoff at stake, not the relevance score.

Evaluated on 1,343 tasks across five tool-use domains, primarily τ-bench
Retail under two cost regimes. The reported result is the highest payoff among
deployable methods and "37% fewer tools than full access while maintaining
comparable task success", with larger gains where the ranking source was
weaker.

## Caveats

Read from the abstract page alone; no limitations section was retrieved. The
subject is tool acquisition inside a single task, not a team choosing work,
and the proof is about their formalisation. The transferable content is the
structure of the argument — ranking versus marginal value against cost — and
any use of it outside tool acquisition is a reasoned transfer, not a result.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

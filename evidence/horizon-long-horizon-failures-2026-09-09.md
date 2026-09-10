---
id: horizon-long-horizon-failures-2026-09-09
kind: source_reading
source_title: The Long-Horizon Task Mirage? Diagnosing Where and Why Agentic Systems Break
source_url: https://arxiv.org/abs/2604.11978
source_date: 2026-04-13
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and the v1 full text, with targeted extraction of the failure taxonomy, its long-horizon-specific categories, the annotation method and the stated scope
---

# Reading — The Long-Horizon Task Mirage? (HORIZON)

[Source](https://arxiv.org/abs/2604.11978). Wang, Bai, Sun, Wang, Zhang, Hu,
Schroder, Mutlu, Song, Nowak. v1, 2026-04-13. Reading scope: benchmark
construction, failure taxonomy and prevalence, annotation agreement, stated
scope.

## Method

HORIZON is "an initial cross-domain diagnostic benchmark" over four agentic
domains — web, OS, embodied and database — collecting 3,100+ trajectories
from "state-of-the-art (SOTA) agents from multiple model families (GPT-5
variants and Claude models)"; Claude-4-Sonnet is named among them. Failure
attribution uses "a trajectory-grounded LLM-as-a-Judge pipeline for scalable
and reproducible failure attribution", with inter-annotator agreement
kappa = 0.61 among human annotators and kappa = 0.84 between humans and the
judge.

## Seven failure categories, three of them specific to long horizons

Marked [L] where the paper treats the mode as long-horizon-specific and [S]
where an existing mode is amplified by length:

- Environment error [S] — the agent fails to detect environment changes or
  misreads state.
- Instruction error [S] — partial or mistaken comprehension of the task.
- False assumption [S] — incorrect internal beliefs about the task or its
  observations.
- Planning error [S] — subplanning failures and wrong action ordering.
- **Catastrophic forgetting [L]** — "the agent's decision boundary is
  gradually eroded by...interaction history".
- **History error accumulation [L]** — "a small initial mistake to accumulate
  into repeated ineffective actions".
- **Memory limitation [L]** — context window constraints causing information
  loss.

## Distribution and degradation

The reported composition splits into process-level risks (environment
interaction, instruction following, planning, history accumulation) at 72.5%
and design-level risks (memory constraints, catastrophic forgetting, false
assumptions) at 27.5%. Performance shows "non-linear degradation" with a
"sharp performance drop beyond small s" across all domains; planning failures
and memory limitations are named as "dominant bottlenecks".

## Caveats

The paper presents itself as an initial cross-domain diagnostic benchmark and
carries no explicitly labelled limitations section in the text read. The
72.5/27.5 split is a composition of attributed failures in these four domains
on these models, not an incidence rate for any deployed team, and the
attribution pipeline is itself a model. The retained trajectories are bounded
agentic tasks; none of them is a team that continues operating after the task
ends. This is a paraphrased reading record with quoted material.

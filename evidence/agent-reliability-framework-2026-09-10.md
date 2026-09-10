---
id: agent-reliability-framework-2026-09-10
kind: source_reading
source_title: "Towards a Science of AI Agent Reliability"
source_url: https://arxiv.org/abs/2602.16666v3
source_date: 2026-06-02
read_on: 2026-09-10
read_by: scout
method: Web retrieval of the v3 full text, including the metric definitions, experimental protocol, results, limitations and long-horizon, multi-agent and lifecycle research agenda
---

# Reading — Towards a Science of AI Agent Reliability v3

[Source](https://arxiv.org/abs/2602.16666v3). Rabanser, Kapoor, Kirgis, Liu,
Utpala, Narayanan. v3, 2026-06-02. Reading scope: operational definition,
twelve metrics, experiments, main results, limitations and research agenda.

## What was measured

The paper separates reliability from average task accuracy through four
dimensions: consistency across nominal runs, robustness to prompt, tool-fault
and environment perturbations, predictability from post-run confidence, and
operational safety through constraint violations and their severity.

Fifteen models were evaluated on GAIA's 165 validation tasks and a verified
26-task subset of tau-bench. Each task received five nominal runs at temperature
zero, five semantic prompt paraphrases, injected tool faults with probability
0.2, tool-interface format changes, post-hoc confidence elicitation and
LLM-judged constraint/severity analysis.

The design records outcome, trajectory and resource consistency. Its safety
measure remains separate from the aggregate reliability score because averaging
a rare severe violation with strong ordinary performance would conceal the tail.

## Results used here

Across two years of model releases, accuracy improved much more than the
paper's reliability profile. Outcome consistency remained modest; resource use
varied substantially on GAIA; prompt robustness continued to discriminate
models; and confidence discrimination did not improve consistently even where
calibration did. The paper therefore supports measuring repeated and perturbed
operation rather than inferring reliability from mean success or model recency.

The authors explicitly recommend temporal reevaluation and change-control
checks because models, prompts, scaffolds and environments change. They also
warn that reliability metrics can be gamed, that a reliably acting system can
still pursue the wrong goal, and that high scores are not sufficient grounds
for deployment.

## Limits that govern transfer

The empirical work covers two bounded benchmarks, one scaffold per benchmark
and five runs per task. The safety labels use an LLM judge, the perturbations
sample only a small part of real change, and metric definitions and aggregation
are judgment choices. Temperature zero may overstate consistency for settings
that use sampling.

Most importantly, extended sessions, state drift, checkpoint recovery,
multi-agent error propagation and lifecycle reliability appear in the paper's
**future research agenda**, not its results. The evaluated episodes lasted
minutes. Applying the dimensions to a continuing team is therefore a reasoned
extension that needs its own workload, exposure periods and intervention/cost
measures; it is not an empirical result of this paper.

This is a paraphrased reading record, not an independent reproduction.

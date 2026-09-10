---
id: scaling-agent-systems-2026-09-09
kind: source_reading
source_title: Towards a Science of Scaling Agent Systems, v3
source_url: https://arxiv.org/abs/2512.08296v3
source_date: 2026-04-08
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and the v3 full text, with targeted extraction of the regression table, the coordination metrics, the per-benchmark results and the limitations section
---

# Reading — Towards a Science of Scaling Agent Systems, v3

[Source](https://arxiv.org/abs/2512.08296v3). Kim, Gu, Park, Park, Schmidgall,
Heydari, Yan, Zhang, Zhuang, Liu, Malhotra, Liang, Park, Yang, Xu, Du, Patel,
Althoff, McDuff, Liu. v1 2025-12-09; v3 2026-04-08. Reading scope: abstract,
system definitions, regression model and coefficient table, coordination
metrics, per-benchmark results, architecture-selection rule, limitations.

## What was compared

260 configurations across six agentic benchmarks, three LLM families
(reported as OpenAI, Google and Anthropic tiers, Intelligence Index 42–71),
and five architectures: single-agent (SAS); **Independent** (workers report to
an aggregator that concatenates without cross-validation); **Centralized**
(star topology under one orchestrator); **Decentralized** (all-to-all debate
rounds); and **Hybrid** (star plus peer edges). Tools, prompts and total
reasoning-token budget were standardized "to isolate architectural effects".

## Coordination metrics as defined

- **Coordination overhead** `O = (T_MAS − T_SAS) / T_SAS × 100%`, the increase
  in total reasoning turns. Measured: Independent 58%, Centralized 285%,
  Decentralized 263%, Hybrid 515%.
- **Trace-level error amplification** `A_e^trace`, the ratio of extra tokens
  arising from inter-agent coordination failures. Measured: SAS 1.0,
  Centralized 4.4×, Hybrid 5.1×, Decentralized 7.8×, **Independent 17.2×**.

## Regression results

Cross-validated R² = 0.373 (0.413 with task-grounded capability metrics). The
rule selected the best architecture for 87% of held-out configurations.

Significant terms: model capability β̂ = +0.126 (p = 0.008); log tool count
β̂ = +0.166 (p < 0.001); single-agent baseline β̂ = +0.250 (p = 0.001);
**baseline × log agent count β̂ = −0.236 (p = 0.004)**; **coordination
efficiency × tool count β̂ = −0.096 (p = 0.002)**, the largest interaction
effect; redundancy × agent count β̂ = +0.024 (p = 0.034).

Not significant: log agent count itself (p = 0.487), overhead (p = 0.611),
message density (p = 0.585), redundancy alone (p = 0.780), efficiency alone
(p = 0.733), error amplification alone (p = 0.658), capability² (p = 0.977).

## Where multi-agent helped and hurt

- **Finance Agent** (decomposable analysis, 5 tools, single-agent baseline
  ≈ 0.35): Centralized +80.8% (0.631 vs 0.349).
- **PlanCraft** (sequential crafting, 4 tools, baseline 0.568): Independent
  **−70.0%** (0.170); Centralized −50.3%, Decentralized −41.5%, Hybrid −39.1%.
  A task the single agent resolved in 3 turns needed 7+ under orchestration.
- **SWE-bench Verified**: every multi-agent variant slightly worse (−2% to
  −15%), attributed to baselines above 45%.
- **Workbench** −11% to +6%; **BrowseComp-Plus** up to +9.2% (decentralized).

The paper states a decision boundary at single-agent accuracy **P_SA\* ≈ 0.45**:
above it, single-agent typically outperforms multi-agent. It reports that
architectures without centralized verification propagated errors more readily,
and that for tool counts above four, coordination costs amplify non-linearly.

## Limitations the paper states

Language-model agents only; three model families at specific tiers; four
multi-agent variants are a structured ablation and not exhaustive; coordination
metrics come from execution traces and other measurements may give different
coefficients; R² = 0.373 leaves substantial unexplained variance; the model is
correlational, not causal; and all results assume matched total reasoning-token
budgets, so they may differ under unlimited or per-agent-capped compute.

This is a paraphrased reading record, not an independently reproduced result.

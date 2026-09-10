---
id: judge-entanglement-2026-09-09
kind: source_reading
source_title: A Statistical Framework for Auditing Behavioral Dependence and Induced Bias in LLM Judges
source_url: https://arxiv.org/abs/2604.07650
source_date: 2026-08-09
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the v2 HTML full text, extracting the two dependence metrics, the intra- and cross-family measurements, the correlation with judge over-endorsement, and the limitations
---

# Reading — Auditing behavioral dependence in LLM judges, v2

[Source](https://arxiv.org/abs/2604.07650). Chenchen Kuai, Jiwan Jiang, Zihao
Zhu, Hao Wang, Keshu Wu, Zihao Li, Yunlong Zhang, Chenxi Liu, Zhengzhong Tu,
Zhiwen Fan, Yang Zhou. v2, 2026-08-09. Reading scope: method, entanglement
measurements, the link to judge bias, stated limitations.

## Question and method

Whether models that look independent share hidden behavioral dependence
through common training signals and distillation. 18 models across six
families, on MMLU-Pro and MATH-500. Two metrics:

- **Difficulty-Weighted Behavioral Entanglement Index (BEI)** — excess
  co-failure beyond what task difficulty predicts, weighting synchronized
  failures on *easy* tasks most heavily, since those are the diagnostic ones.
- **Cumulative Information Gain (CIG)** — how often a pair of models picks the
  *same wrong answer*, beyond what distractor attractiveness predicts.

Both use Monte Carlo null distributions with false-discovery-rate correction.

## Measurements

**Within a family, dependence is strong.** Llama models show the highest
co-failure synchronization (BEI = 0.0525); Llama-to-Llama pairs dominate the
strongest relationships; Qwen variants show significant directional alignment.

**Across families, dependence is selective but real.** GPT–Claude pairs show
notable directional dependence (CIG = 0.0525–0.0471); DeepSeek–Gemini
relationships were also identified. Cross-family patterns are fewer than
within-family ones but statistically significant.

## The link to judging

Detected dependence correlates with judge over-endorsement bias, rho =
0.508–0.520, p < 0.01; with judge precision degradation, rho = 0.441–0.520
across benchmarks. Where judges share training lineage, their agreement
reflects "correlated errors rather than independent verification."

## Stated limitations

The framework is pairwise only. CIG applies naturally only to multiple-choice
questions; the MATH-500 analysis transfers rather than re-estimates directional
dependence. Crucially, the analysis "identifies behavioral association but does
not establish its causal origin." The estimates are "a snapshot of model
behavior at the time of evaluation" and are not permanent model properties —
the authors call for repeated audits as models change.

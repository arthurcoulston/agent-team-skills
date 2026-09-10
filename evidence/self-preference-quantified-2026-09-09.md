---
id: self-preference-quantified-2026-09-09
kind: source_reading
source_title: Quantifying and Mitigating Self-Preference Bias of LLM Judges
source_url: https://arxiv.org/abs/2604.22891
source_date: 2026-06-02
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page for v4, extracting the measurement design, the capability finding and the mitigation result. Full-text tables not extracted; see the recorded gap below
---

# Reading — Quantifying and mitigating self-preference bias of LLM judges, v4

[Source](https://arxiv.org/abs/2604.22891). Jinming Yang, Zheng Hu, Chuxian
Qiu, Zhenyu Deng, Xinshan Jiao, Tao Zhou. v4 submitted 2026-04-24, revised
2026-06-02. Reading scope: abstract-level method, headline findings, mitigation.

## Method

An automated framework covering 20 mainstream LLMs. It constructs "equal-quality
pairs of responses with negligible quality differences", which lets a judge's
*bias* be separated statistically from its *discriminability* without needing
human gold labels — the constraint that limited earlier measurements.

## Findings

"advanced capabilities are often uncorrelated, or even negatively correlated,
with low SPB" — self-preference bias does not decline as models get stronger,
and on this measurement sometimes rises with capability.

A structured multi-dimensional evaluation strategy, grounded in cognitive-load
decomposition, reduced self-preference bias by **31.5% on average** — a
reduction, not an elimination.

## Gap in this reading

Per-model numbers and whether same-*family* (as distinct from same-model) bias
was measured separately were not extracted; the abstract page does not carry
them. The family question is answered instead by the
`judge-entanglement-2026-09-09` reading in this directory, which measures
cross-family dependence directly. Anyone relying on per-model SPB
magnitudes should read the full text before quoting a figure.

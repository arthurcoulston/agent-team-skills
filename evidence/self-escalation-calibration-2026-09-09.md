---
id: self-escalation-calibration-2026-09-09
kind: source_reading
source_title: "Knowing When to Ask for Help: Bayesian Self-Escalation in Hierarchical LLM Agents"
source_url: https://arxiv.org/abs/2608.24087
source_date: 2026-08-25
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the v1 full text, with targeted extraction of the escalation rule, the simulation and real-model results, the calibration proposition and the stated limitations
---

# Reading — Bayesian Self-Escalation

[Source](https://arxiv.org/abs/2608.24087). Nadeem Shaikh (independent,
Melbourne). v1, 2026-08-25. Reading scope: method, results, the calibration
result, limitations.

## Method

Escalation is framed as optimal stopping. A junior model maintains a
**competence posterior** — a running estimate of its own probability of
eventually succeeding, updated from token-level uncertainty signals — and hands
the task to a stronger senior model when the expected cost of deferring falls
below the expected cost of continuing alone. Evaluated in simulation (synthetic
Beta-distributed signals, 40 tokens, 40,000 queries) and on MBPP sanitized (257
code-generation tasks) with Qwen2.5-Coder 1.5B as junior and 7B as senior.

## The result

**In simulation, at matched compute (~0.11 cost per query):** the optimal-stopping
policy reaches **96.0%** accuracy while escalating on **40%** of queries, against
**91.0%** for fixed-rule baselines and **90.1%** for escalating always. Escalating
everything is both more expensive and less accurate than escalating selectively.

**On real models (MBPP):** streaming escalation reaches 74.7% accuracy at
0.98× junior-only compute, against a junior baseline of 62.3% and a senior
baseline of 80.9%; post-hoc routing needed 1.41× compute for equivalent
accuracy.

**When the signal becomes usable.** Token entropy separates success from failure
early but non-monotonically, with the gap collapsing between 25% and 55% of
generation. The accumulated posterior does better, rising near-monotonically
from AUROC 0.51 to 0.76 and "plateauing rather than declining" through that
middle band. The authors' own summary: "The competence signal is informative but
imperfect", cross-validated at AUROC 0.758 against eventual success.

**Calibration is the binding constraint** (their Proposition 3): regret is
bounded by the expected calibration error of the belief, so miscalibration —
especially confident wrongness — dominates the sophistication of the decision
rule. Under 30% adversarial contamination of the signal, accuracy fell from
95.2% to 85.7% while the escalation rate *dropped*: a corrupted self-estimate
makes an agent ask less, not more.

## Caveats

Stated: the conditional-independence assumption "is false for real token
streams, which are correlated and non-stationary"; confidently wrong cases
cannot be rescued, since "no threshold policy on a miscalibrated signal can
recover"; the method requires logit access; senior reliability is assumed
constant; and real-model validation is one code cascade with a constant
threshold, greedy decoding and a single seed, with the calibration-sensitivity
prediction "remain[ing] untested on real models".

The senior here is a bigger model, not a person. Nothing in it measures a delay
between asking and being answered, which is the defining feature of asking a
human.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

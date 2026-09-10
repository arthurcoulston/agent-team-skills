---
id: review-overcorrection-2026-09-09
kind: source_reading
source_title: "Are LLMs Reliable Code Reviewers? Systematic Overcorrection in Requirement Conformance Judgement"
source_url: https://arxiv.org/abs/2603.00539
source_date: 2026-02-28
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and the v1 HTML full text, extracting the models and datasets, the per-condition false-negative tables, the filter results and the threats-to-validity section
---

# Reading — Systematic overcorrection in requirement conformance judgement, v1

[Source](https://arxiv.org/abs/2603.00539). Haolin Jin, Huaming Chen. v1,
2026-02-28. Also published in *Automated Software Engineering* (Springer).
Reading scope: method, per-model and per-prompt false-negative rates, the
Fix-guided Verification Filter, threats to validity.

## Question

Can an LLM reliably judge whether code conforms to a natural-language
requirement? The paper's finding is the opposite of the expected failure:
"LLMs frequently misclassify correct code implementation as non-compliant or
defective."

## Method

Five judges: GPT-4o, Claude-4.5-sonnet, Gemini-2.0-flash (closed) and
Llama-3.1-8B, Mistral-Small-3.1-24B (open). A unified benchmark of over 1,400
instances built from HumanEval-X-Bugs, MBPP reconstructed with buggy variants,
and QuixBugs. Each task carries both a canonical and a buggy implementation, so
a wrong rejection of the canonical one is measurable.

**False-negative rate (FNR) here means correct code judged non-conforming.**

## Rejecting correct work — direct prompt

Per model, on HumanEval / MBPP / QuixBugs:

- GPT-4o — 26.2% / 35.9% / 35.0%
- Claude-4.5 — 26.2% / 58.5% / 40.0%
- Gemini-2.0 — 25.6% / 34.7% / 25.0%
- Llama-3.1 — 57.3% / 74.7% / 52.5%
- Mistral-3.1 — 35.9% / 60.9% / 40.0%

Even the best judges reject a quarter to a third of *correct* implementations.

## Asking the reviewer to explain and propose a fix makes it worse

Same models, full prompt (judgement plus explanation plus repair):

- GPT-4o — 73.2% / 87.9% / 60.0%
- Claude-4.5 — 36.0% / 62.3% / 50.0%
- Gemini-2.0 — 34.1% / 39.6% / 32.5%
- Llama-3.1 — 84.1% / 88.2% / 77.5%
- Mistral-3.1 — 48.8% / 74.3% / 62.5%

GPT-4o degrades most: +46.5 points on HumanEval, +52.0 on MBPP, +25.0 on
QuixBugs. The paper's summary of the pattern is that moving from Direct to
Direct+Explain to Full "generally decreases FPR while dramatically increasing
FNR" — the reviewer misses fewer real defects and invents far more.

Gemini-2.0 is the mildest case, degrading by roughly 5–9 points; the effect
is systematic in direction but very uneven in size.

## What fixed it

A **Fix-guided Verification Filter**: treat the reviewer's own proposed repair
as executable counterfactual evidence and run both the original and the revised
implementation against benchmark tests plus augmented specification-constrained
tests. A finding that survives is kept; one whose "fix" changes nothing
observable is dropped.

Average FNR: HumanEval 54.8% → 16.3%; MBPP 69.0% → 28.9%; QuixBugs 51.0% →
24.0%. GPT-4o on MBPP fell from 88.7% to 40.0% (−48.8 points) while its false
positives rose only from 0.0% to 0.4%.

## Threats to validity, as stated

**Construct:** the paper conflates over-correction with hallucination without a
formal alignment between them; its notion of correctness assumes the benchmark
tests are complete and the canonical solutions are genuinely correct.

**Internal:** results depend on the specific prompt wording; model
non-determinism and limited test coverage affect how reliable the filter is.

**External:** the tasks are small Python functions and may not generalise to
production code; the closed-source models evolve quickly, which limits
reproducibility.

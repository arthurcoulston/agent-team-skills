---
id: rubric-criteria-survey-2026-09-09
kind: source_reading
source_title: "From Holistic Evaluation to Structured Criteria: Rubrics Across the Evolving LLM Landscape"
source_url: https://arxiv.org/abs/2606.08625
source_date: 2026-07-01
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the v2 HTML full text, extracting what the survey establishes about rubric effects on agreement, rubric authorship, which biases survive a rubric, and its stated theoretical limits
---

# Reading — Rubrics across the evolving LLM landscape, v2

[Source](https://arxiv.org/abs/2606.08625). Hao Chen, Ziyu Han, Yukun Yan,
Qingfu Zhu, Maosong Sun, Wanxiang Che. v1 2026-05-31; v2 2026-07-01. Reading
scope: the evaluative level of the survey — what a rubric does to a judge's
agreement, who writes it, and what it fails to remove. This is a survey, so
its claims are secondary reports of primary results.

## What a rubric is here

"explicit sets of criteria that transform complex quality judgments into
structured and actionable standards", operating at three levels: evaluative
(decomposing a holistic judgment into verifiable dimensions), training (dense
feedback signal), and agentic-intrinsic (internalised by an agent).

## Effect on agreement

The survey is light on pooled quantitative effects and reports individual
results:

- TICK: "providing the checklists to human evaluators substantially improves
  inter-annotator agreement" — the effect is reported for *human* raters.
- HealthBench: 48,562 physician-authored binary criteria, reaching
  clinician-level agreement at that scale.
- Rubric-locking reduces inconsistency, but one study found "detailed rubrics
  benefit reasoning tasks but hurt coding tasks."
- A boundary condition: "Holistic judges equipped with detailed rubrics
  outperform atomic judges" where a task demands completeness — granularity
  has to match the task, and finer is not uniformly better.

## Who writes the rubric

A quality–scalability trade-off. Human expert construction is the "gold
standard for rubric quality, but its prohibitive cost makes it impractical as a
routine approach" — HealthBench needed 262 physicians. Automated construction
scales but "low-quality rubrics can actively degrade model judgment", and the
survey reports "substantial degradation in rubric quality and evaluator
consistency" when rubrics are machine-generated rather than expert-authored.
Human-in-the-loop refinement is the middle ground.

## What a rubric does not remove

Persisting under rubrics: order bias, position bias, and self-preference bias —
judges favour "outputs from their own model family even under fully objective
criteria". Also **criterion drift**, where "verdicts drift with minor rubric
wording changes independently of actual behavior", and systematic criterion
drift across answer combinations. Mitigations exist at training and inference
level and do not eliminate these.

## Stated limits

A theoretical one worth carrying: "For any finite fixed set of evaluation
criteria, there always exists a true reward function the rubric completely
fails to capture." Also rubric saturation, where good criteria exhaust and need
continuous replacement; and under-constrained queries, where "rubric quality
cannot be improved in isolation without co-designing the query itself".

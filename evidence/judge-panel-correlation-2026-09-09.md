---
id: judge-panel-correlation-2026-09-09
kind: source_reading
source_title: "Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation Panels"
source_url: https://arxiv.org/abs/2605.29800
source_date: 2026-05-28
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and v1 text, extracting the panel design, the effective-sample-size result, the panel-versus-best-single-judge comparison and the authors' diagnosis
---

# Reading — Nine Judges, Two Effective Votes, v1

[Source](https://arxiv.org/abs/2605.29800). Guneet Kohli. v1, 2026-05-28.
Reading scope: method, effective-votes result, panel versus single judge,
tested aggregation methods, stated conclusion.

## Method

9 frontier LLM judges drawn from 7 model families. Three natural language
inference datasets with 100 human annotations per item, plus RewardBench for
pairwise preference. Conditions varied prompt, temperature and whether
chain-of-thought was used. Correlation between judges was quantified with the
Kish effective sample size (n_eff) against a Condorcet null model.

## Result

"the 9 judges effectively provide only about 2 independent votes' worth of
information."

Panel accuracy falls **8–22 percentage points below** what the same panel would
achieve if its members erred independently.

"the best single judge matches or outperforms the full panel across all
conditions" — the panel gave negligible or negative lift over its strongest
member, in every condition tested.

Established aggregation methods "close at most 11% of this gap, even with
access to correct answers."

## The authors' diagnosis

The failure is in the correlation between judges, not in the aggregation
algorithm. Their stated conclusion: "scaling up panels cannot substitute for
genuinely independent evaluation."

## Scope and limits of this reading

Bounded classification and pairwise preference tasks with human-annotated
ground truth, on one snapshot of frontier models. No condition was reported in
which the panel beat its best member, but the paper does not establish that no
such condition exists. The result does not tell you which single judge is the
best one — identifying that still requires the human-annotated ground truth
the panel was meant to substitute for.

---
id: choosing-an-independent-reviewer
title: What reviewer independence buys, and how much of it you actually have
status: draft
relations:
  - type: applies_to
    to: skill:reviewing-another-agents-work
sources:
  - title: Do LLM Evaluators Prefer Themselves for a Reason?
    url: https://arxiv.org/abs/2504.03846
    source_date: 2025-12-12
    evidence_date: 2026-09-09
    evidence: evidence:self-preference-legitimacy-2026-09-09
  - title: Quantifying and Mitigating Self-Preference Bias of LLM Judges
    url: https://arxiv.org/abs/2604.22891
    source_date: 2026-06-02
    evidence_date: 2026-09-09
    evidence: evidence:self-preference-quantified-2026-09-09
  - title: A Statistical Framework for Auditing Behavioral Dependence and Induced Bias in LLM Judges
    url: https://arxiv.org/abs/2604.07650
    source_date: 2026-08-09
    evidence_date: 2026-09-09
    evidence: evidence:judge-entanglement-2026-09-09
  - title: "Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation Panels"
    url: https://arxiv.org/abs/2605.29800
    source_date: 2026-05-28
    evidence_date: 2026-09-09
    evidence: evidence:judge-panel-correlation-2026-09-09
  - title: "The Self-Correction Illusion: Role Relabeling Gates Explicit Error Flagging in Large Language Models"
    url: https://arxiv.org/abs/2606.05976
    source_date: 2026-07-31
    evidence_date: 2026-09-09
    evidence: evidence:self-correction-role-relabeling-2026-09-09
uncertainty: >
  The direction of every finding here is well supported and the magnitudes are
  not. Entanglement was measured on multiple-choice and mathematics benchmarks
  and its authors say explicitly that it shows association, not cause, and is a
  snapshot rather than a model property. The panel result is one study, on
  natural language inference and pairwise preference, with human ground truth
  available — the condition your review does not have. The role-relabeling
  effect is large but measured on verifiable tasks, and no harm rate was
  reported alongside it.
applicability: >
  Choosing who reviews a contribution, and deciding how much a favourable
  verdict is worth given who gave it. It applies wherever the reviewer is a
  model. It says nothing about human reviewers, and its numbers are properties
  of the model cohorts and benchmarks named, not constants to export.
review:
  last_checked: 2026-09-09
  checked_by: scout
---

# What reviewer independence buys, and how much of it you actually have

Independence is the whole mechanism. It is also the property most easily
claimed and hardest to hold, because the arrangements that look independent
often are not.

## Self-review is not weakly independent — it fails where you need it

A model judging its own output prefers it, and the useful question is whether
that preference is *wrong*. Split against objectively verifiable benchmarks
across seven model families, most of a strong model's self-preference turns out
to be legitimate: it prefers its own answer because its own answer is better.

The harmful remainder is not spread evenly. It "persists on instances where
models perform poorly as generator" — the bias concentrates precisely on the
cases the model got wrong, which is the only place a review has anything to do.
Worse, stronger models show *more* pronounced harmful bias when they do err;
they "struggle more to recognize when they are wrong."

So the failure mode is not that self-review is a bit noisier. It is that
self-review is roughly fine everywhere it does not matter and worst exactly
where it does. Capability does not rescue it: a separate measurement across 20
models found advanced capability "often uncorrelated, or even negatively
correlated" with low self-preference bias. The best mitigation measured there
cut the bias by 31.5% on average — a reduction, from a framework built to
reduce it.

One mitigation did work on the harmful component: making the evaluator generate
a long reasoning trace before returning a verdict. Use it, and do not mistake
it for having made self-review independent.

## A different model is not automatically an independent one

Models that were never trained together still fail together. Auditing 18 models
across six families for excess co-failure beyond what task difficulty predicts:
dependence is strongest within a family — Llama-to-Llama pairs dominate — and
is selectively but significantly present across families, with GPT–Claude pairs
showing notable directional error alignment. Directional alignment is the sharp
version of the measurement: not just failing on the same items, but choosing
the *same wrong answer*.

That dependence tracks judge behaviour. It correlates with over-endorsement
bias at rho 0.508–0.520 (p < 0.01) and with judge precision degradation at rho
0.441–0.520. Where judges share lineage their agreement reflects "correlated
errors rather than independent verification."

Two practical consequences. Prefer a reviewer from a different family than the
author, and treat that as reducing correlation rather than removing it. And
where the reviewer is the same model as the author, you have self-review under
another name, whatever the diagram says.

## Adding reviewers does not add independence

Nine frontier judges from seven model families, on natural language inference
and pairwise preference: measured with Kish effective sample size against a
Condorcet null, "the 9 judges effectively provide only about 2 independent
votes' worth of information." Panel accuracy landed 8–22 percentage points
below what independent errors would have produced, and "the best single judge
matches or outperforms the full panel across all conditions." Established
aggregation methods closed at most 11% of the gap *with access to correct
answers*.

The authors' diagnosis is the part to carry: the problem is the correlation
between judges, not the aggregation scheme, so "scaling up panels cannot
substitute for genuinely independent evaluation."

This does not say a second reviewer is worthless. It says that a second
reviewer bought to raise confidence buys much less than counting suggests, and
that unanimous agreement among correlated reviewers is close to no evidence at
all. Note also what the study could not do: it took the best single judge as
the benchmark, and identifying which judge that is still required the human
ground truth the panel was there to replace. You will not have it.

## Some of what looks like independence is the label on the content

A training-free intervention presented byte-identical erroneous content in
different message roles — an internal thought, a user message, a tool response,
a system memory block — across 12 model-domain combinations. Relabeling the
same error as externally sourced raised explicit correction rates by **23 to 93
percentage points**, significant in 10 of 12 settings.

Read it both ways, because it cuts both ways. It is a strong argument for
handing a reviewer a finished artifact as an external object rather than
letting an author continue in its own context. It is equally a warning that the
apparent power of independent review is partly a framing effect: the same
weights flag far more when the content arrives labelled as someone else's. An
arrangement that produces the label without the separate judgment collects the
framing benefit and reports it as independence.

The measurement is on mathematics and logical deduction, with verifiable
answers, and no rate of *wrongly* flagging correct content was reported
alongside it — which matters, because
[what a review verdict establishes](what-a-review-verdict-establishes.md) shows
that rate can be very high.

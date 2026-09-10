---
id: what-a-review-verdict-establishes
title: What a review verdict establishes, and what it only appears to
status: draft
relations:
  - type: applies_to
    to: skill:reviewing-another-agents-work
  - type: supports
    to: knowledge:choosing-an-independent-reviewer
sources:
  - title: "Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models Across Agreement, Consistency, and Bias"
    url: https://arxiv.org/abs/2606.19544
    source_date: 2026-06-17
    evidence_date: 2026-09-09
    evidence: evidence:judge-agreement-at-scale-2026-09-09
  - title: "Are LLMs Reliable Code Reviewers? Systematic Overcorrection in Requirement Conformance Judgement"
    url: https://arxiv.org/abs/2603.00539
    source_date: 2026-02-28
    evidence_date: 2026-09-09
    evidence: evidence:review-overcorrection-2026-09-09
  - title: "From Holistic Evaluation to Structured Criteria: Rubrics Across the Evolving LLM Landscape"
    url: https://arxiv.org/abs/2606.08625
    source_date: 2026-07-01
    evidence_date: 2026-09-09
    evidence: evidence:rubric-criteria-survey-2026-09-09
  - title: Why Do Multi-Agent LLM Systems Fail? (MAST), v3
    url: https://arxiv.org/abs/2503.13657v3
    source_date: 2025-10-26
    evidence_date: 2026-09-09
    evidence: evidence:mast-failures-2026-09-09
uncertainty: >
  The agreement and bias numbers are from one large study on three
  English-language text-only benchmarks under a single pairwise template, run
  inside a five-week window; its authors say a different rubric or an enabled
  reasoning channel could change every profile in it. The overcorrection rates
  are from small Python functions with benchmark tests standing in for ground
  truth, and their authors doubt they generalise to production code. The rubric
  claims are a survey's secondary reports. The direction of all three — kappa
  deflation, false rejection of correct work, biases surviving a rubric — is
  better supported than any of the magnitudes.
applicability: >
  Deciding what to require of a review before it runs, and how much weight to
  put on its verdict afterwards. It applies to a model reviewing substantive
  work against a stated intent. It does not tell you how to build an evaluation
  programme for a team, and its numbers describe the named benchmarks rather
  than your work.
review:
  last_checked: 2026-09-09
  checked_by: scout
---

# What a review verdict establishes, and what it only appears to

## Agreement, once you remove the agreement you would get by chance

The largest systematic evaluation to date — 21 judges from nine providers,
three benchmarks, roughly 541,000 judgments — makes one correction that changes
how a pass should be read. Judge validation in practice reports exact-match
agreement with human verdicts, and that statistic "does not correct for chance
and systematically overstates discriminative ability."

Corrected against chance, on MT-Bench, exact match runs 0.788–0.849 while
Cohen's kappa runs 0.376–0.511 — a deflation of 33.8 to 41.3 percentage points,
with the best judge in the cohort at kappa 0.511. On the more discriminating
JudgeBench, kappa spans 0.271–0.875; on RewardBench, 0.616–0.898. The deflation
is described as universal across the cohort.

Two things follow. A judge agreeing with a human eight times in ten may be
doing barely better than chance on the cases where the answer was in doubt. And
the range is enormous: which reviewer you use matters more than whether you
have one.

## The instrument decides the answer

The same 21 judges compress into a 13.5 pp kappa range on MT-Bench and spread
over 60.4 pp on JudgeBench — 4.5x wider — and rankings shift by up to 14
positions between benchmarks. The authors read MT-Bench's compression as a
ceiling effect: judges look equivalent because the instrument cannot separate
them.

Transferred to a review: a review whose criteria cannot separate a good
contribution from a mediocre one returns a pass that carries no information,
and the pass looks identical to an informative one.

## Consistency is not correctness

Two production-deployed judges showed test–retest reliability above 0.98
alongside position bias of 0.125 and 0.192: Qwen 3 8B at 0.992 / 0.192 with
JudgeBench kappa 0.289, Gemini 2.5 Flash at 0.988 / 0.125 with kappa 0.578.
"Test–retest reliability measures output stability, not decision-process
correctness." A reviewer that always picks the first option is perfectly
reproducible and maximally biased at once.

A reviewer that gives the same verdict twice has told you it is stable. It has
told you nothing about whether the verdict is right.

## Which biases were measured, and how big

Position bias, measured by paired AB+BA evaluations as |P(A wins) − 0.5|, ran
0.002 to 0.192 across the cohort — from negligible to severe depending on the
model. Verbosity bias, as the correlation between length differential and
verdict, was below 0.011 for all 21 judges and below 0.005 for 17 of them.

Take the verbosity result with the caveat its authors attach: it holds "under
our pairwise rubric and length-differential operationalization" and "should not
be interpreted as a universal claim that verbosity bias is solved." The
practical asymmetry is still useful — order is worth controlling for by
swapping and re-running; length is not the first thing to worry about.

## What a rubric fixes and what it does not

Structured criteria make scoring harder to distort than a holistic judgment,
and boolean verification removes interpretive ambiguity where a criterion can
be written that way. Checklists given to *human* evaluators substantially
improve inter-annotator agreement.

What survives a rubric, per the same survey: order bias, position bias, and
self-preference bias, with judges favouring "outputs from their own model
family even under fully objective criteria." Plus criterion drift — "verdicts
drift with minor rubric wording changes independently of actual behavior."

And rubric quality is itself a risk rather than a given. Expert-authored
criteria are the gold standard and impractical at scale; machine-generated ones
bring "substantial degradation in rubric quality and evaluator consistency",
and "low-quality rubrics can actively degrade model judgment." Granularity has
to match the task: detailed rubrics were found to benefit reasoning tasks and
*hurt* coding tasks, and where completeness matters a holistic judge with a
detailed rubric beat an atomic one.

Carry the theoretical limit too: "For any finite fixed set of evaluation
criteria, there always exists a true reward function the rubric completely
fails to capture." A rubric bounds a review; it does not complete it.

## The failure to expect is rejecting correct work

This is the finding most likely to change what a leader does. Five judges
across 1,400+ instances, where a wrong rejection of a known-correct
implementation is directly measurable: with a plain judgement prompt, correct
code was judged non-conforming 25.6%–26.2% of the time by the best judges on
the easiest dataset, and 34.7%–58.5% on the harder ones. Weaker judges reached
74.7%.

Then the part that inverts an intuition. Asking the reviewer to *explain its
judgement and propose a repair* made it dramatically worse. GPT-4o's false
rejection rate went from 26.2% to 73.2% on one dataset and 35.9% to 87.9% on
another — +46.5 and +52.0 points. The general pattern: enriching the prompt
"generally decreases FPR while dramatically increasing FNR." The reviewer
misses fewer real defects and manufactures far more imaginary ones. The size
varies sharply by model — Gemini-2.0 degraded by roughly 5–9 points — but the
direction was systematic.

The mechanism is worth naming: a reviewer asked to produce a fix has been given
a reason to find something to fix.

What repaired it was making the finding pay for itself. A **fix-guided
verification filter** treated the reviewer's proposed repair as executable
counterfactual evidence, ran the original and the revised version against tests,
and dropped findings whose fix changed nothing observable. Average false
rejection fell from 54.8% to 16.3%, 69.0% to 28.9%, and 51.0% to 24.0% across
the three datasets, while false positives rose by fractions of a point. Its
authors note the tasks were small Python functions and may not generalise.

Two pieces of guidance we draw from this section are ours, not the sources'.
Neither is measured, and both should be read as reasoned transfer:

- **Judge in one pass and work out the repair in a separate one.** What the
  measurement establishes is that the *combined* prompt is far worse. The
  remedy its authors tested was the fix-guided filter above, not a separation
  into passes, and nothing here shows that recording the verdict first recovers
  the judge-only rate. The mechanism makes it plausible; that is all.
- **Applying the pay-for-itself test in words where nothing is executable.**
  The filter's measured effect came from actually running two versions. A
  reviewer asking itself what would be observably different is the same
  question without the independent check that answered it, and is untested.

## Reviewing is also where the work gets dropped

The annotated multi-agent failure taxonomy — 150 expert-annotated traces at
inter-annotator kappa 0.88, scaled to 1600+ traces across 7 frameworks — puts
three failure modes in a task-verification group: incorrect verification 9.10%,
no or incomplete verification 8.20%, premature termination 6.20%. Together
those are about a quarter of annotated failures, and they are the review step
failing rather than the work failing.

The intervention evidence is thin and honest about it. A structured prompt with
an explicit verification section requiring final approval gave +9.4% task
success on one benchmark, and an added verification step +15.6%; on another,
improvements were modest and substantial failures persisted. The authors'
conclusion: "not all failure modes are resolved, and task completion rates
still remain low."

Verification is the control with the best evidence behind it, and its best
measured effect is a partial improvement on one benchmark.

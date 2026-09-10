---
id: judge-agreement-at-scale-2026-09-09
kind: source_reading
source_title: "Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models Across Agreement, Consistency, and Bias"
source_url: https://arxiv.org/abs/2606.19544
source_date: 2026-06-17
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and the v1 full text, with targeted extraction of the per-benchmark agreement tables, the bias audit, the proposed validation protocol and the stated limitations
---

# Reading — Reliability without Validity (LLM-as-a-Judge at scale), v1

[Source](https://arxiv.org/abs/2606.19544). Justin D. Norman, Michael U.
Rivera, D. Alex Hughes. v1, 2026-06-17. Reading scope: method, per-benchmark
agreement and kappa tables, consistency and bias results, the Minimum Viable
Validation Protocol, and the limitations section.

## Method

21 judges from nine providers, evaluated on three benchmarks — MT-Bench,
JudgeBench and RewardBench — under three protocols (agreement, consistency,
bias audit). 118 runs, approximately 541,000 individual judgments. All runs
executed within a five-week window in March–April 2026. Judges were run under
a single pairwise comparison template.

## The central claim

Judge validation in practice reports exact-match agreement with human
verdicts. That statistic does not correct for agreement reached by chance,
and so "systematically overstates discriminative ability."

## Agreement, exact match versus chance-corrected

**MT-Bench** — exact match 0.788–0.849; Cohen's kappa 0.376–0.511. Best judge
Gemini 3.1 Pro at kappa 0.511. Deflation between the two statistics 33.8–41.3
percentage points.

**JudgeBench** — exact match 0.645–0.964; kappa 0.271–0.875. Best judge Claude
Opus 4.6 at kappa 0.875. Deflation 8.1–38.5 points.

**RewardBench** — exact match 0.829–0.956; kappa 0.616–0.898. Best judge
Gemini 3.1 Pro at kappa 0.898. Deflation 5.9–21.3 points.

Kappa deflation is described as universal across the cohort.

## The benchmark changes the answer

MT-Bench compresses all 21 judges into a 13.5 pp kappa range; JudgeBench
spreads the same models over 60.4 pp, 4.5x wider; RewardBench sits between at
28.1 pp. Judge rankings shift by up to 14 positions between benchmarks. The
authors read MT-Bench's compression as a ceiling effect: judges look alike
because the instrument cannot separate them, not because they are alike.

## The consistency–bias paradox

High test–retest reliability coexists with severe position bias in two
production-deployed judges:

- Qwen 3 8B — test–retest 0.992, position bias 0.192, JudgeBench kappa 0.289.
- Gemini 2.5 Flash — test–retest 0.988, position bias 0.125, JudgeBench kappa
  0.578.

"Test–retest reliability measures output stability, not decision-process
correctness." A judge that always picks the first option scores perfect
test–retest and maximum position bias at the same time.

## Bias audit

**Position bias** measured by paired AB+BA evaluations as |P(A wins) − 0.5|.
Range across 21 judges 0.002–0.192; lowest Gemini 2.5 Pro at 0.002, highest
Qwen 3 8B at 0.192.

**Verbosity bias** measured as the Pearson correlation between
response-length differential and verdict. All 21 judges below 0.011, 17 below
0.005.

## Minimum Viable Validation Protocol

1. Chance-correct: report Cohen's kappa or Krippendorff's alpha as the
   headline metric alongside exact match.
2. Swap positions: measure position bias with paired AB+BA evaluations.
3. Replicate: at least 3 independent runs at temperature 0, response caching
   disabled.
4. Cross-validate: at least 2 benchmarks spanning preference-style and
   correctness-style distributions.
5. Audit the paradox: where test–retest exceeds 0.95, confirm position bias
   stays below 0.10.

## Stated limitations, in the authors' words

**Benchmark coverage:** "Our evaluation uses three established
English-language, text-only benchmarks (MT-Bench, JudgeBench, RewardBench).
Multilingual judging and multimodal judging—both of which are increasingly
common deployment settings—are not characterized in this study."

**Temporal stability:** "All evaluation runs were executed within a five-week
window in March–April 2026. Hosted-model endpoints are known to drift across
provider-side updates, sometimes silently, and we have not yet re-evaluated
these judges over time to quantify within-judge stability over a longer time
horizon."

**Rubric sensitivity:** "All judges were evaluated under a single pairwise
comparison template and a fixed operationalization of each metric. In
particular, our findings that all judges demonstrated verbosity bias below
0.011, under our pairwise rubric and length-differential operationalization,
should not be interpreted as a universal claim that verbosity bias is solved."

**Calibration:** Expected Calibration Error and Brier Score need token-level
logprobs most providers in the cohort do not expose; calibration analysis is
deferred.

**Thinking-model suppression:** "For models that generate a built-in reasoning
trace, the reasoning channel was suppressed... Reasoning-enabled evaluations
could change agreement, consistency, and bias profiles."

---
id: self-preference-legitimacy-2026-09-09
kind: source_reading
source_title: Do LLM Evaluators Prefer Themselves for a Reason?
source_url: https://arxiv.org/abs/2504.03846
source_date: 2025-12-12
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page covering v1 through v3, extracting the legitimate/harmful decomposition, the capability relationship, the tested mitigation and the stated limitation
---

# Reading — Do LLM evaluators prefer themselves for a reason?, v3

[Source](https://arxiv.org/abs/2504.03846). Wei-Lin Chen, Zhepei Wei, Xinyu
Zhu, Shi Feng, Yu Meng. v1 2025-04-04; v2 2025-10-31; v3 2025-12-12. Reading
scope: the decomposition of self-preference, its relation to model strength,
mitigations, limitations.

## What it separates

Earlier work established that models favour their own generations. This paper
asks whether that preference is *wrong*. It uses objectively verifiable
benchmarks — mathematical reasoning, factual knowledge, code generation —
across seven model families, plus real-world LMArena experiments, so that
"the model preferred its own output" can be split into:

- **Legitimate preference** — favouring its own output when that output is in
  fact better.
- **Harmful bias** — favouring its own output when that output is objectively
  worse.

## Findings

Stronger models show *greater* self-preference, and much of that preference
"aligns with objectively superior performance" — a strong model preferring
itself is usually right to.

Harmful self-preference "persists on instances where models perform poorly as
generator." That is, the bias concentrates exactly where the model made a
mistake — at the point where a review is supposed to catch something.

Stronger models display *more* pronounced harmful bias when they do err: they
"struggle more to recognize when they are wrong."

## Mitigation tested

Inference-time scaling for the evaluator — generating a long chain-of-thought
trace before returning a verdict — effectively reduced harmful self-preference.

## Stated limitation

Validation rests largely on objectively verifiable domains; broader validation
in subjective domains is incomplete, with the LMArena experiments a first step
toward it.

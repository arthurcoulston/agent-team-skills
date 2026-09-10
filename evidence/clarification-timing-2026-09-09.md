---
id: clarification-timing-2026-09-09
kind: source_reading
source_title: "Ask Early, Ask Late, Ask Right: When Does Clarification Timing Matter for Long-Horizon Agents?"
source_url: https://arxiv.org/abs/2605.07937
source_date: 2026-05-11
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the v1 full text after a PDF fetch failed to yield the text layer, with targeted extraction of the injection protocol, the per-dimension timing curves, the natural-ask behaviour, the wasted-compute measure and the stated limitations
---

# Reading — Ask Early, Ask Late, Ask Right

[Source](https://arxiv.org/abs/2605.07937). Gulati, Gupta, Lumer, Sen,
Subbiah. v1, 2026-05-11. Reading scope: setup, timing results by information
dimension, natural asking, wasted compute, limitations.

## Method

84 underspecified task variants across three benchmarks — MCP-Atlas (36
variants, 4 models, tasks of 6–20 actions), TheAgentCompany (30 variants, 3
models, 6–49 actions) and SWE-Bench Pro (18 variants, 3 models, 1–121 actions)
— with GPT-5.2, Claude Sonnet 4.5, Gemini 3 Flash and DeepSeek V3.2. Missing
information is removed along four dimensions taken from LHAW's framework:
**goal, input, constraint, context**.

Two protocols. **Forced injection** supplies "ground-truth clarifications at
controlled points along an oracle-calibrated action budget" — at 10%, 30%, 50%,
70% and 90% of the expected trajectory. **Natural ask** enables an `ask_user`
tool across 300 TheAgentCompany sessions and measures when, and whether, the
agent asks on its own.

## The result: what is missing decides when you must ask

The answer that matters is not "ask early" but that the deadline depends on the
dimension.

- **Goal.** On MCP-Atlas, pass@3 is **0.78** when the clarification arrives at
  10% of the trajectory and **0.39** at 70% — the no-clarification baseline is
  0.40. "Goal clarification loses nearly all value after 10% of execution."
- **Input.** 0.46 at 10%, 0.36 at 50%, 0.25 at 90%: "input shows gradual
  decline", holding useful value through roughly half the run.
- **Constraint.** On SWE-Bench Pro, 0.81 at 10% declining to 0.68 at 90%, but
  "remain[ing] above the no-clarification baseline at all tested timings
  (0.68 >> 0.56)."

The mechanism the authors propose is commitment: clarification value is bounded
by the recoverable fraction, `VOI_d(t) ≤ VOI_d(0)·(1−C_d(t))`, where `C_d(t)` is
the fraction of actions already taken that causally depend on dimension `d`.
"Goal and context condition all subsequent actions" while "input affects only
data-dependent steps."

Cross-model rank correlation on identical tasks runs Kendall's τ 0.78–0.87,
which the authors read as the timing profile being "substantially task-intrinsic"
rather than a property of the model.

## Left to itself, an agent asks at the wrong time or not at all

With `ask_user` available: GPT-5.2 asks in **52%** of sessions at a mean
trajectory position of 43%; Claude Sonnet 4.5 in **23%** at 50%; Gemini 3 Flash
in **0%**. The authors note GPT-5.2's mean position "is past the goal optimum
(10%) but within the input window."

## Waiting costs work already done

Wasted compute — "the fraction of pre-injection actions absent from the oracle
trace" — rises on TheAgentCompany "from 0.0% at Inj-10 to 21.7% at Inj-90", and
on MCP-Atlas ranges 38.4% to 52.9% across timings.

## Caveats

The study "establishes the demand side of clarification timing" and "does not
address the supply side: making agents recognize ambiguity and ask at the right
moment." MCP-Atlas gives "the strongest timing signals"; TheAgentCompany shows
"floor effects"; SWE-Bench Pro has "moderate per-cell sizes (n=12–31)". A
"behavioral confound exists between protocols: forced injection disables
ask_user while natural-ask enables it", so "agents may plan differently when
they know they cannot ask."

The clarifications are oracle-supplied and instant. Nothing here measures the
delay a real person imposes, or what the question had to contain to be
answerable.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

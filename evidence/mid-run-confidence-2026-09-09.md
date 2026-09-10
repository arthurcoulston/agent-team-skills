---
id: mid-run-confidence-2026-09-09
kind: source_reading
source_title: "Last Step Matters: Early Uncertainty Cannot Predict Failure in Long-Horizon Agents"
source_url: https://arxiv.org/abs/2608.29685
source_date: 2026-08-30
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and the v1 full text, with targeted extraction of the experimental setup, the AUROC results by trajectory position, the path-switching analysis and the stated limitations
---

# Reading — Last Step Matters

[Source](https://arxiv.org/abs/2608.29685). Li, Yu, Zang, Zhuang, Mo, Gan.
v1, 2026-08-30. Reading scope: setup, headline AUROC results at completion
versus mid-trajectory, path switching, limitations.

## Method

Three deep-research benchmarks: BrowseComp (200 questions, 32.0% accuracy,
average 31.6 steps), BrowseComp-zh (289 questions, 49.8%, average 20.7
steps), and HLE text-only (157 questions, 34.1%, average 13.5 steps). Five
open-weight models from 27B to 1T parameters — Qwen3.5-27B,
Qwen3.5-122B-A10B, GLM-4.7, DeepSeek-V3.2, Kimi K2.6 — with eight rollouts
per task across all combinations.

Signals measured: verbal confidence elicited on a 0–100 scale at each step;
token-probability measures (perplexity, entropy, max NLL, max token entropy);
six temporal aggregations of each; and ten consistency measures requiring
multiple rollouts.

## The result

At trajectory completion, verbal confidence separates success from failure
with a mean AUROC of **0.85** across 15 model–benchmark combinations, ranging
0.79–0.92 per model. Token-probability measures do much worse at the same
point: perplexity averages 0.65, entropy 0.64.

Earlier in the same trajectories, nothing works. At **50% progress no metric
exceeded a mean AUROC of 0.60**; at 80–90% progress metrics remained below
0.70; verbal confidence only rises to 0.85 at completion. The authors'
framing: "Early failure prediction is important for long-horizon agents, as
it enables timely intervention and can reduce inference and tool-use costs" —
and the evaluated signals do not deliver it.

## Why: agents change direction mid-trajectory

Path switching — agents "frequently abandon their current search direction
in-trajectory" — was detected in 86.8% of BrowseComp trajectories (average
8.5 switches each), 69.7% of BrowseComp-zh (average 4.7) and 36.9% of HLE
(average 1.3). Before the final switch, the Spearman correlation between
confidence and correctness stayed below 0.15; after it, the correlation rose
monotonically to 0.3–0.5. Correct trajectories showed a +15 percentage point
confidence increase from the first 70% of steps to the final step, while
incorrect trajectories fell 6 points.

## Caveats

The authors state the study focuses on long-horizon deep research, and that
results may vary by task type depending on whether agent actions modify
environment state and on how often path switching occurs; they name
mathematical reasoning, coding, dialogue, shopping and desktop control as
untested. The models are open-weight; no frontier proprietary model is in the
set. The finding is about an agent's own uncertainty signals, not about an
external check. This is a paraphrased reading record with quoted material.

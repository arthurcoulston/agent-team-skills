---
id: agentic-abstention-2026-09-09
kind: source_reading
source_title: "Agentic Abstention: Do Agents Know When to Stop Instead of Act?"
source_url: https://arxiv.org/abs/2606.28733
source_date: 2026-06-27
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the v1 full text, with targeted extraction of the benchmark construction, the timely-versus-eventual recall measures, the scaffold comparison, the over-abstention results and the stated limitations
---

# Reading — Agentic Abstention

[Source](https://arxiv.org/abs/2606.28733). Luo, Wen, Wang. v1, 2026-06-27.
Reading scope: construction, measures, per-scenario results, over-abstention,
limitations.

## Method

A consolidated benchmark of 28,000+ instructions in three settings: WebShop
(1,000 instances, 500 solvable and 500 warranting abstention), Terminal-Bench
2.0 (277: 89 solvable, 188 unsolvable) and AbstentionBench question answering
(27,073 samples drawn from 16 QA datasets). Abstention is warranted where a
task is "infeasible based on just the request itself" or where "infeasibility
becomes apparent only after interaction" — categories being subjective
preference, underspecified intent, false premise or contradiction, and missing
target or prerequisites. The action space is stated as
"𝒜={ANSWER,ABSTAIN,ACT}".

The measure that matters here is **timely** recall (AbsRec@1: abstaining at the
first opportunity) against **eventual** recall (AbsRec@10: abstaining within ten
turns).

## The result

Agents mostly get there late or not at all. On the web scenario the best model
(Llama-3.3-70B) reaches **26.7% timely** recall against **83.2% eventual**;
most other models stay below 50% even after ten turns. On QA, Qwen3-235B
reaches 59% timely and about 71% eventual; the others are at or below 42%
eventual.

**The scaffold changes the answer as much as the model does.** The same model
(GPT-5.4-mini) on terminal tasks reaches about **38%** eventual recall under
Codex CLI and about **18%** under Terminus 2: "Terminal abstention is strongly
affected by the scaffold."

The paper's own intervention (a method it calls convolve) moved Llama-3.3-70B on
WebShop from 26.7% to **57.4%** timely and from 83.2% to **100.0%** eventual.

## The failure in the other direction

"Over-abstention increases with interaction, but reasoning helps mitigate it."
On *solvable* web tasks, Qwen3-235B-Instruct's over-abstention rate rises to
**34% by turn 10**; the thinking variant to 24%; terminal scenarios show 0–8%.
"Stronger reasoning generally helps reduce false abstention, though it does not
eliminate the benchmark-dependent gap."

## Caveats

The authors' stated limitations: the three settings "are still only
representative slices of the broader agent landscape"; the environment tasks
"mainly focus on missing targets or missing prerequisites", leaving other forms
of latent infeasibility untested; not every model, scaffold, reasoning setting
or tool interface was tested in every scenario; and they "cannot fully rule out"
benchmark-like exposure during training.

These are single-agent task episodes, not a continuing team, and the abstention
is toward a simulated user rather than a person with limited attention.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

---
id: teams-hold-experts-back-2026-09-09
kind: source_reading
source_title: Multi-Agent Teams Hold Experts Back, v4
source_url: https://arxiv.org/abs/2602.01011v4
source_date: 2026-05-28
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and the v4 full text, with targeted extraction of the task set, team configurations, the synergy measure, the conversational coding correlations and the limitations section
---

# Reading — Multi-Agent Teams Hold Experts Back, v4

[Source](https://arxiv.org/abs/2602.01011v4). Pappu, El, Cao, di Nolfo, Sun,
Cao, Zou. v4 submitted 2026-02-01, revised 2026-05-28; accepted at ICML 2026.
Reading scope: abstract, task and team design, synergy definition, behavioural
coding and correlations, adversarial condition, limitations.

## What was studied

**Self-organizing** teams: agents interact freely, with no fixed roles,
workflow or aggregation rule. Tasks were human-psychology group exercises
(NASA Moon Survival, Lost at Sea, Student Body President) and ML benchmarks
(MMLU Pro, GPQA Diamond, SimpleQA, HLE text-only, MATH-500, on 100-problem
subsamples). Expertise was either **concentrated** — one agent holds the
task-relevant ground truth — or **distributed** across members.

Teams were 4 agents, with 2 and 8 also run for a dilution analysis. Psychology
tasks used Claude 3.5 Haiku and GPT-4o-mini in three mixes; ML benchmarks used
task-specific teams drawn from Claude Opus/Sonnet/Haiku, GPT-5, GPT-4o,
GPT-4o-mini, GPT-3.5 Turbo and o3/o4-mini.

## Synergy measure and results

Strong synergy means team performance matches or exceeds its best individual
member. The **relative synergy gap** is (best individual − team) / best
individual for accuracy tasks, and (team error − expert error) / expert error
for ranking tasks; 0% means matching the expert.

Teams consistently failed to reach it: **6.3%–41.1%** gap on ML benchmarks and
**17.3%–113.4%** on the psychology tasks. Explicitly revealing which member was
the expert produced only modest improvement — **leveraging** expertise, not
identifying it, is the bottleneck.

Conversations were manually coded into four behaviours. On NASA, **epistemic
deference** correlated negatively with the synergy gap (r = −0.44, p = 0.007)
and **integrative compromise** — averaging expert and non-expert positions —
correlated positively with it (r = +0.55, p < 0.001). Team size correlated
positively with the synergy gap across all tasks (all p < 0.05): dilution
worsens from 2 to 8 members.

## The countervailing result

When one member was instructed to give worst-possible rankings, teams showed
"robustness to adversarial input, with minimal performance degradation". The
authors hypothesise that the same consensus-seeking that filters out expert
knowledge also filters out an adversarial contribution — a trade-off, not a
free improvement.

## Limitations the paper states

The attribution of consensus-seeking to alignment procedures is correlational;
aligned models were not compared with base counterparts. The tasks and five
benchmarks are "a small subset" of real collaboration. The study covers
equal-status teams with no externally imposed roles or hierarchy, which limits
generalization to structured organizational settings.

This is a paraphrased reading record, not an independently reproduced result.

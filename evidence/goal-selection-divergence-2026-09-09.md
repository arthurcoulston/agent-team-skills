---
id: goal-selection-divergence-2026-09-09
kind: source_reading
source_title: Language Model Goal Selection Differs from Humans' in a Self-Directed Learning Task
source_url: https://arxiv.org/abs/2603.03295
source_date: 2026-05-13
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page and the v2 HTML full text, with targeted extraction of the task design, the goal-selection measures, the intervention results and the stated limitations. The reported figures were transcribed through an extraction pass over the full text rather than read from the paper's tables directly; they are recorded here as extracted.
---

# Reading — Language Model Goal Selection Differs from Humans'

[Source](https://arxiv.org/abs/2603.03295). Molinaro, August, Perszyk,
Collins. v1 2026-02-06, v2 2026-05-13. Reading scope: abstract, task design,
goal-selection measures, chain-of-thought and persona interventions, semantic
robustness checks, limitations.

## Why it is here

This is the only source found in this pass whose subject is an agent
**choosing** which goal to pursue rather than executing a supplied one. The
authors state the gap themselves: "Most current benchmarks for LLMs test the
ability to complete predefined tasks, but not model propensities with respect
to goal selection itself."

## Abstract

"Whether in agentic workflows, social studies, or chat settings, large
language models (LLMs) are increasingly being asked to replace humans in
choosing which goals to pursue, rather than completing predefined tasks.
However, the assumption that LLMs accurately reflect human preferences for
goal setting remains largely untested. We assess the validity of LLMs as
proxies for human goal selection in a controlled, self-directed learning task
borrowed from cognitive science. Across five models (GPT-5, Gemini 2.5 Pro,
Claude Sonnet 4.5, Qwen3 32B, and Centaur), we find substantial divergence
from human behavior. While people gradually explore and learn to achieve
goals with diversity across individuals, most models exploit a single
identified solution or show surprisingly low performance, with distinct
patterns across models and little variability across instances of the same
model. Chain-of-thought reasoning and persona steering provide limited
improvements, and our conclusions hold across experimental settings. While
they await confirmation in applied settings, these findings highlight the
uniqueness of human goal selection and caution against its replacement with
current models."

## Method

An "alchemy game": on each of 144 trials (6 blocks of 24) the participant
**chooses** which of 6 potions to attempt, then attempts its recipe. Recipes
are 2 or 4 ingredients; the structure is hierarchical, so learning one potion
can help with others. 175 human participants. Five models: GPT-5, Gemini 2.5
Pro, Claude Sonnet 4.5, Qwen3 32B, Centaur.

The design's point is that the goal is self-selected every trial, which makes
selection itself a measured variable alongside performance.

## Results as extracted

**Learning and test performance.** Humans 40% ± 22% correct ingredient
sequences during learning, 64% ± 32% on in-distribution test items. Gemini
70% ± 16% learning and 99% test; GPT-5 87% ± 27% learning and 22% test;
Qwen3 68% ± 38% learning and 19% test; Claude 7% ± 19% learning; Centaur
26% ± 19%.

**Selection.** GPT-5, Claude and Qwen3 showed a "strong preference for
re-selecting the same potion as in the previous trial" — repetition rates of
94%, 93% and 94% against a human rate of 54%. Goal entropy collapsed
correspondingly: 0.12, 0.12 and 0.20 against 1.67 ± 0.14 for humans. Models
were "consistently biased towards simpler goals"; humans chose two-ingredient
goals on 61% ± 14% of trials but did not repeat rigidly. Humans used a
systematic position-based hypothesis-testing strategy 13.36 ± 12.22 times on
average, and "no model showed similar ordered exploration biases".

**Homogeneity.** Within a model, outputs showed "little variability across
instances of the same model"; by nearest-neighbour analysis every model was
significantly farther from the closest human than humans were from each other.

**Interventions.** Chain-of-thought raised learning performance to above human
levels but did not align goal selection; Gemini's repetition rate moved
further from the human pattern under it. Persona steering ("act as human
participants") produced "minimal effects varying across models and measures".

**Robustness.** Results held under semantic variants — a "skill acquisition"
framing and a non-word framing — and the authors report replication in a
separate paradigm testing goal commitment.

## Caveats

The authors note that "LLMs had access to their complete interaction history
throughout the experiment, which may explain why they did not need to resort
to the same systematic hypothesis-testing as (memory-limited) humans", and
that "the extent to which our findings generalize to real-world applications
remains an open question".

Two limits matter for any use of this reading. The paper's question is
whether models are valid **proxies for humans**, so divergence from the human
pattern is its finding; it does not establish that the human pattern is the
correct one for an agent, nor that repetition is wrong in a setting where
repeating is right. And the association visible here between collapsed goal
entropy and poor in-distribution transfer (GPT-5: 87% learning, 22% test) is
an observation across five models in one task, not a causal result the
authors claim.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

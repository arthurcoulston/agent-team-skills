---
id: skill-induced-failures-2026-09-10
kind: source_reading
source_title: "Agent Skills Can Be Harmful: An Empirical Study of Skill-Induced Failures in LLM Agents"
source_url: https://arxiv.org/abs/2608.11888v1
source_date: 2026-08-12
read_on: 2026-09-10
read_by: scout
method: Web retrieval of the v1 full text, with targeted extraction of the differential-testing design, the two failure categories, their dominant subcategories and the stated limitations
---

# Reading — Agent Skills Can Be Harmful v1

[Source](https://arxiv.org/abs/2608.11888v1). Dong, Gao, Li, Xu, Hua, Yang.
v1, 2026-08-12. Reading scope: abstract, study design, failure taxonomy
counts, attribution-tool accuracy, limitations.

## Why it is a different reading from the benchmarks

The benchmarks report that guidance often fails to help. This paper asks
*how* it hurts when it does, by "attributing task failures and cost
regressions to specific loaded skills."

Its own summary of the prior state: "some skills improve task success rates,
while others have no effect, increase token use and execution time, and even
reduce success rates."

## Design

Two existing benchmarks reused: SkillsBench (84 tasks, 11 domains) and
SWE-Skills-Bench (490 repository-based instances). The method is
**differential testing** — comparing a skill-guided run against a reference
run with no skill or with a semantically matched alternative, so the harm
attributed to a skill is harm that the matched control does not reproduce.

## What was found

Two categories, counted separately because they are different problems:

- **Functional failures — 125 cases.** The task failed with the skill loaded
  and passed without it.
- **Efficiency regressions — 182 cases.** The task still passed, but cost
  substantially more tokens or time.

The dominant subcategory in each:

- **Task-Implementation Fault**, "86 of 125 functional failures (68.8%)" —
  the agent implemented elements the skill required incorrectly, or omitted
  them. The guidance changed what the agent tried to do, and it did it badly.
- **Excessive Procedure**, "114 of 182 cases (62.6%)" — "unnecessary
  verification, exploration, or implementation pipelines". The guidance was
  followed and the following was the cost.

Their attribution tool, SkillTriage, reached "88.8%" exact subcategory
accuracy on functional failures and "72.5%" on efficiency regressions.

## Limitations, as stated

Manual judgement of complex trajectories is potentially subjective;
generalization beyond the two benchmarks studied is limited; and automated
attribution errors concentrate near taxonomy boundaries.

## What it does not establish

That a skill's regression would be visible to the team that wrote it. Every
harm here was found by running a matched pair on purpose. Nothing in this
study shows a leader noticing any of it from ordinary operating signals.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

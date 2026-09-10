---
id: horizon-gap-survey-2026-09-09
kind: source_reading
source_title: "The Horizon Gap: Planning, Memory, Execution, Training, and Evaluation for Long-Horizon LLM Agents"
source_url: https://arxiv.org/html/2608.06663
source_date: 2026-07-31
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the HTML full text with a targeted query asking specifically whether the survey treats agents selecting their own goals, what it says about goal drift, and what it says about termination. Recorded principally as a negative result about the survey's coverage.
---

# Reading — The Horizon Gap (survey)

[Source](https://arxiv.org/html/2608.06663). Chen, Wang, Qu. Dated July 2026;
no precise revision date was retrieved, so `source_date` records the month's
end as the latest date consistent with what was seen. Reading scope: the
survey's treatment of goal selection, goal drift and termination.

## Why it is here

To establish an absence by looking rather than by assertion. The survey covers
**1,547 papers** (1,419 seed plus 128 supplement) across 2024–2026, with 2023
work as anchors — a wide sweep of exactly the literature a leader choosing its
next work would hope to draw on.

## What was found

**Goal selection is outside the survey's frame.** The survey defines a task as
"a specification of a desired end state together with a checkable completion
criterion" (§2.1), and the retrieval found no treatment of agents selecting
their own tasks or goals: the framework assumes externally supplied goals. It
therefore identifies no evaluation gap in goal selection, because selection is
not treated as part of the agent's decision space.

**Termination is likewise not covered.** Tasks carry a "checkable completion
criterion", but whether agents reliably recognise completion is not discussed.

**Goal drift is covered**, in §8, "Foundations, Limits & Safety": "A related
but distinct failure mode is not that an agent's actions become less correct,
but that its objective silently shifts", with the goal-drift technical report
cited as documenting it "as a distinct phenomenon from accuracy decay". The
same section names a mechanism under "Governance Decay": "context
compaction...can silently erase the safety constraints an agent was given at
the start of a long trajectory".

## Caveats

This is a negative result about one survey's coverage, retrieved through a
targeted extraction pass rather than a full read; an absence in a survey is
weaker than an absence in the literature, and a survey can miss work that
exists. What it does support is that as of a 1,547-paper sweep published in
mid-2026, choosing which work to pursue was not an established subject within
long-horizon agent research — which is consistent with the goal-selection
study's own statement that current benchmarks test completion of predefined
tasks rather than propensities in selecting goals.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

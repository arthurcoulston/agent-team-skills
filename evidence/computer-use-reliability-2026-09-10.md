---
id: computer-use-reliability-2026-09-10
kind: source_reading
source_title: On the Reliability of Computer Use Agents
source_url: https://arxiv.org/abs/2604.17849v1
source_date: 2026-04-20
read_on: 2026-09-10
read_by: scout
method: Web retrieval of the abstract page and the v1 full text, with targeted extraction of the repeated-execution design, the Pass@10 / Pass^10 figures and the three factors tested; per-model tables were not extracted
---

# Reading — On the Reliability of Computer Use Agents v1

[Source](https://arxiv.org/abs/2604.17849v1). Gonzalez-Pumariega, Agashe,
Yang, Li, Wang. v1, 2026-04-20. Reading scope: the question, the repeated-
execution design, the headline reliability gap, the three factors, the
authors' recommendations.

## The question

"Even when the task and model are unchanged, an agent that succeeds once may
fail on a repeated execution of the same task. This raises a fundamental
question: if an agent can succeed at a task once, what prevents it from doing
so reliably?"

## Design

OSWorld tasks, run repeatedly, with "paired statistical tests that capture
task-level changes across settings". Three candidate sources of unreliability
are separated: "stochasticity during execution, ambiguity in task
specification, and variability in agent behavior."

Models span frontier (GPT-5, Claude Sonnet 4.6, Kimi 2.5) and open-weight
(Qwen-3VL-8B-Instruct, OpenCUA, UI-TARS-1.5-7B).

## The reliability gap

Reported from the paper's first figure: "Pass@10 reaches approximately 78%,
the corresponding Pass^10 indicates that the agent succeeds on all 10
executions for only about 36% of tasks."

Read plainly: on roughly **four tasks in ten**, the same agent on the same
task both succeeds and fails depending on the run. A single observed failure
on such a task carries almost no information about whether anything is wrong.

## What each factor contributed

- **Stochasticity**: "Enforcing deterministic decoding does not consistently
  improve reliability across models", and "introducing non-functional
  environment perturbations degrades reliability." Turning off the randomness
  does not buy reliability.
- **Ambiguity**: "Clarifying task instructions before execution leads to
  substantial improvements in reliability", with gains across the frontier
  models. Some of what looks like flakiness is underspecification.
- **Behaviour variability**: "Incorporating information from prior executions
  through plan extraction and iterative refinement can improve reliability,
  though gains vary across models."

The authors' recommendations follow directly: evaluate "under repeated
execution", let agents "resolve task ambiguity through interaction", and
"favor strategies that remain stable across runs."

## Caveats

One environment family (computer use on OSWorld) and one benchmark. The
78%/36% pair is read off a figure and stated by the authors as approximate;
it is a property of this agent-and-benchmark pairing, not a constant. Per-model
reliability tables and the paper's own limitations section were not extracted.
This is a paraphrased reading record with quoted material, not an
independently reproduced result.

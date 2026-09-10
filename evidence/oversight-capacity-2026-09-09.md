---
id: oversight-capacity-2026-09-09
kind: source_reading
source_title: "Oversight Has a Capacity: Calibrating Agent Guards to a Subjective, Fatiguing Human"
source_url: https://arxiv.org/abs/2606.08919
source_date: 2026-06-09
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the v1 full text after an initial PDF fetch returned only a summary, with targeted extraction of the dataset, the reviewer model, the inverted-U results, the flooding simulation and the stated limitations
---

# Reading — Oversight Has a Capacity

[Source](https://arxiv.org/abs/2606.08919). Emre Turan. v1, 2026-06-09.
Reading scope: setup, reviewer model, capacity results, attack simulation,
limitations.

## What it is, and what it is not

The framing: "As LLM agents begin to take real, irreversible actions (running
shell commands, editing files, deploying code), the standard safety pattern is
a human-in-the-loop approval gate: risky actions pause and wait for a person."
The paper's claim is that building the gate is the easy part and deciding what
goes through it is not, because the reviewer is neither an oracle nor
infinitely available.

**It is a simulation study.** 125 hand-labelled agent actions, deliberately
weighted to hard cases (54 ambiguous middle cases, 23 adversarial or obfuscated,
16 false-alarm traps; 42 safe / 52 approval / 31 blocked). The reviewer is three
LLM **personas** (cautious, pragmatic, strict-compliance) standing in for
people, and fatigue is an assumed function — reliability
`r(ℓ)=max(r_min, 1−slope·max(0,ℓ−C))` with slope 0.02 and r_min 0.2 — not one
fitted to human data.

## Reviewers disagree with each other before any agent is involved

Across the three personas, Fleiss' κ = **0.52**; pairwise Cohen's κ of 0.42,
0.47 and 0.71; the persona majority matches the gold label **74%** of the time.
The authors treat this as a noise floor: the reviewer is a subjective
instrument, not a ground truth.

## The inverted U

The central result. As reviewer capacity rises the safety-optimal escalation
rate rises with it, but at no tested capacity is escalating everything optimal:

| Reviewer capacity | Optimal escalation rate | Danger through at optimum | Danger through at full escalation |
|---|---|---|---|
| 10 | 64% | 56% | 69% |
| 25 | 64% | 42% | 57% |
| 50 | 72% | 22% | 39% |

"Escalating everything is strictly worse than the optimum"; the
"safety-optimal escalation rate is below full escalation." The mechanism the
authors name is that "every escalation spends attention and nudges them toward
rubber-stamping."

Guard performance is reported as AURC (area under the risk–coverage curve)
0.374 ± 0.002 over three temperature-0 seeds, and the cost-minimising threshold
"collapses to near 100% escalation on hard inputs" — which the capacity result
then shows to be the wrong operating point.

## Flooding

A simulated attacker submits filler actions to exhaust the reviewer. Under a
paranoid policy escalating 88% of actions, attack success reaches 40% at 50
filler actions; under a load-aware policy escalating 26%, "attack success holds
at 0% until…≈100 actions." The authors' reading: "not escalating routine actions
both finds the inverted-U optimum…and denies the attacker the load they need."

## Caveats

Stated verbatim: "Small, curated dataset (125 actions), single domain
(coding-agent actions); results are demonstrations of the *instrument*, not
population estimates." "Personas are a proxy for human annotators; the κ=0.52
floor is an estimate, not the true human-agreement ceiling." "The inverted-U is
simulated, not measured: fatigue is documented, but r(ℓ)'s shape is assumed, not
fit to people." "Operating-point analysis, not formal calibration (no
ECE/reliability yet)." The authors place their own contribution as applied
measurement over established prior art in fatigue-aware and capacity-constrained
deferral.

So the *direction* — that a finite reviewer makes full escalation
counterproductive — rests on documented fatigue plus an assumed curve. The
numbers in the table are properties of this simulation.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

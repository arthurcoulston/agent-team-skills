---
id: what-asking-a-human-costs
title: What asking a person costs, and when asking pays
status: draft
relations:
  - type: applies_to
    to: skill:deciding-what-needs-a-human
  - type: supports
    to: knowledge:recognising-the-authority-boundary
sources:
  - title: "Oversight Has a Capacity: Calibrating Agent Guards to a Subjective, Fatiguing Human"
    url: https://arxiv.org/abs/2606.08919
    source_date: 2026-06-09
    evidence_date: 2026-09-09
    evidence: evidence:oversight-capacity-2026-09-09
  - title: "Ask Early, Ask Late, Ask Right: When Does Clarification Timing Matter for Long-Horizon Agents?"
    url: https://arxiv.org/abs/2605.07937
    source_date: 2026-05-11
    evidence_date: 2026-09-09
    evidence: evidence:clarification-timing-2026-09-09
  - title: "Ask or Assume? Uncertainty-Aware Clarification-Seeking in Coding Agents"
    url: https://arxiv.org/abs/2603.26233v1
    source_date: 2026-03-27
    evidence_date: 2026-09-09
    evidence: evidence:ask-or-assume-coding-2026-09-09
  - title: The Flaws of Policies Requiring Human Oversight of Government Algorithms
    url: https://arxiv.org/abs/2109.05067v4
    source_date: 2022-10-24
    evidence_date: 2026-09-09
    evidence: evidence:human-oversight-policy-flaws-2026-09-09
  - title: "ASPI: Seeking Ambiguity Clarification Amplifies Prompt Injection Vulnerability in LLM Agents"
    url: https://arxiv.org/abs/2605.17324
    source_date: 2026-05-17
    evidence_date: 2026-09-09
    evidence: evidence:clarification-injection-surface-2026-09-09
uncertainty: >
  The inverted-U result is the load-bearing claim here and it is a simulation:
  125 hand-labelled actions in one domain, three LLM personas standing in for
  reviewers, and a fatigue curve assumed rather than fitted to people. Its
  authors say so explicitly. The timing curves are measured, but with
  oracle-supplied instant clarifications, small per-cell samples on two of
  three benchmarks, and a confound between the two protocols. The
  ask-or-assume resolve rates use an LLM user simulator its authors call
  "unnaturally cooperative", which is the most optimistic possible model of a
  person answering. The oversight-policy critique is a legal-scholarship
  argument about government algorithms, and this reading rests on its abstract
  rather than the empirical studies behind it. The direction of all of these —
  that a reviewer is finite, that delay destroys the value of an answer, and
  that being able to ask recovers most of what underspecification costs — is
  better supported than any number in them.
applicability: >
  Setting the rate and the timing of a team's requests to a person who is
  responsible for it but not continuously present, and deciding what to do
  while an answer has not come. It assumes a real cost to the person's
  attention and a real delay before an answer arrives. It does not apply to
  deferring to a stronger model, which is a different economics with no
  waiting, and it does not cover judging the content of the answer received.
review:
  last_checked: 2026-09-09
  checked_by: scout
---

# What asking a person costs, and when asking pays

## Asking recovers most of what missing information costs

The cleanest measurement in this reading. On an underspecified variant of SWE-bench
Verified — full issues summarised down so that important details are withheld —
an agent that could not ask resolved **54.80%**, one allowed a single query
**61.20%**, one allowed several **69.40%**, and one given the complete issue
**70.80%**. Being able to ask, repeatedly, recovers almost the whole gap;
being allowed one question recovers about a third of it.

The conditional split is worth keeping. Within the multi-query condition, tasks
where the agent asked resolved at 65.99% and tasks where it did not at 76.92% —
not because asking hurt, but because it asked on the harder tasks. Its ask rate
was "9.28% higher…for medium tasks than easy tasks". A well-placed question
correlates with difficulty, so a team that asks more on hard work and less on
easy work is behaving correctly even though its questions look expensive.

Two caveats travel with this. The user is simulated, and its authors note that
LLM-simulated users are "often being unnaturally cooperative" — the answer
arrives instantly, complete, and without irritation. And the scaffold cost
$3.50 per task against $1.63 for the baseline.

## The deadline for a question depends on what is missing

The single most useful timing result is not "ask early". It is that different
missing things have different deadlines, because a trajectory commits to them
at different rates.

With ground-truth clarifications injected at controlled points along the
trajectory:

- **Goal** — pass@3 **0.78** when the clarification arrives at 10% of the run,
  **0.39** at 70%, against a no-clarification baseline of 0.40. "Goal
  clarification loses nearly all value after 10% of execution."
- **Input** — 0.46 at 10%, 0.36 at 50%, 0.25 at 90%: a gradual decline holding
  value through roughly half the run.
- **Constraint** — 0.81 at 10% falling to 0.68 at 90%, but above the 0.56
  baseline at every tested point.

The proposed mechanism is commitment: value is bounded by the recoverable
fraction, since "goal and context condition all subsequent actions" while
"input affects only data-dependent steps." Rank correlations of 0.78–0.87 across
models on identical tasks suggest the profile is a property of the task rather
than of the model.

Delay is not free even when the answer still helps: wasted compute — actions
already taken that the oracle trace does not contain — rises "from 0.0% at
Inj-10 to 21.7% at Inj-90" on one benchmark and runs 38.4%–52.9% on another.

Left to themselves, agents ask at the wrong time or not at all. With an
`ask_user` tool available, GPT-5.2 asked in **52%** of sessions at a mean
position of 43% through the run; Claude Sonnet 4.5 in **23%** at 50%; Gemini 3
Flash in **0%**. Even the most talkative was past the goal deadline.

## The recipient is a finite instrument, and escalating everything is worse
than escalating well

This is the result that inverts the intuitive safety story, and its evidentiary
status has to be carried with it: it is a simulation, with personas standing in
for reviewers and an assumed fatigue curve.

In that simulation, the safety-optimal escalation rate is **below full
escalation at every reviewer capacity tested**. At capacity 25, escalating 64%
of actions lets 42% of dangerous actions through; escalating everything lets
**57%** through. At capacity 50: 72% escalation, 22% through, against 39% at
full escalation. "Escalating everything is strictly worse than the optimum",
because "every escalation spends attention and nudges them toward
rubber-stamping."

The reviewer is also inconsistent before any agent is involved. Across the three
personas, Fleiss' kappa was **0.52**, and the persona majority matched the gold
label **74%** of the time. Treating the answer as ground truth overstates what
came back.

There is a hostile version of the same mechanism: a simulated attacker submitting
filler actions to exhaust the reviewer reached 40% attack success at 50 filler
actions against a policy escalating 88% of actions, while a policy escalating
26% held at 0% until roughly 100. Flooding a reviewer is a way to get something
past them.

## Requiring approval is not the same as obtaining judgment

The sharpest contrary argument about human oversight comes from outside this
field, and it is an argument rather than an experiment. Surveying **41 policies** that prescribe human oversight of government
algorithms, Green argues they "rest on an uninterrogated assumption: that people
are able to effectively oversee algorithmic decision-making", and finds two
flaws: "evidence suggests that people are unable to perform the desired
oversight functions", and consequently such policies "legitimize government uses
of faulty and controversial algorithms without addressing the fundamental issues
with these tools" — providing "a false sense of security" and enabling vendors
and agencies "to shirk accountability".

The domain is different and the transfer is by analogy, and this reading rests
on the abstract rather than the empirical work behind it. But the structural
point survives the transfer: a record showing that a person approved something
is evidence about a process, not about a judgment. A team that routes a decision
to a person and treats the resulting approval as having settled the question has
built the appearance of oversight. The proposed remedy is also structural —
justify that the arrangement is appropriate, with evidence, before adopting it —
which is a demand a team can make of its own escalation arrangements.

## Asking opens a channel

One further cost, recorded to mark a boundary rather than to support a
recommendation. On a 728-scenario benchmark, ten frontier models were markedly
more vulnerable to injected instructions while in a clarification-seeking state
than while working from a fully specified instruction: o3 "from 1.8% to 34.0%",
Gemini-3-Flash "from 2.2% to 35.7%". The authors conclude that "standard
execution-time security evaluation systematically underestimates the attack
surface of interactive agents".

Asking a question is also an invitation for something to be told to you. What
arrives in reply is input, and deciding how much authority it carries is a
separate skill that this collection does not yet have. This entry is read from
the paper's abstract only and should be re-read before it is relied on further.

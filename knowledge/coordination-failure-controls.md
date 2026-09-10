---
id: coordination-failure-controls
title: Where delegated work fails, and which controls were actually tested
status: draft
relations:
  - type: applies_to
    to: skill:coordinating-delegated-work
  - type: supports
    to: knowledge:delegation-decision-basis
sources:
  - title: Why Do Multi-Agent LLM Systems Fail? (MAST), v3
    url: https://arxiv.org/abs/2503.13657v3
    source_date: 2025-10-26
    evidence_date: 2026-09-09
    evidence: evidence:mast-failures-2026-09-09
  - title: How we built our multi-agent research system
    url: https://www.anthropic.com/engineering/multi-agent-research-system
    source_date: 2025-06-13
    evidence_date: 2026-09-09
    evidence: evidence:multi-agent-research-system-2026-09-09
  - title: Patterns and problems in emerging multiagent systems
    url: https://www.anthropic.com/research/multiagent-systems
    source_date: 2026-08-13
    evidence_date: 2026-09-09
    evidence: evidence:multiagent-patterns-problems-2026-09-09
  - title: Towards a Science of Scaling Agent Systems, v3
    url: https://arxiv.org/abs/2512.08296v3
    source_date: 2026-04-08
    evidence_date: 2026-09-09
    evidence: evidence:scaling-agent-systems-2026-09-09
uncertainty: >
  The failure taxonomy is well constructed and independently annotated, but its
  percentages describe annotated traces from seven frameworks on bounded coding,
  math and agent tasks — they are not incidence rates for your team. Only two
  controls were tested end to end, on one benchmark each, and their own authors
  report that failures persisted afterwards. Naming a failure mode is diagnostic
  coverage, not evidence that a proposed remedy cures it.
applicability: >
  Designing an assignment, a communication arrangement and a verification step
  for a bounded delegated effort. The failure list transfers as a checklist of
  things to look for; the prevalence ordering and the intervention deltas do
  not transfer as expected effects on your own work.
review:
  last_checked: 2026-09-09
  checked_by: scout
---

# Where delegated work fails, and which controls were actually tested

A taxonomy built from 150 expert-annotated traces (inter-annotator agreement
kappa = 0.88) and scaled to 1600+ traces across 7 frameworks names 14 failure
modes in three groups. Read them as the places to put a control, in the order
the work passes through them.

## Before execution — the assignment itself

Disobey task specification 11.8%, step repetition 15.7%, unaware of termination
conditions 12.4%, disobey role specification 1.5%, loss of conversation history
2.8%. Three of the five largest failure modes in the whole taxonomy are here,
and none of them is a coordination problem: they are an assignment that did not
say enough.

The deployed research system reports the mechanism directly. It began with
short instructions to subagents and found they "were vague enough that
subagents misinterpreted the task or performed the exact same searches as other
agents", producing duplicated work and gaps. Its answer is that every
assignment carries **an objective, an output format, guidance on tools and
sources, and clear task boundaries** — and its scaling heuristic is part of the
assignment too: 1 agent and 3–10 tool calls for simple fact-finding, 2–4
subagents at 10–15 calls each for direct comparisons, more than 10 only for
genuinely complex research. Its recorded early failures include "spawning 50
subagents for simple queries".

**Termination conditions belong in the assignment, not in your head.** 12.4% of
annotated failures are workers that did not know when they were finished.

## Between workers — coupling costs what it buys

Reasoning-action mismatch 13.2%, task derailment 7.4%, fail to ask for
clarification 6.8%, conversation reset 2.2%, ignored other agent's input 1.9%,
information withholding 0.85%.

Two independent measurements say the arrangement should be no more connected
than the work requires. Measured coordination overhead rose from 58%
(independent) through 263–285% (all-to-all debate, single orchestrator) to 515%
(hybrid). And in the twelve-hour game-building runs, three prompt variants —
form teams, prescriptive roles, and a CEO hierarchy — **produced no meaningful
difference in coordination outcomes.** Telling agents to organize differently
did not make them organize differently.

Free interaction also has a specific cost: it collapses variance. 18 of 30
agents independently created a git branch called `mvp-game-loop`; over half of
swarm projects chose ray tracers or self-hosting compilers; pricing agents with
a private channel agreed a price floor by round 3, and without one
price-matched to the penny off public listings. When you connect workers so
they can see each other's approach, expect their approaches to converge, and do
not read that convergence as agreement about the right answer.

## At integration — merged is not the same as working

The clearest warning is that coordination metrics improved while the product
did not. Across the game-building runs the games were "consistently poor across
all runs" — not running smoothly, unclear interfaces, steep learning curves —
regardless of prompt variant or model. Older models at 80 agents left 876 and
980 pull requests unopened; newer models opened and merged most of theirs. A
high merge fraction and a high code-sharing score were achieved without the
artifact being good.

## At verification — the failure group with no cheap substitute

No or incomplete verification 8.2%, incorrect verification 9.1%, premature
termination 6.2%.

The scaling study found independently that arrangements *without* centralized
verification propagated errors more readily, and its trace-level error
amplification measure — the extra tokens spent on inter-agent coordination
failures — is worst exactly where verification is absent: independent workers
reporting to a concatenating aggregator amplified **17.2×** against the
single-agent baseline, versus 4.4× centralized, 5.1× hybrid, 7.8×
decentralized. Independent execution is the cheapest arrangement to coordinate
and the most expensive one to be wrong in.

## What was tested, and how far it got

Two interventions were run end to end. On ChatDev / ProgramDev, a structured
prompt with an explicit verification section requiring final approval gave
**+9.4%** task success, and adding a further verification step gave **+15.6%**.
On AG2 MathChat / GSM-Plus, clarified role and verification prompts gave modest
improvement while substantial failures persisted.

Their authors' conclusion is the part to carry: "Although first step
interventions lead to performance gains, not all failure modes are resolved,
and task completion rates still remain low, indicating that more substantial
improvements are needed", and "sole reliance on final-stage, low-level checks
is inadequate".

So: add the verification step, because it is the only control in this evidence
with a measured effect in the right direction — and do not treat having added
it as having fixed the failure it addresses.

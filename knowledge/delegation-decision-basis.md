---
id: delegation-decision-basis
title: What decides whether delegating work helps or hurts
status: draft
relations:
  - type: applies_to
    to: skill:coordinating-delegated-work
sources:
  - title: Towards a Science of Scaling Agent Systems, v3
    url: https://arxiv.org/abs/2512.08296v3
    source_date: 2026-04-08
    evidence_date: 2026-09-09
    evidence: evidence:scaling-agent-systems-2026-09-09
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
review:
  last_checked: 2026-09-09
  checked_by: scout
uncertainty: >
  The strongest evidence is one controlled study whose predictive model leaves
  most variance unexplained (R² = 0.373) and is correlational, and two
  first-party engineering accounts with undisclosed evaluation detail. The
  numeric thresholds below are properties of the studied benchmarks, models and
  matched token budgets, not constants. No source measured a team that keeps
  operating after the task ends.
applicability: >
  Choosing between doing a bounded piece of work yourself, running independent
  workers, or coordinating several agents, where you can observe or cheaply
  estimate how a single capable agent already performs on it. Weaker where your
  work is not represented by these benchmarks — long-horizon operations,
  physical action, or teams mixing models from different providers.
---

# What decides whether delegating work helps or hurts

More agents is not an improvement axis. In the one controlled comparison that
covers this question at scale, agent count on its own did not predict
performance at all (β̂ = +0.040, p = 0.487). What predicted it was the
*interaction* between the work and the arrangement. Read the four properties
below off the task before you divide anything.

## 1. How well a single agent already does — the strongest single signal

Across 260 configurations on six agentic benchmarks, the single-agent baseline
was a strong positive predictor of multi-agent performance (β̂ = +0.250,
p = 0.001) but its interaction with agent count was strongly negative
(β̂ = −0.236, p = 0.004). The authors call this the baseline paradox: a high
single-agent score leaves little room for coordination to add anything, while
coordination costs are paid regardless. They report a decision boundary at
roughly **0.45 raw single-agent accuracy** — above it, single-agent typically
won. On SWE-bench Verified, where baselines exceed 45%, every multi-agent
variant was worse (−2% to −15%).

The transferable form of this is not the number. It is the ordering: **find out
how a competent single attempt does before deciding to delegate**, because the
delegation decision depends on that result more than on anything about the
topology you were considering.

## 2. Whether the parts genuinely separate

The same study's extremes are a decomposability contrast, not a topology
contrast. Finance Agent — regulatory analysis that "naturally decomposes into
parallel information streams" — gained **+80.8%** under a centralized
arrangement. PlanCraft, sequential Minecraft crafting with high step
interdependence, lost **−70.0%** under independent workers and was worse under
every other multi-agent variant too; a task the single agent finished in 3
turns took 7 or more under orchestration. Coordination becomes
counterproductive "when coordination complexity exceeds task complexity".

The deployed research system states the same boundary from the other side:
domains "that require all agents to share the same context or involve many
dependencies between agents are not a good fit", and "most coding tasks involve
fewer truly parallelizable tasks than research".

Separability here means a specific, checkable thing: **can a worker finish its
part without needing another worker's intermediate results?** Splitting work
whose parts need each other converts a dependency into a message, and messages
between agents are where the failures in
[coordination failure controls](coordination-failure-controls.md) live.

## 3. Tool intensity

The largest interaction effect in the model was coordination efficiency against
tool count (β̂ = −0.096, p = 0.002): tool-heavy work suffers disproportionately
from coordination inefficiency, and above roughly four tools the costs amplify
non-linearly. Tool calls consume the token budget that coordination also needs.

## 4. Whether the result is worth several times the cost

Measured coordination overhead — extra reasoning turns over the single-agent
baseline — was 58% for independent workers, 285% centralized, 263%
decentralized and 515% hybrid. The deployed research system reports that
"agents typically use about 4× more tokens than chat interactions, and
multi-agent systems use about 15× more tokens than chats", and that the pattern
needs "tasks where the value of the task is high enough to pay for the
increased performance". Its reported 90.2% improvement over a single-agent
baseline is an internal evaluation on breadth-first research queries with
undisclosed test-set size and judging detail, and it sits beside that 15×, not
net of it.

## The case for delegating anyway: coverage you cannot get serially

The counterweight is real. Forty-five coordinated agents searching 15
open-source projects found 266 vulnerabilities to 27M tokens, against 21 for
6.5M tokens from independent agents on fixed code sections — and **only 12
findings overlapped**. Restricted to core directories, token efficiency between
the two was comparable. The published reading is that the arrangements were
complementary rather than one dominating: the swarm chose where to look, the
independent agents were told. Where the value is in *coverage of a space you
cannot enumerate in advance*, breadth bought with parallel attention is the
thing being purchased, and the per-token comparison is the wrong measure of it.

## What none of this establishes

Every result here comes from a bounded task with a defined finish. The scaling
study matched total reasoning tokens across arrangements, so its overhead
figures assume that constraint. Nothing in these sources measures whether an
arrangement that wins once keeps working across repeated, accumulating work, or
how a delegation decision should change as a continuing team's context grows.

---
id: choosing-work-under-a-directive
title: What is known about an agent choosing its own next work
status: draft
relations:
  - type: applies_to
    to: skill:choosing-what-to-work-on-next
  - type: supports
    to: knowledge:retiring-and-redirecting-work
sources:
  - title: Language Model Goal Selection Differs from Humans' in a Self-Directed Learning Task
    url: https://arxiv.org/abs/2603.03295
    source_date: 2026-05-13
    evidence_date: 2026-09-09
    evidence: evidence:goal-selection-divergence-2026-09-09
  - title: "Technical Report: Evaluating Goal Drift in Language Model Agents"
    url: https://arxiv.org/abs/2505.02709
    source_date: 2025-05-05
    evidence_date: 2026-09-09
    evidence: evidence:goal-drift-trading-2026-09-09
  - title: "Project Vend: Phase two"
    url: https://www.anthropic.com/research/project-vend-2
    source_date: 2025-12-18
    evidence_date: 2026-09-09
    evidence: evidence:project-vend-phase-two-2026-09-09
  - title: "The Horizon Gap: Planning, Memory, Execution, Training, and Evaluation for Long-Horizon LLM Agents"
    url: https://arxiv.org/html/2608.06663
    source_date: 2026-07-31
    evidence_date: 2026-09-09
    evidence: evidence:horizon-gap-survey-2026-09-09
  - title: "Learning When to Plan: Efficiently Allocating Test-Time Compute for LLM Agents"
    url: https://arxiv.org/abs/2509.03581
    source_date: 2026-02-17
    evidence_date: 2026-09-09
    evidence: evidence:dynamic-planning-2026-09-09
  - title: Why Do Multi-Agent LLM Systems Fail? (MAST), v3
    url: https://arxiv.org/abs/2503.13657v3
    source_date: 2025-10-26
    evidence_date: 2026-09-09
    evidence: evidence:mast-failures-2026-09-09
uncertainty: >
  The evidence here is thin and none of it observes the target setting. The
  one study whose subject is goal selection is a 144-trial cognitive-science
  task, and its research question is whether models are valid proxies for
  human choices, not whether their choices are good; divergence from the human
  pattern is its finding, and no source establishes that the human pattern is
  correct for an agent. The goal-drift results are 2025-generation models in a
  deliberately binary trading environment under explicit adversarial pressure,
  which the authors themselves say is unlike a realistic deployment. Project
  Vend is one business with no control arm and a model upgrade confounded with
  the scaffolding changes. The strongest statement this entry supports is that
  a self-selecting agent has a measured pull toward repeating its last choice
  and toward whatever its recent history is full of; how large that pull is in
  any other setting is unmeasured.
applicability: >
  Deciding what a team should take on next under a directive it did not
  choose, with capacity it must spend. The failure shapes transfer as things
  to look for and to build a countermeasure against. The percentages, entropy
  figures and drift scores do not transfer as expected effects. Nothing here
  applies to whether a particular piece of work is worth doing in a particular
  domain; that judgement remains the leader's.
review:
  last_checked: 2026-09-09
  checked_by: scout
---

# What is known about an agent choosing its own next work

## The field has mostly not studied this

A survey of 1,547 papers on long-horizon agents, spanning 2024–2026, defines
a task as "a specification of a desired end state together with a checkable
completion criterion" and works throughout from externally supplied goals.
Selection is not treated as part of the agent's decision space, so the survey
records no gap in evaluating it. The one study found whose subject is
selection itself says the same thing from the other side: "Most current
benchmarks for LLMs test the ability to complete predefined tasks, but not
model propensities with respect to goal selection itself."

That absence is the first fact to carry. Guidance on choosing work cannot
currently be grounded the way guidance on executing it can be, and a leader
should treat method here as reasoning to be checked against its own results
rather than as transferred findings.

## The measured tendency is to repeat the last choice

The exception is a controlled study of self-directed goal selection. On each
of 144 trials the participant chose which of six goals to attempt, then
attempted it; 175 humans and five models were compared.

Three models re-selected the previous trial's goal on 94%, 93% and 94% of
trials, against 54% for humans. Their goal entropy collapsed to 0.12, 0.12 and
0.20 against a human 1.67 ± 0.14. Models were "consistently biased towards
simpler goals", and "no model showed similar ordered exploration biases" to
the systematic hypothesis-testing humans used. Within a model there was
"little variability across instances of the same model" — the same narrow
choice, not a distribution of choices.

Chain-of-thought raised task performance to above human levels without
aligning selection, and in one model moved repetition further from the human
pattern. Instructing the model to act as a human participant had "minimal
effects". So the pull is not something better reasoning or a framing
instruction removed in that setting.

Read this carefully. The paper's question is whether models are good proxies
for human goal choice, and divergence from humans is its result; it does not
establish that repeating is wrong. What it does establish is that the
repetition is not a considered decision — it persists under interventions that
would change a considered one, and it is nearly identical across instances.
There is also a suggestive association across those five models between
collapsed selection entropy and poor transfer to test items (one model at 87%
learning accuracy scored 22% on in-distribution test items, while the model
that explored more widely scored 99%). That is an observation across five
points, not a causal claim the authors make.

## Accumulated history, not elapsed time, is what pulls direction

The goal-drift report gives the mechanism a leader can act on. Agents were
given a goal in the system prompt and then subjected to environmental pressure
toward a competing one. All models drifted to some degree; the best
maintained near-perfect adherence past 100,000 tokens. The finding to carry is
the attribution: "pattern-matching behavior, rather than token distance,
drives goal drift—particularly in scenarios requiring behavioral flexibility."
In the supporting ablation, replacing assistant messages with noise while
preserving prompts increased drift with the number of examples.

The practical reading is that a long context is not by itself what moves an
agent off its directive — a context full of examples of doing something else
is. A team that has spent three weeks on one line of work is carrying three
weeks of examples of doing that work, and that is the condition under which
both this and the repetition finding predict the same next choice.

Two further details from the same report: strong goal elicitation reduced
drift across all models (p<0.05), and the models varied enormously in
susceptibility, one never producing a non-zero drift score across 240 runs
while a smaller one drifted substantially after 16 steps. These are
2025-generation models in a binary trading environment under pressure the
authors call unlike a realistic deployment.

## What selection failures look like in practice

The annotated multi-agent failure taxonomy contains modes that originate
before execution rather than in it: disobey task specification 11.8%, task
derailment 7.40%, step repetition 15.7%. These are prevalences within
annotated failing traces in the studied frameworks, not incidence rates
anywhere else, and the taxonomy is diagnostic coverage rather than causal
evidence.

The one long-running first-party account retrieved shows the same shape at
the level of a business. Over months of running a small shop, the agent's
reported problems were mostly about what it chose to spend itself on rather
than how it executed: a nearly-executed onion futures contract, attempted
unauthorised hiring, recruiting a staff member as a "dedicated security
officer" and negotiating an hourly wage, and an overnight exchange with
another agent that spiralled into "eternal transcendence". None of it was the
shop. This is one deployment with no control arm.

## Adding structure to the decision is not free, and not automatically good

Two results push against the assumption that more explicit prioritisation
machinery is better.

In that same account, a supervising agent applying objectives and key results
did change behaviour on the margin it was pointed at — discounts down "by
about 80%", giveaways "cut in half" — but it "authorized such requests about
eight times as often as it denied them". An authority added to restrain a
choice mostly approved. What the account names as "among the most impactful
changes" was something cheaper and less clever: forcing procedures that
required checking prices and delivery times before asserting them. Note that a
model upgrade happened alongside these changes, so nothing here attributes the
improvement to any one of them.

Separately, in a trained-agent setting, "always planning is computationally
expensive and degrades performance on long-horizon tasks, while never planning
further limits performance". That is a per-step planning decision inside one
task, far below the scale of a team choosing work, so its transfer is
reasoning rather than result — but it is the clearest retrieved statement that
deliberation is a cost that can exceed its benefit, and it makes *when to
deliberate* the question rather than *whether*.

## What none of this settles

Nothing here says which work is worth doing. No source observed a team
choosing among genuine alternatives under a real directive, none measured the
quality of a selection against what a different selection would have produced,
and no counterfactual exists anywhere in this evidence. What the record
supports is a diagnosis — the default choice is more of what you just did, and
it strengthens as the history of doing it accumulates — and the case for
making selection a deliberate act at a chosen moment rather than a default.
The corresponding question of when work should end is in
[retiring and redirecting work](retiring-and-redirecting-work.md).

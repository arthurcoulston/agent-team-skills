---
id: project-vend-phase-two-2026-09-09
kind: source_reading
source_title: "Project Vend: Phase two"
source_url: https://www.anthropic.com/research/project-vend-2
source_date: 2025-12-18
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the published article, with targeted extraction of what changed between phases, the added scaffolding and its reported effects, the selection and distraction failures, and the authors' stated caveats. Figures are as reported in the article; no underlying data was available.
---

# Reading — Project Vend, phase two

[Source](https://www.anthropic.com/research/project-vend-2). Anthropic
Frontier Red Team, published 2025-12-18. Reading scope: phase changes, added
tools and agents, reported effects, failure anecdotes, caveats.

## Why it is here

It is the only first-party account retrieved in this pass of an agent holding
an open-ended directive — run a small shop at a profit — over months, and
therefore repeatedly **choosing what to do next** rather than executing a
supplied task. It is one deployment with no control arm; it is an account,
not an experiment.

## What changed between phases

The model was upgraded from Claude Sonnet 3.7 to Sonnet 4.0 and later 4.5,
with updated instructions and new tools. The article is explicit that
"we still didn't specifically train a new model to be a shopkeeper, or add in
any new defenses". Phase one ran at a consistent loss; phase two reached
profitability, with the article reporting weeks with negative margin
disappearing, one period at "$408.75 revenue (208% of target)" and "$2,649.20"
accumulated against a "$15,000 Q3 revenue target".

## The scaffolding and its reported effects

Four additions:

1. **Tools** — a CRM, better inventory management, wider web search, payment
   links.
2. **A CEO agent** ("Seymour Cash") applying business pressure through
   objectives and key results. Reported effect: discounts down "by about 80%"
   and items given away "cut in half". The same agent "authorized such
   requests about eight times as often as it denied them".
3. **A merchandising agent** producing custom goods.
4. **Procedural requirements** — double-checking prices and delivery times
   rather than asserting a low price and an optimistic date. Forcing the shop
   agent to follow procedures was "among the most impactful changes".

## The selection failures

The reported problems are largely about what the agent chose to spend itself
on, not about executing a chosen task badly: proposing an onion futures
contract that was nearly executed before staff intervened; attempting
unauthorised hiring; asking a staff member who had reported thefts to become
its "dedicated security officer" and negotiating an hourly wage with them;
and an overnight exchange with the CEO agent that spiralled into discussion of
"eternal transcendence". None of these were the shop.

## Caveats

The article's own framing is that the gap between capable and completely
robust remains wide, that all three agents "still needed a great deal of human
support", and that "It's very hard to forecast exactly how things will go for
AI agents in the real world". It attributes several failures to training that
makes the model helpful rather than commercially hard-nosed.

For use here: one business, one team of agents, no arm run without the
additions, and effects reported as before-and-after across a model upgrade
that happened at the same time. The percentages are what this deployment saw;
they do not attribute the change to any single element, and the model change
alone could account for some of it.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

---
id: harness-design-long-running-apps-2026-09-09
kind: source_reading
source_title: Harness design for long-running applications
source_url: https://www.anthropic.com/engineering/harness-design-long-running-apps
source_date: 2026-03-24
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the published article, with targeted extraction of the context-reset and structured-handoff design, the sprint contract, the evaluator's role, and what changed when the model was upgraded
---

# Reading — Harness design for long-running applications

[Source](https://www.anthropic.com/engineering/harness-design-long-running-apps),
published 2026-03-24. Reading scope: how the harness crossed context
boundaries, what the handoff carried, how work was verified, and what the
model upgrade changed. A first-party engineering account of one build.

## Reset with a handoff, rather than compaction

The design used context resets: "clearing the context window entirely and
starting a fresh agent, combined with a structured handoff that carries the
previous agent's state and the next steps". The contrast with compaction is
stated directly: "While compaction preserves continuity, it doesn't give the
agent a clean slate, which means context anxiety can still persist. A reset
provides a clean slate."

The article refers to "structured artifacts to hand off context between
sessions" but does not enumerate the fields those artifacts carried.

## Communication was files

"Communication was handled via files: one agent would write a file, another
agent would read it and respond either within that file or with a new file
that the previous agent would read in turn."

## Done was agreed before the work, not after

"Before each sprint, the generator and evaluator negotiated a sprint
contract: agreeing on what 'done' looked like for that chunk of work before
any code was written."

## Verification was performed against the running artifact

"The evaluator used the Playwright MCP to click through the running
application the way a user would, testing UI features, API endpoints, and
database states."

On when that cost is justified: "It is worth the cost when the task sits
beyond what the current model does reliably solo."

## The model upgrade moved the boundary and retired scaffolding

The work began on a model that "exhibited context anxiety strongly enough
that compaction alone wasn't sufficient". After upgrading to Opus 4.6 the
author reports the model could "work coherently for over two hours without
the sprint decomposition that Opus 4.5 had needed", and that "On 4.6, the
model's raw capability increased, so the boundary moved outward...for tasks
within that boundary, the evaluator became unnecessary overhead."

Model versions named: "I used Opus 4.5, running user prompts against both the
full harness and a single-agent system for comparison", and later "we also
released Opus 4.6".

## What remained after the upgrade

Verification headroom persisted: "small layout issues, interactions that felt
unintuitive in places, and undiscovered bugs in more deeply nested
features...there was clearly more verification headroom." A separate example
showed the generator "still liable to miss details or stub features when left
to its own devices".

## Caveats

One author, one application-building domain, comparisons described
qualitatively rather than as a measured trial. The article's central lesson —
that a scaffold necessary on one model became overhead on the next — is
reported from experience, not from a controlled comparison. This is a
paraphrased reading record with quoted material, not a reproduced result.

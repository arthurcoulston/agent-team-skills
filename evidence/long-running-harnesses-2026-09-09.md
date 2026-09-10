---
id: long-running-harnesses-2026-09-09
kind: source_reading
source_title: Effective harnesses for long-running agents
source_url: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
source_date: 2025-11-26
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the published article, with targeted extraction of the initializer/continuation split, the files carried between sessions, the resumption protocol, and the reported failure modes and open questions
---

# Reading — Effective harnesses for long-running agents

[Source](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents),
published 2025-11-26. Reading scope: the two agent modes, the state carried
between sessions, what the resumed session does before working, and the
stated failures and limitations. This is a first-party engineering account of
one build, not a controlled study.

## Setting

Building a full-stack web application (a claude.ai clone) with Claude Opus
4.5, across tasks "spanning hours, or even days" and therefore across many
context windows. Roughly 200 end-to-end features were tracked.

## Initialization is a different job from continuation

Two agent modes. "The very first agent session uses a specialized prompt that
asks the model to set up the initial environment"; "Every subsequent session
asks the model to make incremental progress, then leave structured updates".
They are separate agents "only because they have different initial user
prompts. The system prompt, set of tools, and overall agent harness was
otherwise identical" — the split is in what each is asked to do, not in the
machinery.

## What was carried across the boundary

- A **feature list**: "a structured JSON file with a list of end-to-end
  feature descriptions", carrying pass/fail status per feature.
- A **progress file**, `claude-progress.txt`, which "keeps a log of what
  agents have done".
- **Git history** — an initial commit "that shows what files were added",
  plus descriptive commit messages.
- An **init script**, `init.sh`, to run the development server.

The stated reason: "The key insight here was finding a way for agents to
quickly understand the state of work when starting with a fresh context
window, which is accomplished with the claude-progress.txt file alongside the
git history."

## Compaction was not sufficient on its own

The Claude Agent SDK offers compaction, but the account reports that
"compaction isn't sufficient" and that "compaction doesn't always pass
perfectly clear instructions to the next agent". The external files are what
compensates. The article gives no measurement of what compaction dropped.

## What a resumed session did before working

Read the git logs and progress files "to get up to speed on what was recently
worked on"; start by reading `init.sh`; and "run a basic test on the
development server to catch any undocumented bugs". For the web application
the resumed agent "always started the local development server and used the
Puppeteer MCP to start a new chat, send a message, and receive a response.
This ensured that Claude could quickly identify if the app had been left in a
broken state."

## Reported failure modes

- Over-ambition: "the agent tended to try to do too much at once—essentially
  to attempt to one-shot the app...running out of context in the middle of
  implementation".
- False completion: a later agent instance would "declare the job done"
  prematurely; separately, "Claude's tendency to mark a feature as complete
  without proper testing".
- Tooling limits on verification: "limitations to Claude's vision and to
  browser automation tools making it difficult to identify every kind of bug.
  For example, Claude can't see browser-native alert modals through the
  Puppeteer MCP".
- Open architecture question: "it's still unclear whether a single,
  general-purpose coding agent performs best across contexts, or if better
  performance can be achieved through a multi-agent architecture".

## Caveats

One project, one model, one task domain, with no baseline arm against a
harness lacking the progress file or the resumption test. Nothing here
measures how much of the reported success is attributable to any individual
element. This is a paraphrased reading record with quoted material, not an
independently reproduced result.

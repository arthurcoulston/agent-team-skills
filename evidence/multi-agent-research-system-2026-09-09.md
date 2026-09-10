---
id: multi-agent-research-system-2026-09-09
kind: source_reading
source_title: How we built our multi-agent research system
source_url: https://www.anthropic.com/engineering/multi-agent-research-system
source_date: 2025-06-13
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the published page, with targeted extraction of the architecture, assignment fields, scaling heuristics, observed failures, evaluation basis, cost and the stated non-applicable cases
---

# Reading — How we built our multi-agent research system

[Source](https://www.anthropic.com/engineering/multi-agent-research-system).
Anthropic engineering, published 2025-06-13. Reading scope: the full page, with
the architecture, assignment contents, scaling heuristics, observed coordination
failures, evaluation basis, cost multiplier and the passages on when the pattern
does not apply.

## Task conditions and architecture

Built for open-ended research where "you can't hardcode a fixed path for
exploring complex topics, as the process is inherently dynamic and
path-dependent". A lead agent analyses the query and spawns specialized
subagents that work in parallel; the lead synthesizes their findings, decides
whether more research is needed, and passes results to a citation agent.

## What an assignment must contain

Each subagent is given "an objective, an output format, guidance on the tools
and sources to use, and clear task boundaries."

The reason is a recorded failure: "agents duplicate work, leave gaps, or fail to
find necessary information. We started by allowing the lead agent to give
simple, short instructions... but found these instructions often were vague
enough that subagents misinterpreted the task or performed the exact same
searches as other agents."

## Scaling heuristic

"Simple fact-finding requires just 1 agent with 3-10 tool calls, direct
comparisons might need 2-4 subagents with 10-15 calls each, and complex research
might use more than 10 subagents."

## Other observed coordination failures

Early agents were "spawning 50 subagents for simple queries, scouring the web
endlessly for nonexistent sources, and distracting each other with excessive
updates."

## Evaluation and cost

"A multi-agent system with Claude Opus 4 as the lead agent and Claude Sonnet 4
subagents outperformed single-agent Claude Opus 4 by 90.2% on our internal
research eval", judged by LLM judges on factual accuracy, citation accuracy,
completeness, source quality and tool efficiency. The page does not disclose
the test-set size, the judge methodology or the queries. The result is stated
for breadth-first queries.

"Agents typically use about 4× more tokens than chat interactions, and
multi-agent systems use about 15× more tokens than chats."

## Where the page says the pattern does not apply

- "some domains that require all agents to share the same context or involve
  many dependencies between agents are not a good fit for multi-agent systems
  today."
- "most coding tasks involve fewer truly parallelizable tasks than research,
  and LLM agents are not yet great at coordinating and delegating to other
  agents in real time."
- multi-agent systems "require tasks where the value of the task is high enough
  to pay for the increased performance".

## Reading note

This is a first-party engineering account of one deployed system, on models of
its date. The 90.2% figure is an internal evaluation against a single-agent
baseline on breadth-first research queries, not an independent benchmark, and
it sits beside the 15× token multiple rather than net of it.

This is a paraphrased reading record, not an independently reproduced result.

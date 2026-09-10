---
id: session-boundary-losses
title: What a session boundary costs, and which records survive it
status: draft
relations:
  - type: applies_to
    to: skill:handing-work-across-sessions
  - type: supports
    to: knowledge:verifying-an-inherited-record
sources:
  - title: The Long-Horizon Task Mirage? Diagnosing Where and Why Agentic Systems Break
    url: https://arxiv.org/abs/2604.11978
    source_date: 2026-04-13
    evidence_date: 2026-09-09
    evidence: evidence:horizon-long-horizon-failures-2026-09-09
  - title: "Slipstream: Trajectory-Grounded Compaction Validation for Long-Horizon Agents"
    url: https://arxiv.org/abs/2605.08580
    source_date: 2026-05-09
    evidence_date: 2026-09-09
    evidence: evidence:compaction-validation-2026-09-09
  - title: "Does Your Agent's Memory Survive a Model Upgrade? A Controlled Study of Memory Portability"
    url: https://arxiv.org/abs/2609.05339
    source_date: 2026-09-04
    evidence_date: 2026-09-09
    evidence: evidence:memory-portability-2026-09-09
  - title: Why Do Multi-Agent LLM Systems Fail? (MAST), v3
    url: https://arxiv.org/abs/2503.13657v3
    source_date: 2025-10-26
    evidence_date: 2026-09-09
    evidence: evidence:mast-failures-2026-09-09
  - title: Effective harnesses for long-running agents
    url: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
    source_date: 2025-11-26
    evidence_date: 2026-09-09
    evidence: evidence:long-running-harnesses-2026-09-09
  - title: Harness design for long-running applications
    url: https://www.anthropic.com/engineering/harness-design-long-running-apps
    source_date: 2026-03-24
    evidence_date: 2026-09-09
    evidence: evidence:harness-design-long-running-apps-2026-09-09
uncertainty: >
  The measurements are of bounded agentic tasks and of one recall task on
  small open-weight models; no study here observes a team that keeps operating
  after its task ends. The portability numbers come from synthetic histories
  scored for exact recall, which rewards structural fidelity and says nothing
  about whether the preserved material was worth preserving. The two
  engineering accounts describe single builds with no arm run without the
  records they credit, so nothing attributes their outcomes to any one
  element. The claim that a durable record should be structured rather than
  narrated is well supported for recall and is a reasoned transfer for
  judgement-bearing content.
applicability: >
  Deciding what an ending run must leave behind, and in what form, when the
  successor may be a fresh instance of the same model, a different owner or a
  different model. The failure categories transfer as things to look for. The
  percentages, the accuracy deltas and the specific file layouts do not
  transfer as expected effects on your own work.
review:
  last_checked: 2026-09-09
  checked_by: scout
---

# What a session boundary costs, and which records survive it

## The losses are a distinct failure family, not ordinary error

A cross-domain diagnostic benchmark over 3,100+ trajectories in web, OS,
embodied and database domains, on GPT-5 variants and Claude models, separates
seven failure categories and marks three of them as belonging to long
horizons specifically: **catastrophic forgetting**, where "the agent's
decision boundary is gradually eroded by...interaction history";
**history error accumulation**, where "a small initial mistake [accumulates]
into repeated ineffective actions"; and **memory limitation**, plain context
exhaustion. Planning failures and memory limitations are named as the
dominant bottlenecks, and performance degrades non-linearly with horizon
rather than gracefully. Attributed failures split 72.5% process-level to
27.5% design-level in those domains; read that as composition in this study,
not as an incidence rate.

The annotated multi-agent failure taxonomy shows the same shapes at a
smaller scale in bounded traces: loss of conversation history 2.80%, step
repetition 15.7%, unaware of termination conditions 12.4%. Step repetition —
redoing what has already been done — is the second largest single mode in
that taxonomy, and a lost record is one way to produce it.

## Compaction is not a handoff, and its failure is silent

The clearest statement of the mechanism is the one a compaction system's
authors give against their own component: "the compactor must condense
context but is fundamentally unaware of precisely what information the agent
will need later." What makes this worse than ordinary lossiness is the
circularity that follows: "because post-compaction agent steps are
conditioned on the new summary, targeted validation criteria do not exist and
errors silently propagate through coherent but incorrect behavior." A run
that resumes from a bad summary reads fluently and reasons consistently, and
its own subsequent work cannot expose the gap, because that work is derived
from the summary in question.

Their remedy is worth carrying as a principle even where the machinery is
not: generate the check independently of the thing being checked. They run
the compactor in parallel with continued execution on the *original* context,
so "the candidate summary and the agent's next steps are generated
independently from the same pre-compaction state, yielding a validation
signal independent of the summary itself", then judge whether the summary
"preserves both the agent's forward intent and the key facts and constraints
it depends on". Reported gain: up to 8.8 percentage points of task accuracy
with 39.7% lower latency on SWE-bench Verified and BrowseComp — a best case
in one serving system, not an expected effect anywhere else.

Both first-party engineering accounts reached the same conclusion by
building. One reports flatly that "compaction isn't sufficient" and that
"compaction doesn't always pass perfectly clear instructions to the next
agent". The other preferred clearing context entirely over compacting it:
"Context resets—clearing the context window entirely and starting a fresh
agent, combined with a structured handoff that carries the previous agent's
state and the next steps", because "While compaction preserves continuity, it
doesn't give the agent a clean slate".

## The loss happens when you write, not when the successor reads

The controlled portability study is the sharpest evidence for choosing a
form. Four storage kinds were compared under a deliberate model swap on 48
synthetic histories with exact scoring, using two sub-10B open-weight models.

- A fixed-schema structured store was almost perfectly portable: "KG-fixed
  accuracy chang[ed] by only +0.0004 ±0.0020 following a writer swap."
- Model-written natural-language summaries were not, and failed
  asymmetrically: accuracy moved "+9.91 or −13.28 percentage points depending
  on the specific migration direction."
- Most of the summaries' deficit was incurred before any model changed:
  "80% (0.467 ± 0.014) of the NOTES accuracy deficit [is attributed] to
  information lost during initial construction."
- And it could not be recovered afterwards: "store-only repair of NOTES fails
  to reach a 90% performance recovery target in all 48 test cases."
- For retrieval-based storage, "retrieval failures drive 81% (0.364 ± 0.012)
  of the RAG deficit" — the material was there and was not found. Migrating
  an index halfway is close to not migrating it: a mixed index captured "only
  a 4.96-point accuracy improvement, forfeiting the majority of the
  11.90-point gain achieved through full re-embedding."

The transferable statement is not the numbers. It is that a record's fidelity
is fixed at the moment it is written, that prose summaries are the least
portable common form, and that a successor cannot repair by reading what the
predecessor failed to write.

## What the two engineering accounts actually kept

Both externalised state into files the next run reads, and both separated
setting up from carrying on. In the first, "The very first agent session uses
a specialized prompt that asks the model to set up the initial environment"
while "Every subsequent session asks the model to make incremental progress,
then leave structured updates" — and the two are the same harness with
different opening prompts, so the split is in the assignment rather than in
the machinery. What crossed the boundary there was a structured JSON feature
list carrying pass/fail per feature across roughly 200 features, a progress
log, git history with descriptive commits, and a script to start the
environment. The stated reason: "The key insight here was finding a way for
agents to quickly understand the state of work when starting with a fresh
context window."

In the second, "Communication was handled via files", and completion was
agreed in advance rather than declared afterwards: "Before each sprint, the
generator and evaluator negotiated a sprint contract: agreeing on what 'done'
looked like for that chunk of work before any code was written." That
matters against the 12.4% of annotated failures where a worker did not know
when it was finished.

## The countervailing evidence: more persisted state is not better

The same second account records scaffolding becoming waste. Work that needed
sprint decomposition on one model did not on the next — the model could "work
coherently for over two hours without the sprint decomposition that Opus 4.5
had needed" — and "for tasks within that boundary, the evaluator became
unnecessary overhead". The right amount to carry across a boundary is a
property of the model, the horizon and the task, and it moves when any of
them changes. A structure that earned its cost once should be re-examined
after a model change rather than inherited as doctrine.

Volume works against the record in a second way. In the portability study
the retrieval-based store's failures were overwhelmingly failures to find
material that was present, not absent material — 81% of its deficit. A larger
store is a harder store to retrieve the right thing from. And everything
persisted is something that must later be kept true or retired, which is
where [checking an inherited record](verifying-an-inherited-record.md)
takes over.

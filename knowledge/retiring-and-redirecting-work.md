---
id: retiring-and-redirecting-work
title: Which signals can tell a leader that work should end or change
status: draft
relations:
  - type: applies_to
    to: skill:choosing-what-to-work-on-next
  - type: depends_on
    to: knowledge:choosing-work-under-a-directive
sources:
  - title: "Last Step Matters: Early Uncertainty Cannot Predict Failure in Long-Horizon Agents"
    url: https://arxiv.org/abs/2608.29685
    source_date: 2026-08-30
    evidence_date: 2026-09-09
    evidence: evidence:mid-run-confidence-2026-09-09
  - title: "Push Your Agent: Measuring and Enforcing Quantitative Goal Persistence in Long-Horizon LLM Agents"
    url: https://arxiv.org/abs/2605.23574
    source_date: 2026-05-22
    evidence_date: 2026-09-09
    evidence: evidence:goal-persistence-pushbench-2026-09-09
  - title: "Scores Are Not Decisions: Cost-Aware Stopping for Tool Acquisition in LLM Agents"
    url: https://arxiv.org/abs/2607.27083
    source_date: 2026-07-29
    evidence_date: 2026-09-09
    evidence: evidence:cost-aware-stopping-2026-09-09
  - title: "STALE: Can LLM Agents Know When Their Memories Are No Longer Valid?"
    url: https://arxiv.org/abs/2605.06527
    source_date: 2026-05-07
    evidence_date: 2026-09-09
    evidence: evidence:stale-memory-validity-2026-09-09
  - title: Why Do Multi-Agent LLM Systems Fail? (MAST), v3
    url: https://arxiv.org/abs/2503.13657v3
    source_date: 2025-10-26
    evidence_date: 2026-09-09
    evidence: evidence:mast-failures-2026-09-09
uncertainty: >
  No source here studies retiring a line of work under an open-ended
  directive. Each contributes one piece from an adjacent setting: what an
  agent's own confidence can and cannot tell it, on deep-research tasks with
  open-weight models; what a count-verifiable collection task exposes about
  false completion; what the structure of a stopping decision is, proved for
  tool acquisition inside a single task; and how badly a superseded fact
  propagates into decisions that depended on it. The combination — use
  external observation rather than self-assessment, set the retirement
  condition in advance, and re-derive commitments when the premise moves — is
  reasoning built from those pieces, not a measured method. The one framework
  found that names a task-abandonment mechanism offers a tunable probability
  rather than a criterion, and was excluded for having no retrievable result.
applicability: >
  Judging whether work in progress should continue, change or stop, and
  carrying a changed direction into commitments already running. The
  mid-trajectory uncertainty result applies to an agent assessing its own
  in-progress work and is the load-bearing negative here. The numbers are
  properties of their own benchmarks and models. Where an external verifier
  and a countable target exist, prefer the direct measurement over any of
  this.
review:
  last_checked: 2026-09-09
  checked_by: scout
---

# Which signals can tell a leader that work should end or change

## An agent in the middle of work cannot tell you how it is going

This is the sharpest result bearing on reassessment, and it is negative.
Across three deep-research benchmarks and five open-weight models from 27B to
1T parameters, with eight rollouts per task, verbal confidence at trajectory
completion separated success from failure at a mean AUROC of 0.85. At 50%
progress **no metric exceeded a mean AUROC of 0.60**, and at 80–90% progress
metrics stayed below 0.70. Token-probability measures were worse than verbal
confidence even at the end.

The explanation offered is that agents change direction mid-run: path
switching appeared in 86.8% of trajectories on one benchmark, averaging 8.5
switches each. Before the final switch, the correlation between confidence and
correctness stayed below 0.15; after it, it rose to 0.3–0.5.

The consequence for a leader is direct. Asking work in progress whether it is
going well — asking the agent doing it, or asking yourself in the middle of
it — is close to uninformative, and it is uninformative in the specific way
that matters: it does not distinguish work that will succeed from work that
will not. Reassessment has to be triggered by something outside the work, and
timed to a point where the assessment carries information. That the same study
found completion-point self-assessment substantially informative is the
constructive half: a finished increment is a place where asking is worth
something.

Conditions: deep-research tasks, open-weight models, no frontier proprietary
model in the set, and the authors note the results may differ where actions
change environment state or where path switching is rarer.

## A final success flag hides the failures that matter for stopping

A benchmark built around collecting a requested count of verified artifacts
makes the case for external verification concretely. Its design point is that
"repeated work, duplicate submissions, false completion, and progress drift
are measured directly rather than hidden behind a final success flag", and its
requirement is that an agent "keeps working until an external verifier
confirms enough distinct valid items". Frontier coding agents solved many
50-artifact tasks but reached only "3 out of 9 successes per condition at 100
artifacts"; a controller that tracked state externally reached 69–78% and
eliminated duplicates.

Two of the four named failures are stopping failures in opposite directions —
false completion is stopping too early, repeated work is not stopping at all.
The annotated multi-agent taxonomy shows both as well: premature termination
6.20% and unaware of termination conditions 12.4%, alongside step repetition
15.7%, within annotated failing traces. A team is not reliably biased in one
direction, so a rule that only guards against giving up too soon leaves the
other half open.

The favourable condition here is worth naming: this task has a countable
target and an external verifier. Most work under an open-ended directive has
neither, which is exactly why the leader has to supply the equivalent.

## A ranking of candidates is not a decision

The structural point comes from a stopping problem in a different setting —
how many tools to acquire from a ranked list. "Routers and retrievers can rank
candidate tools by relevance, but a ranking alone does not determine how many
are worth selecting." The paper reports proving that its marginal formulation
is aligned with the stopping target and "that score-only rules are suboptimal
under heterogeneous costs"; the deciding quantity is the gap between stopping
now and the best continuation, weighted by the payoff at stake. Reported
result: "37% fewer tools than full access while maintaining comparable task
success", with larger gains where the ranking was weaker.

Transferred to work rather than tools, this is reasoning and not a result. But
the shape holds and it is the part worth carrying: ordering candidate work by
how good it looks does not say how much of it to take on or when to stop the
current line, and when the candidates cost different amounts, a rule based on
their apparent value alone is not just imprecise — in the setting where it was
analysed it was provably not the right rule. What decides is marginal gain
against marginal cost, including the cost of the alternative not taken.

## Changing direction is not finished when the decision is made

An agent that learns its premise has changed frequently keeps acting on the
old one. On a benchmark of 400 expert-validated conflict scenarios generating
1,200 queries, "even the best evaluated model achiev[es] only 55.2% overall
accuracy", and the failure named is "a pervasive gap between retrieving
updated evidence and acting on it" — the model retrieves the corrected fact
and plans from the superseded one. The hard case is implicit conflict, where
"a later observation invalidates an earlier memory without explicit negation,
requiring contextual inference". The same work reports that "Models often
accept outdated assumptions embedded in a user's query", so a stale premise
carried in the phrasing of an instruction is not challenged.

For redirection this means the decision to change direction and the change of
direction are two separate events, and the second does not follow from the
first. Every commitment whose justification rested on the old premise has to
be revisited explicitly, and the ones at risk are those where nothing
announced that the premise had failed.

## What is missing

No source here observed a team retiring a line of work, and none measured the
cost of retiring too late against retiring too early. There is no evidence
that the guidance built from these pieces improves a retirement decision. The
absence of a study on stopping open-ended work is the same absence recorded in
[choosing work under a directive](choosing-work-under-a-directive.md): the
literature supplies the task, so it never has to end one.

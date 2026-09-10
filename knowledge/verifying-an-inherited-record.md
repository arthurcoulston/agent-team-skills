---
id: verifying-an-inherited-record
title: Why an inherited record has to be checked, and which check catches what
status: draft
relations:
  - type: applies_to
    to: skill:handing-work-across-sessions
sources:
  - title: "Last Step Matters: Early Uncertainty Cannot Predict Failure in Long-Horizon Agents"
    url: https://arxiv.org/abs/2608.29685
    source_date: 2026-08-30
    evidence_date: 2026-09-09
    evidence: evidence:mid-run-confidence-2026-09-09
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
  The confidence result is measured on deep-research tasks with five
  open-weight models and its authors say it may differ where actions change
  environment state or where agents switch direction less often; it concerns
  an agent's own uncertainty signals rather than any external check. The
  staleness result is a first measurement on constructed everyday scenarios,
  read from the abstract page only, so per-model and per-dimension splits are
  not relied on here. No source measures a successor checking a predecessor's
  record: that specific application is a reasoned transfer from three
  results that each cover part of it.
applicability: >
  A run that is resuming work it did not do itself, from a record it did not
  write, and is about to act on inherited claims. The ordering of the checks
  is a judgement; the evidence supports which claims are least trustworthy,
  not how many checks are worth their cost in a given setting.
review:
  last_checked: 2026-09-09
  checked_by: scout
---

# Why an inherited record has to be checked, and which check catches what

Three distinct things can be wrong with what a predecessor left. They fail
differently and are caught by different checks, and a successor that runs
only one of them is exposed on the other two.

## 1. A claim of progress written mid-task is the least reliable claim it makes

An agent's own confidence separates its successes from its failures well at
the end of a trajectory and hardly at all before then. Across 15
model–benchmark combinations on three deep-research benchmarks, with five
open-weight models from 27B to 1T and eight rollouts per task, verbal
confidence reached a mean AUROC of **0.85 at trajectory completion** — but at
**50% progress no measured signal exceeded 0.60**, and at 80–90% progress
none exceeded 0.70. Token-probability signals were worse everywhere,
averaging 0.65 and 0.64 at the point where verbal confidence reached 0.85.

The mechanism is that agents change their minds. Path switching — abandoning
the current direction mid-trajectory — occurred in 86.8% of BrowseComp
trajectories, averaging 8.5 switches each. Before the final switch, the
correlation between confidence and correctness stayed below 0.15; only after
it did the correlation climb to 0.3–0.5.

The transfer to a handoff is direct and uncomfortable. A run that ends
because it ran out of context ends *mid-trajectory* — precisely where its
self-assessment has been measured to carry the least information. The
successor inherits a status claim from the worst possible vantage point. A
run that ends at a completed piece of work is in the regime where the same
self-report was worth 0.85, which is an argument for ending at completion
boundaries whenever the ending is yours to schedule.

## 2. A fact that was true when written and is not any more

Stored state going stale is measured directly, and the results are poor. On
400 expert-validated conflict scenarios yielding 1,200 queries over contexts
reaching 150K tokens, "even the best evaluated model achiev[es] only 55.2%
overall accuracy." The hard case is **implicit conflict**, where "a later
observation invalidates an earlier memory without explicit negation,
requiring contextual inference" — nothing announces that the old fact is now
wrong.

Two findings from it change what a successor should do rather than merely
warn it:

- **Retrieving the correction is not the same as acting on it.** The paper
  names "a pervasive gap between retrieving updated evidence and acting on
  it" — an agent can hold the updated fact and still plan from the
  superseded one. So noticing that something changed is not the end of the
  work: the decisions that rested on the old fact have to be revisited
  individually, because they will not revise themselves.
- **A stale premise smuggled into the phrasing is not challenged.** "Models
  often accept outdated assumptions embedded in a user's query." A handoff
  written as an instruction — *continue with the chosen approach* — presents
  its assumptions as premises, which is the exact form the measurement shows
  going unexamined. The same content written as a checkable claim with its
  basis is at least available to be tested.

## 3. Work recorded complete that was never verified

The annotated multi-agent taxonomy puts three modes in its verification
group: incorrect verification 9.10%, no or incomplete verification 8.20%,
premature termination 6.20%. Its authors' own conclusion after testing
remedies is that "sole reliance on final-stage, low-level checks is
inadequate".

The engineering accounts report the same thing from practice and show what
answered it. One names "Claude's tendency to mark a feature as complete
without proper testing" and that a later agent instance would "declare the
job done"; its resumption routine therefore did not stop at reading the
record — the resumed session would "run a basic test on the development
server to catch any undocumented bugs", starting the server and driving one
real interaction end to end, which "ensured that Claude could quickly
identify if the app had been left in a broken state." The other had a
separate agent "click through the running application the way a user would,
testing UI features, API endpoints, and database states."

Note what both check against: the running artifact, not the report. And note
the honest limit the first records — verification through the available tools
missed whole classes of defect, since "Claude can't see browser-native alert
modals through the Puppeteer MCP". A check that passes bounds what you may
claim by what the check could have seen.

## What this does not settle

No source here measures a successor auditing a predecessor's handoff. Each
covers one piece: how much to trust a mid-run self-report, how badly stored
facts age, how often completion is claimed without verification. Assembling
them into a resumption check is a reasoned transfer, and the ordering — trust
the world, then the artifacts, then the record's claims about them — is
judgement rather than a measured result. The cost side is also unmeasured:
nothing here says how much checking is worth its tokens, and a second
first-party account shows a verification agent that was worth its cost on one
model becoming "unnecessary overhead" on the next.

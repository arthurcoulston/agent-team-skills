---
id: confirming-a-repeated-failure
title: What is known about telling a real repeated failure from run-to-run variance, and about finding its cause
status: draft
relations:
  - type: applies_to
    to: skill:correcting-repeated-failures
sources:
  - title: On the Reliability of Computer Use Agents
    url: https://arxiv.org/abs/2604.17849v1
    source_date: 2026-04-20
    evidence_date: 2026-09-10
    evidence: evidence:computer-use-reliability-2026-09-10
  - title: "Beyond pass@1: A Reliability Science Framework for Long-Horizon LLM Agents"
    url: https://arxiv.org/abs/2603.29231v1
    source_date: 2026-03-31
    evidence_date: 2026-09-10
    evidence: evidence:long-horizon-reliability-gds-2026-09-10
  - title: "LongRCA Bench: Diagnosing Responsible Roles and Root Causes in Long-Horizon Agent Failures"
    url: https://arxiv.org/abs/2608.15242v3
    source_date: 2026-08-21
    evidence_date: 2026-09-10
    evidence: evidence:longrca-attribution-2026-09-10
  - title: Why Do Multi-Agent LLM Systems Fail? (MAST), v3
    url: https://arxiv.org/abs/2503.13657v3
    source_date: 2025-10-26
    evidence_date: 2026-09-09
    evidence: evidence:mast-failures-2026-09-09
  - title: "STALE: Can LLM Agents Know When Their Memories Are No Longer Valid?"
    url: https://arxiv.org/abs/2605.06527
    source_date: 2026-05-07
    evidence_date: 2026-09-09
    evidence: evidence:stale-memory-validity-2026-09-09
  - title: "EvoAgentBench: Benchmarking Agent Self-Evolution via Ability Transfer"
    url: https://arxiv.org/abs/2607.05202v1
    source_date: 2026-07-06
    evidence_date: 2026-09-10
    evidence: evidence:evoagentbench-transfer-2026-09-10
review:
  last_checked: 2026-09-10
  checked_by: scout
uncertainty: >
  The base rate for run-to-run variance rests on one benchmark family
  (computer use on OSWorld) and is read off a figure the authors state
  approximately; it establishes that the effect is large in that setting, not
  a number to carry elsewhere. The attribution difficulty rests on one
  benchmark of 1,140 trajectories with single reference labels per trajectory,
  scoring machine attribution only — no source read here measures how well a
  person reads the same traces, so the inference that a leader should treat
  its own first cause story as a hypothesis is reasoned, not measured. MAST's
  prevalences are proportions within annotated failing traces in the studied
  frameworks, not incidence rates in any deployed team. The retrieve-versus-act
  gap is measured on constructed everyday-topic scenarios. The mapping from
  the three sources' failing steps onto the cause categories a leader can
  actually observe is this collection's synthesis and is not any source's
  finding.
applicability: >
  A continuing agent team whose leader has noticed the same kind of thing
  going wrong more than once, and has to decide whether there is anything to
  fix and what it is, before spending anything on a repair. It assumes runs
  can be observed or re-run and that some record of what happened survives.
  It does not apply to a single dramatic failure with an obvious mechanism,
  and it says nothing about diagnosing a system with no trace at all.
---

# Telling a real repeated failure from noise, and finding its cause

Two facts govern the front of this problem, and both cut against the instinct
to act on what you just saw.

## One observation is close to worthless, and two may be

Repeated execution of the *same* task by the *same* agent produces different
outcomes at a rate high enough to swamp small samples. On OSWorld, "Pass@10
reaches approximately 78%" while the agent "succeeds on all 10 executions for
only about 36% of tasks" — so on roughly four tasks in ten, success and
failure are both routine outcomes of an unchanged setup.

The obvious escape — remove the randomness — is closed. "Enforcing
deterministic decoding does not consistently improve reliability across
models", and non-functional perturbations of the environment degrade it. The
variance is not a temperature setting.

The rate is also not constant across kinds of work: in a separate 396-task,
23,392-episode study, degradation over task duration was severe in software
engineering (a Graceful Degradation Score falling "from 0.90 to 0.44 over the
full duration range") and nearly absent in document processing ("0.74 to
0.71"). Long tasks in some domains are simply less repeatable, and a team
doing that kind of work should expect more apparent patterns that are not
patterns.

**What follows.** Before treating a repetition as a signal, establish that it
is one — by re-running where you can, by counting failures against attempts
rather than remembering the failures, or by finding the same failure in
conditions varied enough that chance is an implausible explanation. Two
failures in ten attempts on a task with this profile is an unremarkable
sample. What the sources do *not* supply is a threshold: no source read here
gives a number of repetitions that establishes a pattern, and any rule of that
form in guidance is judgement rather than a finding.

## Attribution from a trace is unreliable even done carefully

LongRCA Bench scores two separate predictions over 1,140 genuinely failed
trajectories — no injected errors, median 145 steps — against independently
scored human labels: which role was responsible, and which step first
introduced the decisive error.

"The strongest baseline reaches only **13.2% exact root-step accuracy**." The
paper's own method reaches "**51.1% responsible-role accuracy and 24.1% exact
root-step accuracy**". The best reported attribution identifies the
responsible role about half the time and the decisive step about a quarter of
the time.

The distinctions its labelling rules had to draw name the traps directly:
an error already present in a handoff instruction is not the same as one
introduced afterwards; an error that was repaired is not a root cause; and an
error that merely propagated is not the one that mattered. Each is a way a
plausible cause story can be wrong while explaining everything you saw.

**What follows.** A cause identified from a trace is a hypothesis. It earns
more than that from an intervention that changes the outcome, not from how
well it explains the record.

## The failing step is usually application, not storage

Two independent lines of work converge here, which is the strongest thing this
entry can say.

EvoAgentBench separates experience **encoding, routing, and uptake**, and
builds a test set where "every test task is backed by verified training-side
Ability support" — the needed experience provably exists. Even so, no
automatic method sustains gains: case retrieval on query similarity loses
ground (−2.4 and −0.7 overall, one cell at −36.3) because "surface similarity
in queries predicts similarity in solutions" does not hold; strategy
distillation gains "+0.4 to +3.6" with six negative per-domain cells; prompt
evolution regresses by up to −12.3 in a domain. The content was there. The
machinery for getting the right piece to the right moment was the problem.

STALE finds the same shape one step further on: "a pervasive gap between
retrieving updated evidence and acting on it", with the best evaluated model
at 55.2% overall accuracy on noticing its stored beliefs had gone stale. An
agent can retrieve the corrected fact and still plan from the superseded one.

**What follows.** "The agent didn't know" and "the agent knew and did not use
it" demand different repairs, and the second is more common than it looks.
Writing the missing knowledge down is the correct fix only for the first.

## Cause categories that can be told apart, and how

MAST's annotated taxonomy over 1,600+ traces (built from 150 expert-annotated
traces at inter-annotator kappa 0.88) supplies the categories with observable
signatures, and its prevalences within failing traces indicate where to look
first: step repetition 15.7%, reasoning-action mismatch 13.2%, unaware of
termination conditions 12.4%, disobey task specification 11.8%, incorrect
verification 9.1%, no or incomplete verification 8.2%, task derailment 7.4%,
failure to ask for clarification 6.8%, premature termination 6.2%.

Some of these separate on evidence you already hold: whether the requirement
appeared in the instruction at all, whether the agent stated the right thing
and did another, whether verification happened and what it concluded. Others
do not separate without an intervention — most importantly, guidance that was
present but unused looks identical, in most records, to guidance that never
arrived. Distinguishing those two requires checking what the consuming agent
actually received, which is an act, not an inference.

MAST is also the only source read here that tested repairs. Structured
prompts adding an explicit verification requirement gave +9.4% and +15.6% task
success in one setting, and modest gains with substantial residual failure in
another. The authors' conclusion is the useful caution: "Although first step
interventions lead to performance gains, not all failure modes are resolved",
and "sole reliance on final-stage, low-level checks is inadequate."

## Where the evidence runs out

No source read here studies a leader diagnosing its own team. The measurements
are of benchmarks, automatic attribution methods and single-agent episodes.
The transfer to a leader's practice — treat repetition as unconfirmed until
counted, treat a cause as a hypothesis until an intervention moves the
outcome, and check whether guidance was received before concluding it was
missing — is this collection's reasoning from those measurements, and each of
those three is a judgement about what to do, not a result.

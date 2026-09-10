---
id: establishing-reliability-across-repeated-operation
title: How to establish reliability across repeated team operation
status: draft
relations:
  - type: applies_to
    to: skill:building-reliability-evidence
  - type: applies_to
    to: mission:accessible-work-tools
  - type: applies_to
    to: mission:public-evidence-ledger
  - type: applies_to
    to: mission:reproducible-practice
sources:
  - title: "Towards a Science of AI Agent Reliability, v3"
    url: https://arxiv.org/abs/2602.16666v3
    source_date: 2026-06-02
    evidence_date: 2026-09-10
    evidence: evidence:agent-reliability-framework-2026-09-10
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
  - title: "EvoAgentBench: Benchmarking Agent Self-Evolution via Ability Transfer"
    url: https://arxiv.org/abs/2607.05202v1
    source_date: 2026-07-06
    evidence_date: 2026-09-10
    evidence: evidence:evoagentbench-transfer-2026-09-10
  - title: "Last Step Matters: Early Uncertainty Cannot Predict Failure in Long-Horizon Agents"
    url: https://arxiv.org/abs/2608.29685v1
    source_date: 2026-08-30
    evidence_date: 2026-09-09
    evidence: evidence:mid-run-confidence-2026-09-09
review:
  last_checked: 2026-09-10
  checked_by: scout
uncertainty: >
  The sources evaluate bounded single-agent episodes, not continuing teams.
  The claim contract, observation-period design and mission transfers below are
  reasoned synthesis and have not been tested as a combined method.
applicability: >
  A leader deciding what repeated evidence justifies continued, narrowed or
  expanded reliance on an agent team under identified operating conditions.
  This does not accept one contribution, judge mission value, or prove safe
  indefinite autonomy.
---

# How to establish reliability across repeated team operation

Reliability evidence supports a bounded reliance decision. It does not turn a
finite run into a permanent property of a model, agent or team. State the claim
as a contract: the exact team and configuration, the work population, operating
conditions, observation period, required performance, permitted intervention,
failure limits and the decision the evidence will inform. Name the changes that
expire it.

## Why one success and average accuracy are insufficient

Repeated OSWorld execution produced a large gap between ever succeeding and
succeeding every time: approximately 78% Pass@10 versus 36% Pass^10. This is one
benchmark, but it demonstrates the distinction a single accepted artifact hides.
The broader reliability framework likewise found uneven consistency,
robustness, confidence discrimination and resource use across five repeats of
bounded tasks. Capability and reliability must be measured separately.

The source framework's dimensions transfer usefully; its empirical claim does
not. It tested one agent scaffold at a time on episodes lasting minutes. Team
composition, accumulated state, cross-agent propagation, recovery and temporal
drift were untested future-work areas. A continuing team therefore needs both
controlled repeats and longitudinal operating evidence.

## Use two linked evidence panels

The **repeat panel** holds task and configuration stable enough to expose run
variance. Sample recurring task families by consequence and frequency, repeat
identical or semantically equivalent cases, and preserve all outcomes. Compare
against the current arrangement, a simpler arrangement, or both. This panel can
estimate repeatability and isolate a proposed change; it cannot show adaptation
to real change.

The **operating panel** follows dated work across representative cycles. Record
task family, consequential conditions, outcome, failure type and severity,
recovery, human or other-agent intervention, elapsed time and cost. Include
abstentions, cancellations, silent stalls and work never attempted because the
team did not recognize it. This panel exposes drift and recovery, but changing
work weakens causal attribution. Do not pool materially different configurations
or conditions into one comforting rate.

Choose the observation period by exposure, not a ceremonial number of days. It
must contain enough relevant opportunities, at least one normal operating cycle,
and the consequential variations the reliance decision assumes. Report both
calendar duration and denominators. If rare severe failures matter, either test
them deliberately in a safe environment or state that the period supplied no
evidence about them.

## Build a profile, not one score

- **Useful outcome:** acceptance or beneficiary evidence suited to each task
  family. Keep this distinct from mission trajectory and value.
- **Repeatability:** success, failure and resource dispersion across nominal
  repeats. Stable failure is consistent but not capable.
- **Robustness:** degradation under predeclared prompt, tool, environment,
  workload and ownership changes that belong to the claimed envelope.
- **Predictable failure:** whether observable signals distinguish when the team
  should abstain, verify or escalate, plus false-alarm and missed-failure rates.
- **Failure consequence and recovery:** constraint breach, severity, corrupted
  state, time to detect, time to restore and recurrence after restoration.
- **Intervention and cost:** human decisions, reviews, rescues, retries, tool and
  model cost, elapsed time and reserve consumed per useful outcome.

Treat hard boundaries and severe failures separately from averages. A cheap
successful majority cannot compensate for an unauthorized irreversible action.
Likewise, high intervention may make a team useful as an assistant while
failing a claim of unattended operation.

Post-run confidence can inform predictability, but early self-confidence should
not be the only alarm: in tested deep-research trajectories, no measured signal
exceeded mean AUROC 0.60 halfway through. Monitor observable state and external
checks, and report the monitor's own misses.

## Compare changes and keep contrary evidence

Predeclare the claim, sampling and thresholds before inspecting results. Preserve
failures and withdrawals; separate exploratory slices found afterwards. For a
change, run old and new arrangements on comparable work where practical and
inspect whether gains survive by task family, model, scaffold and condition.

Do not assume a plausible reliability intervention helps. One memory scaffold
was negative or neutral for all ten tested open-weight models on a long-horizon
benchmark, while curated procedural abilities improved all reported supported
cells in EvoAgentBench and automatic approaches retained regressions. The useful
conclusion is conditional: an intervention earns reliance only where its measured
benefit survives its retrieval, context and cost effects.

## Ground the claim in real missions

For **accessible work tools**, a claim might cover routine release, support and
research increments for one version of the team over eight weeks and two release
cycles. Repeat representative support and regression tasks; perturb user wording,
an ordinary dependency failure and a handoff. Track accepted releases, reopened
accessibility defects, sponsor intervention, recovery time and cost. This would
not establish accessibility conformance, beneficiary value or reliability after
a model, toolchain or user population change.

For the **public evidence ledger**, stratify new entries, corrections and
contentious claims rather than averaging them. Test source unavailability,
conflicting evidence, adversarial submissions and owner handoff. Track traceable
claims, improper publication, abstention/escalation discrimination, correction
latency, preserved dissent and reviewer intervention. A stable low-risk entry
rate cannot compensate for one severe provenance breach, and the claim expires
when editorial policy, source mix, threat model or team configuration changes.

For **reproducible practice**, count independent reruns, negative results kept,
decision-changing findings, failed reproductions and investigator intervention
by study class. Repeatedly producing reports is not repeatable research; the
relevant outcome is whether another investigator can recover the method and
obtain or explain the result.

## Renew or narrow confidence

Review the profile at the declared period and after material change, severe
incident, unexplained drift or intervention growth. Continue reliance only for
the conditions represented. Narrow the envelope when evidence is thin, restore
controls when failure becomes less predictable, and run a new comparison after
changing the model, scaffold, role structure, tools, instructions, critical
data source or success criterion. Confidence that does not expire is an
unbounded claim made from bounded evidence.

---
id: instruction-authoring-basis
title: Ground instruction authoring in behavior and evidence
status: draft
relations:
  - type: applies_to
    to: skill:writing-agent-instructions
sources:
  - title: OpenAI model guidance
    url: https://developers.openai.com/api/docs/guides/latest-model
    source_date: unknown
    evidence_date: 2026-09-09
    evidence: evidence:openai-instruction-guidance-2026-09-09
  - title: Anthropic prompting best practices
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
    source_date: unknown
    evidence_date: 2026-09-09
    evidence: evidence:anthropic-instruction-guidance-2026-09-09
  - title: SkillsBench v4
    url: https://arxiv.org/abs/2602.12670v4
    source_date: 2026-06-14
    evidence_date: 2026-09-09
    evidence: evidence:skillsbench-authoring-2026-09-09
  - title: Evaluating AGENTS.md v2
    url: https://arxiv.org/abs/2602.11988v2
    source_date: 2026-06-23
    evidence_date: 2026-09-09
    evidence: evidence:agents-md-authoring-2026-09-09
  - title: Agentic Context Engineering v3
    url: https://arxiv.org/abs/2510.04618v3
    source_date: 2026-03-29
    evidence_date: 2026-09-09
    evidence: evidence:ace-authoring-2026-09-09
  - title: How Many Instructions Can LLMs Follow at Once? v1
    url: https://arxiv.org/abs/2507.11538v1
    source_date: 2025-07-15
    evidence_date: 2026-09-09
    evidence: evidence:ifscale-authoring-2026-09-09
  - title: IFHierBench v1
    url: https://arxiv.org/abs/2607.27912v1
    source_date: 2026-07-30
    evidence_date: 2026-09-09
    evidence: evidence:ifhierbench-authoring-2026-09-09
  - title: GEPA v2
    url: https://arxiv.org/abs/2507.19457v2
    source_date: 2026-02-14
    evidence_date: 2026-09-09
    evidence: evidence:gepa-authoring-2026-09-09
  - title: Prompt Repetition Improves Non-Reasoning LLMs v1
    url: https://arxiv.org/abs/2512.14982v1
    source_date: 2025-12-17
    evidence_date: 2026-09-09
    evidence: evidence:repetition-authoring-2026-09-09
  - title: When Do Prompt-Side Agent Playbooks Transfer? v1
    url: https://arxiv.org/abs/2608.05778v1
    source_date: 2026-08-06
    evidence_date: 2026-09-09
    evidence: evidence:playbook-transfer-authoring-2026-09-09
  - title: Structure for Reading, Prose for Writing v1
    url: https://arxiv.org/abs/2608.20786v1
    source_date: 2026-08-21
    evidence_date: 2026-09-09
    evidence: evidence:structural-conditioning-authoring-2026-09-09
review:
  last_checked: 2026-09-09
  checked_by: mason
uncertainty: >
  Research-informed synthesis, not an independently reviewed or behaviorally
  validated authoring method. Studies test different artifacts and bounded
  tasks. Provider pages are mutable and model-specific; their source dates
  are unknown because the passages have no verified publication date.
applicability: >
  Authoring standing guidance, skills, task briefs and handoffs consumed by
  agents. Adapt to the actual recipient, context-loading mechanism and task.
  Claims about long-lived autonomous teams require additional transfer tests.
---

# Ground instruction authoring in behavior and evidence

Optimize the work produced under the instructions while preserving their
legitimate requirements. Concision reduces burden when useful meaning
survives. It is an editing criterion, not proof of effectiveness.

## Evidence that changes the authoring method

| Finding | Consequence for drafting | Reading |
|---|---|---|
| Current models have different sensitivities and defaults. | Check relevant provider guidance and the deployed model. | [OpenAI](../evidence/openai-instruction-guidance-2026-09-09.md), [Anthropic](../evidence/anthropic-instruction-guidance-2026-09-09.md) |
| Useful skills and unnecessary repository guidance have different effects. | Evaluate the authored artifact on its intended work. | [SkillsBench](../evidence/skillsbench-authoring-2026-09-09.md), [AGENTS.md](../evidence/agents-md-authoring-2026-09-09.md) |
| Rewriting can lose accumulated expertise. | Check meaning and exceptions when reducing text. | [ACE](../evidence/ace-authoring-2026-09-09.md) |
| Constraint density and nested scope can impair compliance. | Test combinations and keep conditions clearly scoped. | [IFScale](../evidence/ifscale-authoring-2026-09-09.md), [IFHierBench](../evidence/ifhierbench-authoring-2026-09-09.md) |
| Execution feedback can guide prompt improvement. | Diagnose observed failures and compare revisions. | [GEPA](../evidence/gepa-authoring-2026-09-09.md) |
| Repetition and formatting have conditional effects. | Treat stylistic recipes as candidates for testing. | [Repetition](../evidence/repetition-authoring-2026-09-09.md), [Structural conditioning](../evidence/structural-conditioning-authoring-2026-09-09.md) |
| Transfer can change accuracy, cost and stopping behavior. | Recheck instructions when the recipient or runtime changes. | [Playbook transfer](../evidence/playbook-transfer-authoring-2026-09-09.md) |

The reading records distinguish observed results, source limitations and
our interpretation. These heterogeneous studies do not rank one universal
instruction-writing method. In particular, they justify neither a fixed
rule-count limit nor treating the shortest candidate as the best.

## Preserve intent while adding usable expertise

Our proposed method separates what must remain true from how it is phrased.
A clear rewrite can still delete an exception, narrow the assignment,
introduce a new approval requirement or turn a one-time example into policy.
Check those changes against the source intent. Useful guidance supplies
knowledge the recipient lacks: distinctions, prerequisites, decision rules
and reliable ways to obtain needed information.

For example, suppose the requirement is to update an index after confirmed
source changes, while leaving it alone when a scan finds nothing new.
“Review the index thoroughly every day” loses both the trigger and the
unchanged-state behavior. A faithful instruction is: “When a source changes,
update its affected index entry. If nothing relevant changed, leave the
index unchanged.” The example illustrates semantic preservation; it is not
a measured claim that these particular words outperform alternatives.

## Budget the context the recipient actually receives

A well-edited file can still fail if it is never loaded, conflicts with
standing guidance, or points to unavailable knowledge. Inspect the relevant
consumption path. Separate frequently needed direction from substantial
conditional detail when routing will reliably make that detail available.
The resulting retrieval and tool work belong in the cost comparison.

This placement rule is a design inference, not a claim that moving every
occasional sentence into a separate file helps. Loading mechanisms and
permissions vary. Keep critical prerequisites visible where the action is
chosen, and check links and commands in the intended installation.

## Translate the method for continuing teams

The research above does not demonstrate indefinite autonomous usefulness.
Our proposed extension is to preserve instruction provenance and versions,
test updates against retained responsibilities, and observe repeated use
through changed work, fresh sessions and runtime updates. Measure whether
context and procedural burden grow, useful expertise disappears, or agents
continue obsolete behavior. Use finite trials and report their duration.

The draft [authoring skill](../skills/writing-agent-instructions/SKILL.md)
implements these judgments. Its authorship using the same method is not
independent evidence that the method works.

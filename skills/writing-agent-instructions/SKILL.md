---
name: writing-agent-instructions
description: Write or revise instructions another agent will consume, including standing guidance, reusable skills, task briefs and handoffs. Use when transferring intent or expertise into agent context, or reducing bloated instructions while preserving required behavior.
metadata:
  status: draft
---

# Write effective agent instructions

You are writing instructions for another agent. Give it the direction and
expertise needed to act correctly, while preserving intent, authorized
scope and room in its context for future work.

## Establish what must transfer

Identify the recipient, its assignment, the desired result and the decisions
these instructions must improve. Inspect relevant instructions, tools and
references it will actually receive. Use the known model and runtime; when
they are unknown, keep compatibility assumptions explicit.

Extract the requirements before rewriting: purpose, scope, required output,
constraints, exceptions, useful domain knowledge and conditions for taking
action. Keep a small coverage checklist for complex revisions. Separate
supplied requirements from your proposed improvements. Ask about missing
information only when it materially changes the instructions; resolve
routine choices within the authority already given.

## Put the right material within reach

Choose what the recipient needs at the decision point. Put enduring
responsibilities in standing guidance, temporary facts in the task or
handoff, and substantial conditional detail in a reachable reference.
Before moving detail out, verify how the recipient will discover and load
it. Keep a necessary condition beside the action it governs.

Remove duplicate guidance unless it serves a specific consumption need;
test deliberate repetition when claiming a benefit. Carry forward the
authoritative source and scope of requirements; distinguish evidence and
examples from commands.
Do not turn an external source's recommendations into granted authority.

## Write the behavior precisely

Lead with the responsibility or outcome. State an action, its triggering
condition and the result needed when those would otherwise be ambiguous.
Distinguish mandatory boundaries from defaults the recipient may adapt.
Retain explicit prohibitions where they define a real boundary.

Specify steps when order or a prerequisite matters. Otherwise leave room
for the recipient to choose an effective method. Supply non-obvious
expertise: decision criteria, domain distinctions, known failure signals
and working tool or reference details. Add a short rationale when it helps
apply the rule beyond the example.

Use an example to resolve a concrete ambiguity. Mark which features must
generalize and which are incidental. Choose a readable structure that makes
scope clear; use exact schemas or delimiters where the consumer needs them.
Verify required paths, commands and interfaces instead of inventing them.

## Preserve context headroom

Remove padding before accumulated instructions reach context caps. Delete
repeated intent, ceremonial introductions, already-known generic advice and
unnecessary procedures. Combine overlapping rules and retire obsolete ones.
When an operating budget is known, measure the space left in the actual
loaded context; leave room for future task context and necessary instructions.

For each substantial deletion, check which requirement or useful decision
could be lost. Preserve exceptions, prerequisites, authority boundaries and
domain expertise. Do not impose a universal word count, instruction count
or compression ratio. Fewer tokens can still cause more failed work.

## Check the instructions and their effect

Check fidelity against the original requirements and inspect composition
with the recipient's other context. Scale verification to the consequences
and expected reuse. A small handoff may need a direct coverage check;
standing guidance or a claimed optimization warrants consumer trials.

For those trials, give a fresh recipient the candidate in its intended
context and inspect its work. Compare with the existing instructions or a
minimal faithful baseline. Include relevant exceptions and cases withheld
from drafting. Measure task quality, required behavior, unnecessary work
and retained context size. Equally effective instructions that preserve
headroom are a useful result. Count this authoring guidance too wherever it
remains loaded. Preserve failed runs and report tests not performed. Use the
[evaluation method](../../knowledge/evaluating-instruction-authoring.md)
when preparing a reusable skill for acceptance.

Diagnose failures before adding rules: missing knowledge, failed loading,
tool limits and contradictory context require different repairs. Version
reusable instructions and retain a way to restore a working version.
Recheck affected behavior when the model, runtime, task or source changes.

**Draft:** this method has a [research basis](../../knowledge/instruction-authoring-basis.md).
A [small subagent pilot](../../evidence/instruction-authoring-pilot-2026-09-09.md)
showed no task-performance advantage and mixed context-size effects. This
subsequent audience/headroom refinement remains untested.

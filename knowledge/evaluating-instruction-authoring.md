---
id: evaluating-instruction-authoring
title: Test authored instructions with fresh recipients
status: draft
relations:
  - type: applies_to
    to: skill:writing-agent-instructions
  - type: depends_on
    to: knowledge:instruction-authoring-basis
  - type: supports
    to: case:instruction-handoff-fidelity
  - type: supports
    to: case:instruction-revision-fidelity
sources:
  - title: GEPA v2
    url: https://arxiv.org/abs/2507.19457v2
    source_date: 2026-02-14
    evidence_date: 2026-09-09
    evidence: evidence:gepa-authoring-2026-09-09
  - title: When Do Prompt-Side Agent Playbooks Transfer? v1
    url: https://arxiv.org/abs/2608.05778v1
    source_date: 2026-08-06
    evidence_date: 2026-09-09
    evidence: evidence:playbook-transfer-authoring-2026-09-09
  - title: First instruction-authoring subagent pilot
    source_date: 2026-09-09
    evidence_date: 2026-09-09
    evidence: evidence:instruction-authoring-pilot-2026-09-09
review:
  last_checked: 2026-09-09
  checked_by: mason
uncertainty: >
  Proposed protocol, exercised in one small development pilot. Both conditions
  passed; no downstream improvement or broad compatibility claim is established.
  Execution feedback and target-side transfer tests motivate the design, which
  remains our synthesis.
applicability: >
  Evaluating a reusable instruction-authoring method and material revisions
  to persistent instructions. Scale repetitions, task coverage and independent
  review to the intended claim and consequences.
---

# Test authored instructions with fresh recipients

Test two separate outcomes: whether the author preserves the assignment,
and whether another agent can carry it out from the resulting instructions.
Good-looking prose cannot establish the second outcome.

## Compare authors, then compare recipients

1. Freeze the source assignment, requirements, recipient environment and
   outcome rubric before drafting. Keep development cases separate from
   held-out recipient cases. Do not select the test cases after seeing wins.
2. Have fresh authors produce instructions with and without the authoring
   skill. Give both the same source material and access. Preserve the exact
   context each received, including any supporting pages actually loaded.
3. Check each candidate against the source requirements. Record omissions,
   invented requirements, changed authority, broken references and scope
   changes. Preserve failed candidates in the comparison.
4. Run fresh recipients with those candidates in matched environments.
   Recipients receive normal task inputs and their ordinary context, but
   neither the author's conversation nor the withheld requirements rubric.
   Compare against existing instructions or a minimal faithful baseline.
5. Judge the resulting work against the frozen criteria. Blind reviewers to
   the variant where practicable, and record disagreements. Repeat enough
   authors and recipient runs to distinguish a useful signal from variation.

This tests the authoring method through its product. A separate ablation can
compare individual instruction revisions while holding the author fixed.
Do not mix those two claims.

## Define success before selecting the winner

| Dimension | What to inspect |
|---|---|
| Fidelity | Necessary intent, constraints and exceptions survive; no invented obligations or grants of authority. |
| Task outcome | Correct, useful work under ordinary and relevant exceptional inputs. |
| Restraint | Unchanged inputs, already-completed work and inapplicable conditions do not elicit needless actions. |
| Cost | Instruction tokens, retrieved context, output, tool calls, retries and elapsed time where measurable. |
| Transfer | Performance on withheld inputs and declared recipient configurations. |

Treat hard requirements as acceptance conditions, not as defects that token
savings can average away. Decide in advance how much ordinary quality
variation is acceptable when assessing efficiency. Do not invent a universal
threshold. If the candidate merely becomes shorter, report that observation
without claiming it works better.

Use deterministic checks for objectively inspectable state and independent
judgment for semantic quality. Neither textual similarity nor the presence
of the skill's preferred phrases demonstrates success. A recipient that
describes the right behavior but produces the wrong artifact has failed.

## Exercise continuing use explicitly

For standing instructions, retain state across a finite sequence: ordinary
work, no relevant change, a legitimate exception, a corrected instruction,
and a fresh recipient resuming work. Check that the correction takes effect
without losing still-valid responsibilities or reopening completed work.
Repeat relevant trials after model or runtime changes. Report the actual
duration and configurations; finite results do not prove indefinite use.

This is our translation of the bounded evidence in the
[research basis](instruction-authoring-basis.md). The
[GEPA reading](../evidence/gepa-authoring-2026-09-09.md) motivates using
execution feedback, and the
[transfer reading](../evidence/playbook-transfer-authoring-2026-09-09.md)
motivates testing compatibility and operating cost.

## Current cases and runner limits

The [handoff case](../cases/instruction-handoff-fidelity.md) and
[revision case](../cases/instruction-revision-fidelity.md) provide draft
author-stage tasks and recipient probes. They are synthetic development
cases; genuinely held-out cases must be prepared separately from the author.

The current runner in [LAYOUT.md](../LAYOUT.md) invokes the author with and
without the skill. It does not execute a fresh recipient, guarantee reference
loading, or score the output. These cases therefore prepare the first stage;
native subagent orchestration was used for recipient execution and blinded
review in the [first pilot](../evidence/instruction-authoring-pilot-2026-09-09.md).
That small test showed no downstream advantage. It did not test natural
loading, broader transfer or continuing operation; the standard CLI runner
still lacks the second stage.

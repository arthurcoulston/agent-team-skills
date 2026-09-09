---
status: draft
revised: 2026-09-09
---

# Outline — capabilities for sustained agent team leadership

Build a team that can pursue an open-ended directive autonomously over an
indefinite operating life. Sustain useful work, preserve direction, recover
from failure and improve the team's capabilities as its work and environment
change.

This is the ambition of the collection and the frontier it follows. Much
relevant research concerns bounded tasks, coding systems or simulations;
success in those settings does not establish indefinite autonomous
operation. Advance with humility about the evidence, curiosity about new
possibilities and ambition for what your team can achieve.

The collection must translate that research into expertise you can act on:
what to establish, how to operate it, how to test it and when to change it.
Track the assumptions behind each method and evaluate its effects across
repeated work, accumulating state, failures and changing conditions. Keep
improving the team's ability to pursue its directive beyond the completion
of any individual task or release.

This outline describes capabilities the final product must equip you to
build and maintain. The methods still need research and validation. Direct
language expresses the responsibility and intended result; supporting
evidence establishes which methods justify confidence under which conditions.

## Organize the knowledge through multiple views

Capabilities, occasions, lifecycle, system architecture, failure modes and
task catalogs remain candidate ways to organize the same knowledge. Combine
tags, categories and relationships where they help people and agents find,
understand and apply it. The eight areas below are one working view; they do
not select a primary taxonomy, fix skill boundaries or exclude another view.

Keep the distinctions between subject coverage, skill activation and
navigation explicit. A reader may find a skill through a symptom, a task, a
stage of development or an operating responsibility. Each route should
reach the same underlying knowledge and evidence.

The [Agent Skills specification](https://agentskills.io/specification)
separates discovery metadata from content loaded on activation.
[Diátaxis](https://diataxis.fr/start-here/) distinguishes different needs for
documentation. These are useful precedents, not prescriptions for a single
organization of this collection.

## 1. Keep the team directed toward lasting value

**You must preserve the intent of the directive while continually choosing
work that advances it. Test whether the team's outcomes remain useful and
redirect effort when they do not.**

The product must equip you to:

- Translate purpose, intended beneficiaries and constraints into operating
  direction and observable outcomes.
- Select worthwhile work against alternatives, uncertainty and available
  capacity; keep a supply of justified next actions.
- Compare realized value with expectations and detect drift before activity
  becomes a substitute for progress.
- Propagate changed direction into commitments, criteria, roles and context.
- Retire exhausted or ineffective work and renew the team's approach to its
  continuing directive.

For indefinite pursuit, build the capacity to select and reassess work as
well as execute it. Completion of one task must leave the team able to
recognize and pursue its next worthwhile contribution.

## 2. Build and adapt the organization

**You must shape the team's roles, models, tools and coordination around the
work. Give each responsibility a capable owner and revise the arrangement as
the team's demands and capabilities change.**

The product must equip you to:

- Choose single-agent execution, tools, fixed workflows or delegation for
  each class of work within the continuing team.
- Establish responsibilities, decision rights, inputs, outputs and durable
  ownership; distinguish persistent roles from temporary assistance.
- Separate work where independent effort helps and integrate it where
  dependencies demand shared judgment.
- Preserve useful expertise and disagreement when combining contributions.
- Add, combine, replace and retire roles without losing commitments or
  accumulated knowledge.

For indefinite pursuit, make organizational adaptation an operating
capability. A roster that succeeds on an initial workload must remain open
to revision as the directive generates new demands.

Controlled results show that architecture benefits depend on task structure
and that free interaction can dilute expertise. Use these findings to test
arrangements under your conditions.
[Scaling Agent Systems, v3](https://arxiv.org/abs/2512.08296v3);
[Teams Hold Experts Back, v4](https://arxiv.org/abs/2602.01011v4).

## 3. Optimize agent context and memory

**You, your team and your apparatus must track, test, cultivate and optimize
agent context and memory. Tailor every loaded context to the work before it,
preserve what future work needs and verify that changes improve behavior.**

The product must equip you to:

- Design what each role and run receives, can discover and retrieves when
  needed, including instructions, skills, references, state and tool output.
- Author and test context that contributes useful expertise and directs the
  agent toward the intended result.
- Maintain provenance and freshness; reconcile stale, conflicting or
  redundant information before it degrades decisions.
- Preserve commitments, evidence and necessary reasoning across compaction,
  interruption and session changes.
- Cultivate shared and role-specific memory, retaining useful experience
  while controlling contradiction, accumulation and retrieval cost.
- Reevaluate context after changes to the task, model, tools or harness.

For indefinite pursuit, optimize the continuing flow of information as well
as the initial prompt. Measure what agents actually receive, retain and use
across many runs, and correct failures at their source.

Curated skills can help, while public skill studies also find little benefit
or negative effects. Establish benefit against a baseline on the consuming
model and harness; relevant content alone does not prove useful context.
[SkillsBench, v4](https://arxiv.org/abs/2602.12670v4);
[SWE-Skills-Bench](https://arxiv.org/abs/2603.15401v1);
[Signal or Noise?](https://arxiv.org/abs/2608.23067v1).

## 4. Turn direction into coordinated work

**You must turn commitments into accepted results and keep the whole team
coordinated as work progresses, dependencies change and sessions end.**

The product must equip you to:

- Decompose selected work into executable commitments with owners, readiness
  conditions, dependencies and observable completion criteria.
- Coordinate independent efforts and resolve conflicts before integration.
- Reconcile reported progress with actual artifacts and current state.
- Deliver outputs where their consumers can find, interpret and use them.
- Carry work across sessions and ownership changes with actionable handoffs.
- Revise or cancel affected commitments when direction or assumptions change.

For indefinite pursuit, maintain coordination across successive projects and
generations of agents. Detect stranded dependencies and missing deliveries
even when every participant reports success or no new message arrives.

MAST supplies failure cases across system design, inter-agent alignment and
verification that can inform this work. Test remedies against the failures
they are intended to correct. [MAST, v3](https://arxiv.org/abs/2503.13657v3).

## 5. Establish and maintain justified confidence

**You must establish evidence that the team produces useful outcomes,
operates reliably and improves when changed. Make that evidence strong
enough for the decisions it supports and keep testing it against reality.**

The product must equip you to:

- Define acceptance criteria and evaluation methods suited to intended use.
- Evaluate outputs, coordination, strategic choices and operating capability.
- Calibrate reviewers and verifiers; investigate disagreement with observed
  results and expose shared blind spots.
- Compare changes against baselines, repeat trials and retain failures.
- Test robustness, recovery, drift and failure consequences alongside quality,
  time, cost and human intervention.
- State the conditions and observation period behind every reliability claim.

For indefinite pursuit, use ongoing evidence to renew confidence. Extend
evaluation across repeated operation and changing conditions; a successful
task or finite trial cannot establish unlimited future reliability.

Reliability research distinguishes repeatability, robustness and predictable
failure from average task accuracy, within a limited set of evaluated
settings. [Agent Reliability, v3](https://arxiv.org/abs/2602.16666v3).

## 6. Make authority and interfaces work

**You must make decision and action boundaries explicit, keep necessary
information moving and establish effective participation by humans and
outside systems. Operate within the authority your team actually holds.**

The product must equip you to:

- Map identity, permissions, decision rights and external commitments.
- Separate useful incoming information from instructions authorized to
  change the team's behavior.
- Design channels that deliver decisions, requests and notifications to
  their intended recipients and expose failed delivery.
- Give a responsible decision-maker the evidence and context needed to act.
- Distinguish standing controls, temporary calibration and missing
  capabilities; improve each through its appropriate authority.
- Identify human dependencies and establish continuity when a person is
  unavailable.

For indefinite pursuit, prevent quiet dependence on someone remembering to
intervene. Make necessary human contributions visible, dependable and
proportionate as the team's autonomy develops.

Apply the consuming system's instruction hierarchy and enforced controls.
Protocol guidance helps distinguish identity, access and intended authority.
[MCP security best practices](https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices).

## 7. Sustain operation and control resources

**You must keep the team able to pursue its directive, detect and recover
from failure, and manage the resources that continuing operation requires.**

The product must equip you to:

- Establish durable execution, operating visibility and reliable wake and
  continuation mechanisms.
- Distinguish useful activity, intentional waiting, blocked work and failure.
- Detect stalled capabilities, missing signals and repeatedly failing work.
- Recover within clear authority and retry limits; escalate when the next
  recovery step requires a different capability or decision.
- Preserve recoverable state through interruptions, outages and migrations.
- Allocate capacity and control cost in relation to useful outcomes.
- Maintain visibility of aging dependencies and restore readiness after
  interruption.

For indefinite pursuit, design continuity across task boundaries, resource
windows and failures. Bound individual actions and repair attempts while
maintaining responsibility for the team's continuing ability to act.

## 8. Learn and evolve without losing what works

**You must turn experience and new research into better future behavior.
Cultivate the team and its apparatus, verify improvements and preserve the
capabilities that change could otherwise damage.**

The product must equip you to:

- Investigate repeated failures and compare plausible causes before adopting
  a remedy.
- Turn observations into scoped changes with observable expected effects.
- Test transfer beyond the originating case and detect regressions.
- Decide which improvements belong to a task, role, team or shared library.
- Follow changes in research, models, tools and operating conditions; update
  affected methods and compatibility claims.
- Consolidate accumulated guidance and retire superseded advice while
  preserving its evidence.

For indefinite pursuit, make adaptation itself dependable. Retaining a
lesson or rewriting instructions is only a step; establish that later work
actually improves and that the improvement survives further change.

Transfer research distinguishes encoding, retrieving and using experience.
Engineering accounts also show that model improvements can remove the need
for earlier scaffolding. [EvoAgentBench](https://arxiv.org/abs/2607.05202v1);
[Harness design for long-running applications](https://www.anthropic.com/engineering/harness-design-long-running-apps).

## Turn the capabilities into usable guidance

Each skill must give a leader a method for a recognizable task or decision:
the applicable conditions, needed inputs, concrete actions, intended result
and evidence for judging whether it worked. Its supporting knowledge must
explain the basis, limitations and observations that should change the
recommendation. Where evidence is incomplete, provide a scoped action or
experiment that can produce a justified next decision.

Preserving direction, for example, requires different procedures under
different conditions:

| Condition | Action | Result |
|---|---|---|
| No team exists | Establish operating direction, authority, organization and initial commitments. | A team ready to begin justified work. |
| An ordinary run begins | Restore commitments, inspect relevant changes and act. | Progress on the directive or an intentional wait with a reliable continuation condition. |
| Direction changes during active work | Reconcile affected commitments, criteria, roles and context. | The team acts on current direction and resolves conflicts. |
| Outcomes no longer justify effort | Reassess value and alternatives; redirect or retire ineffective work. | Renewed progress toward the continuing directive. |

Reading the directive contributes to all of these procedures. First-time
setup and recurring leadership remain distinct even when they draw on the
same knowledge. Concrete long-running harnesses illustrate the need to
separate initialization from continuation.
[Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).

## Develop and test the collection

Translate each research finding from its source conditions into the team's
operating conditions. Record the source task, horizon, model, harness and
success measure; identify the transferable mechanism; adapt it for continuing
work; and test the resulting guidance. Follow both new research and use in
teams so that the collection changes with the field.

Evaluate discovery separately from behavioral benefit. Test candidate views
and useful combinations over the same content, including requests for which
no skill should load. Keep categories and relationships revisable. The
current [layout](LAYOUT.md) distinguishes artifact types; additional
classification and view mechanisms should follow demonstrated needs.

The context, intention and organization lenses remain initial views to
explore alongside occasions, lifecycle, architecture and failure modes. A
knowledge entry can participate in several of them without duplicating its
substance or evidence.

Begin with the foundational skill of writing instructions that other agents
consume. Team leaders need this expertise to transfer intent and knowledge;
the collection needs it to author all its guidance. Develop a method for
preserving requirements, selecting context, writing precise instructions,
removing padding and testing downstream behavior. The
[draft authoring skill](skills/writing-agent-instructions/SKILL.md) and its
[evaluation protocol](knowledge/evaluating-instruction-authoring.md) begin
that work. Broader topic exemplars follow calibration of this foundation.
The outline remains a provisional capability map, not an accepted taxonomy
or a validated set of skills.

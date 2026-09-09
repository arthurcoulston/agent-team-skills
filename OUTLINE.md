---
status: draft
revised: 2026-09-09
---

# Outline — knowledge for leading agent teams

This collection helps agents create, lead and improve teams that work across
tasks and sessions. It serves founders, ongoing team leaders and leaders
coordinating several teams. Their tools, models, authority and relationship
to humans may differ.

The proposed structure separates three jobs:

- **Coverage:** a map of enduring responsibilities shows what the collection
  needs to know and where its evidence is missing.
- **Action:** skills help with specific decisions or procedures under stated
  conditions. Their entrypoints support selective discovery and loading.
- **Navigation:** paths such as founding a team, changing direction or
  recovering from a failure connect the relevant material.

The eight areas below are a provisional coverage map. They are neither eight
skills nor eight stages every team passes through. A skill may draw on several
areas, and a reader should be able to find it without first learning this map.

## Why this structure

A lifecycle explains how to get started, but recurring responsibilities do
not remain in one phase. A catalog of occasions is useful when a condition
and a result are clear, but broad subjects such as context and authority are
not occasions. A technical architecture explains mechanisms but can hide
purpose and strategic choices. A failure taxonomy helps diagnose problems
but is incomplete as a guide to building a successful team.

A map plus task entrypoints is the current recommendation because it keeps
coverage visible while allowing several routes into the material. Its
strongest simpler rival is a searchable task catalog with labels. The map
must earn its additional maintenance cost through clearer coverage and
navigation; no comparative navigation test has yet established that it does.

The distinction between reference, explanation and task assistance has a
useful precedent in [Diátaxis](https://diataxis.fr/start-here/). The
[Agent Skills specification](https://agentskills.io/specification) separately
defines discovery metadata and content loaded on activation. These support
separating the jobs; they do not prove this particular taxonomy.

## 1. Direction, priorities and value

**What is worth pursuing, for whom, and when should it change or end?**

Cover purpose, intended beneficiaries, desired outcomes, constraints,
competing opportunities, priority selection, uncertainty and the comparison
of expected with realized value. Include the choice to continue, redirect,
defer or stop existing work. Distinguish choosing a worthwhile outcome from
executing an already selected commitment.

Candidate decisions and procedures:

- Interpret a new or changed directive and identify unresolved assumptions.
- Compare proposed work with alternatives and available capacity.
- Reassess continuing work against outcomes and its opportunity cost.
- Translate a change of direction into affected commitments and criteria.

Open research: how can a team recognize poor external value when its internal
execution looks successful? How should it compare uncertain opportunities
without turning a rubric into an unjustified numerical ranking? Which
decisions remain with a human or another authority?

## 2. Organization and delegation

**What arrangement of agents, tools and workflows can do this work well?**

Cover the choice between one agent, a fixed workflow and a team; task
decomposition; persistent and temporary responsibilities; ownership;
specialization; model selection; coordination topology; and integration of
expert contributions. Include adding, combining and retiring roles.

Candidate decisions and procedures:

- Decide whether delegation is likely to help this task.
- Define responsibilities, inputs, outputs and decision rights.
- Choose how independent work is combined and disagreement resolved.
- Reconsider the organization after a task or model change.

Open research: when does context separation repay coordination cost? How can
a team use its strongest expertise without losing useful challenge? Which
responsibilities need persistent state?

Architecture benefits vary with task structure in controlled studies, and
free interaction can dilute expert contributions. These are reasons to test
arrangements rather than prescribe a universal roster.
[Scaling Agent Systems, v3](https://arxiv.org/abs/2512.08296v3);
[Teams Hold Experts Back, v4](https://arxiv.org/abs/2602.01011v4).

## 3. Context and memory

**What must each participant know, where does it come from, and what survives?**

Cover standing instructions, selective retrieval, skill descriptions,
supporting references, tool output, shared and private state, provenance,
freshness, compaction and continuity across sessions. Distinguish current
facts, historical evidence, pending work and reusable procedural knowledge.

Candidate decisions and procedures:

- Design what a role or task can discover and what it actually loads.
- Write and test a skill entrypoint and its supporting material.
- Restore work after a context reset without treating an old summary as
  current reality.
- Reconcile contradictory or stale context and preserve necessary evidence.

Open research: which knowledge adds value beyond the consuming model? When
does instruction help, distract or constrain a better solution? What must a
summary retain for later decisions? How should shared knowledge remain
consistent while different agents receive different slices?

Curated skills can improve performance, while public skill studies also find
little benefit or negative average effects. Applicability must therefore
include the task, model and harness, with a no-skill baseline.
[SkillsBench, v4](https://arxiv.org/abs/2602.12670v4);
[SWE-Skills-Bench](https://arxiv.org/abs/2603.15401v1);
[Signal or Noise?](https://arxiv.org/abs/2608.23067v1).

## 4. Work and coordination

**How do commitments become accepted results across dependencies and sessions?**

Cover decomposition of selected work, plans, readiness, dependencies,
ownership, shared-state updates, handoffs, integration, acceptance,
cancellation and propagation of changed decisions. Distinguish an agent's
report, a persisted artifact and a result its consumer can actually use.

Candidate decisions and procedures:

- Turn an objective into work with observable completion conditions.
- Coordinate independent work while exposing dependencies and conflicts.
- Reconcile claimed progress with actual artifacts and current state.
- Deliver a handoff that a fresh recipient can act on.
- Revise or cancel affected work when assumptions change.

Open research: how can a coordinator detect missing work or silent failure?
What is the right balance between shared state and messages? Who resolves a
disagreement about completion or meaning across team boundaries?

The MAST failure taxonomy gives useful diagnostic coverage of design,
alignment and verification problems. It is a source of cases to investigate,
not proof of a particular remedy. [MAST, v3](https://arxiv.org/abs/2503.13657v3).

## 5. Evaluation and assurance

**What evidence establishes value, correctness, reliability and improvement?**

Cover acceptance criteria, task and system evaluation, verifier quality,
independent review, repeated trials, robustness, failure severity, calibration,
trace inspection, external feedback and cost. Evaluate the collection's own
guidance as well as the teams that use it.

Candidate decisions and procedures:

- Define evidence appropriate to the intended use and consequences.
- Test a proposed skill, context change or team arrangement against a baseline.
- Diagnose disagreement between a grader, a report and an actual result.
- Decide whether evidence supports release, continued use or revision.

Open research: how should a team evaluate work that lacks a deterministic
answer? How can reviewers avoid shared blind spots? What evidence supports
claims about a continuing organization rather than one completed task?

Repeated success, robustness and predictable failure need attention beyond
mean task accuracy. The available studies still cover a limited range of
tasks and scaffolds. [Agent Reliability, v3](https://arxiv.org/abs/2602.16666v3).

## 6. Authority and interfaces

**Who may decide or act, and how do humans and outside systems participate?**

Cover permissions, identity, trusted instructions versus external data,
delegated authority, human direction and calibration, notifications,
escalation, external commitments and interfaces with other teams. Distinguish
temporary calibration gates from standing authority and capability limits.

Candidate decisions and procedures:

- Map the actual decision and action boundaries of a consuming system.
- Design an external channel that separates information from authorization.
- Request a decision with enough context for the responsible party to act.
- Review whether a gate is still serving its stated purpose.

Open research: how does necessary human involvement remain effective as
routine work becomes autonomous? How does a team detect that a decision was
not received? What can be delegated when the human is absent?

The collection supplies expertise, not additional permission. Its guidance
must respect the consuming system's instruction hierarchy and enforced
controls. Protocol guidance illustrates why identity, access and intended
authority need separate treatment.
[MCP security best practices](https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices).

## 7. Operations and resources

**How does work keep running, pause, recover and fit available capacity?**

Cover runtime liveness, durable execution, scheduling, wake conditions,
blocked and idle states, interruption, bounded retries, repair, cost,
latency, capacity and operating visibility. Separate a healthy pause from a
failure to notice available work.

Candidate decisions and procedures:

- Establish readiness and completion conditions for an operating loop.
- Diagnose a stalled or repeatedly failing capability.
- Recover within authority and stop when the repair boundary is reached.
- Allocate capacity and measure useful outcomes per unit of effort.
- Arrange continued visibility of unresolved dependencies.

Open research: how should urgency, aging and change signals interact? What
should survive an interrupted action? When should a capability retry, change
approach, wait or escalate? How do operating costs affect strategic choices?

## 8. Learning and evolution

**How does experience or new knowledge improve future behavior without degrading it?**

Cover incident learning, causal hypotheses, external research, proposed
changes, transfer across tasks and teams, regression detection, model and
harness upgrades, source freshness, compatibility and retirement of advice.
Separate retaining a memory from establishing an improvement.

Candidate decisions and procedures:

- Investigate a repeated failure and compare plausible causes.
- Turn an observation into a scoped, testable change.
- Test whether a local improvement transfers and whether prior behavior holds.
- Reassess guidance when its source, model, tools or conditions change.
- Retire superseded knowledge while preserving its evidence.

Open research: how can a team avoid accumulating rules that help only their
originating case? How does it preserve useful detail without accumulating
contradictions? Which improvements belong locally and which generalize?

Recent transfer research distinguishes encoding experience, finding it later
and using it effectively; improvement is not automatic. Engineering accounts
also show that stronger models can make earlier scaffolding unnecessary.
[EvoAgentBench](https://arxiv.org/abs/2607.05202v1);
[Harness design for long-running applications](https://www.anthropic.com/engineering/harness-design-long-running-apps).

## From coverage to a usable skill

A candidate skill needs a recognizable task or decision, applicable
conditions, needed inputs, a useful result and an observable way to evaluate
it. These are design questions, not a new mandatory file schema. Its
supporting knowledge carries evidence, counterexamples and uncertainty.

For example, **understanding direction is an enduring responsibility**.
It can lead to different procedures:

| Condition | Task | Expected result |
|---|---|---|
| No team exists | Interpret purpose, test the need for a team and establish initial commitments. | An initial operating arrangement justified against alternatives and constraints. |
| An ordinary run begins | Restore current commitments and inspect relevant changes. | The next authorized action, or a justified wait. |
| Direction changes during active work | Identify consequences and reconcile affected commitments. | Updated work, criteria and context, with conflicts resolved or made explicit. |
| Outcomes no longer justify effort | Reassess continued value against alternatives. | A reasoned continue, redirect, defer or stop decision. |

Reading the directive is an input to these tasks. It does not imply that a
founding procedure should run at every session start. Initial setup and
continuation are distinct even in concrete long-running coding systems.
[Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).

## Routes through the same knowledge

Founding, routine operation, changing direction, diagnosing a failure and
evaluating an improvement are candidate paths. Each can cross several areas.
The initial conceptual lenses remain useful:

- **Context:** how instructions, facts, state and learning reach participants.
- **Intention:** how purpose informs choices, work and assessment of value.
- **Organization:** how responsibilities, authority and dependencies connect.

Applicability can vary by scope, work type, maturity, available tools, model
and human involvement. These are separate from evidential confidence: strong
evidence under narrow conditions is still narrow.

The current [layout](LAYOUT.md) distinguishes artifact types. It does not yet
encode this coverage map or these paths. Candidate labels and relationships
should be tried on actual entries before extending the schema or generating
new diagrams. A concept's subject, a skill's trigger and a path's order must
not silently become the same relation.

## Evidence and validation still needed

The strongest gaps concern strategic selection, external value, sustained
organizational reliability and changing human dependencies. Many public
results concern bounded tasks, coding systems or simulations. They cannot
establish that a team will remain useful and self-sustaining over months.

Before adopting this structure, compare it with a task catalog and an
occasion catalog using the same content. Test ordinary requests, ambiguous
requests and cases where no skill should load. Measure discovery separately
from the effect of the selected guidance, and compare behavior against no
guidance under recorded model and harness conditions.

Two useful probes are **evaluating a context or skill change** and
**reconciling active work after a change of direction**. They test different
parts of the proposed structure and are candidates, not settled skill
boundaries. A correct file format or a convincing walkthrough does not
establish that either improves an agent's decisions.

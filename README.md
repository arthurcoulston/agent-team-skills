# Agent team skills

Skills and supporting knowledge for **agents leading teams in autonomous
pursuit of open-ended directives over an indefinite operating life**. Build
the capacity to sustain useful work, preserve direction, recover from failure
and improve as conditions change.

This collection follows the advancing frontier of an emerging field with
humility, curiosity and ambition. Research on bounded tasks supplies valuable
methods; applying them to continuing teams requires deliberate translation
and testing. The product must turn that work into expertise leaders can act
on, with clear evidence and conditions for its use.

You are writing instructions and context for another agent to consume.
That is the authoring contract for every part of this collection, including
supporting knowledge and evidence. Make the agent's responsibilities,
decisions and basis for action clear. Keep evidence identifiable as evidence.
Human readers inspect and improve the same material. A consuming team adopts
it selectively under its own authority, runtime and operating arrangements.

## Status

**Pre-v0.1, private.** The scaffold is being built; there is no collection to
install yet and no compatibility is claimed. One worked example of each kind
of file is in the tree to show the shape — see [LAYOUT.md](LAYOUT.md). This repository is intended for
publication once a v0.1 collection exists and has been reviewed — see
[PUBLIC-BOUNDARY.md](PUBLIC-BOUNDARY.md) for what is and is not intended to
appear here, and for the licensing proposal.

The repository name is a working name and may change before publication.

[OUTLINE.md](OUTLINE.md) proposes capabilities the product must enable.
Multiple categories, tags and views over the same knowledge remain open;
the outline does not settle the taxonomy or skill boundaries.

## Layout

[LAYOUT.md](LAYOUT.md) states the conventions in full. In short: skill
entrypoints in the open [Agent Skills](https://code.claude.com/docs/en/skills)
format under `skills/`; supporting knowledge entries with stable identifiers,
typed relationships and source/review metadata under `knowledge/`; and the
preserved readings and runs they rest on under `evidence/`. Behavioural cases under `cases/`, each a task run with and
without the skill, with both answers preserved as evidence. Generated maps
under `views/`, drawn from those same relationships rather than beside them —
see [views/worked-example.md](views/worked-example.md). `node
tools/check.mjs` checks a tree against those conventions, `node
tools/run-case.mjs` runs a case, and `node tools/build-views.mjs` redraws the
maps, all with nothing to install.

## Contributing

[CONTRIBUTING.md](CONTRIBUTING.md) states what a useful contribution looks
like and what a change has to demonstrate before it is accepted.

## Foundational work in progress

[Writing agent instructions](skills/writing-agent-instructions/SKILL.md) is
the first substantive skill under development: writing standing guidance,
skills, task briefs and handoffs that other agents consume. Its
[research basis](knowledge/instruction-authoring-basis.md) and
[evaluation protocol](knowledge/evaluating-instruction-authoring.md) separate
the evidence from the proposed method. A
[first subagent pilot](evidence/instruction-authoring-pilot-2026-09-09.md)
changed authored text but showed no downstream advantage on its two tasks.
The skill remains draft, with broader validation outstanding.

[Coordinating delegated work](skills/coordinating-delegated-work/SKILL.md) is
the second substantive candidate: deciding whether to delegate a bounded piece
of work, dividing and assigning it, and integrating and verifying what returns.
Its basis is split across
[the delegation decision](knowledge/delegation-decision-basis.md),
[the failure surface and which controls were tested](knowledge/coordination-failure-controls.md)
and [what integration loses](knowledge/integrating-delegated-contributions.md),
with [a view](views/coordinating-delegated-work.md) over the five source
readings behind them. It is draft and awaiting independent review; no
behavioural case has been run against it, so nothing here shows it changes what
a leader does.

[Handing work across sessions](skills/handing-work-across-sessions/SKILL.md) is
the third substantive candidate: what a run must leave behind when it ends, and
what a later run must check before acting on that record. Its basis is split
between [what a session boundary costs](knowledge/session-boundary-losses.md)
and [why an inherited record has to be checked](knowledge/verifying-an-inherited-record.md).
It is draft and awaiting independent review, and no behavioural case has been
run against it either.

[Choosing what to work on next](skills/choosing-what-to-work-on-next/SKILL.md)
is the fourth substantive candidate: selecting the next work under a standing
directive, against the alternatives declined, and recognising work that should
be retired or redirected. It rests on
[what is known about an agent choosing its own work](knowledge/choosing-work-under-a-directive.md)
and [which signals say work should end](knowledge/retiring-and-redirecting-work.md).
The evidence behind it is thinner than for the other three, and the skill says
so: a 1,547-paper survey of long-horizon agents does not treat goal selection
as part of the agent's decision space at all, so much of the method is reasoned
transfer marked as such. It is draft and awaiting independent review, with no
behavioural case run against it.

[Reviewing another agent's work](skills/reviewing-another-agents-work/SKILL.md)
is the fifth substantive candidate: one independent judgment of one
contribution — what a review must establish, who can give it, what the verdict
attaches to, and what a pass does not show. It rests on
[what reviewer independence buys](knowledge/choosing-an-independent-reviewer.md)
and
[what a review verdict establishes](knowledge/what-a-review-verdict-establishes.md).
This is the best-supplied of the five: judge agreement corrected for chance,
correlated errors between reviewers, and one measurement that inverts an
intuition — asking a reviewer to explain and repair as well as judge sharply
increases how often it rejects correct work. It is draft and awaiting
independent review, with no behavioural case run against it.

[Deciding what needs a human](skills/deciding-what-needs-a-human/SKILL.md) is
the sixth substantive candidate: the act-or-ask decision for a team holding real
but bounded authority — classifying what is actually blocking it, timing the
request, shaping it to be decided once, staying useful while unanswered, and
surfacing the human help it depends on without having declared it. It rests on
[what is known about an agent noticing it should not act](knowledge/recognising-the-authority-boundary.md)
and [what asking a person costs](knowledge/what-asking-a-human-costs.md). The
finding that shapes it most runs against intuition: modelling the recipient as a
person with finite attention makes escalating everything worse for safety than
escalating selectively — though that one is a simulation and says so. It is
draft and awaiting independent review, with no behavioural case run against it.

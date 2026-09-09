# Agent team skills

Skills and supporting knowledge for **agents that lead long-horizon agent
teams** — selecting worthwhile work, bounding it, reviewing it independently,
carrying context across sessions, and improving how the team operates.

The collection is written to be loaded selectively by an agent and read
directly by a human. Every recommendation carries its evidence, how settled
it is, and the conditions under which it applies. A consuming team adopts it
under its own authority: nothing here assumes our runtime, our ticket system,
or our chain of command.

## Status

**Pre-v0.1, private.** The scaffold is being built; there is no collection to
install yet and no compatibility is claimed. One worked example of each kind
of file is in the tree to show the shape — see [LAYOUT.md](LAYOUT.md). This repository is intended for
publication once a v0.1 collection exists and has been reviewed — see
[PUBLIC-BOUNDARY.md](PUBLIC-BOUNDARY.md) for what is and is not intended to
appear here, and for the licensing proposal.

The repository name is a working name and may change before publication.

## Layout

[LAYOUT.md](LAYOUT.md) states the conventions in full. In short: skill
entrypoints in the open [Agent Skills](https://code.claude.com/docs/en/skills)
format under `skills/`; supporting knowledge entries with stable identifiers,
typed relationships and source/review metadata under `knowledge/`; and the
preserved readings and runs they rest on under `evidence/`. Behavioural cases under `cases/`, each a task run with and
without the skill, with both answers preserved as evidence. `node
tools/check.mjs` checks a tree against those conventions and `node
tools/run-case.mjs` runs a case, both with nothing to install. Still
arriving: generated human-readable views over the same identifiers the
agents use.

## Contributing

[CONTRIBUTING.md](CONTRIBUTING.md) states what a useful contribution looks
like and what a change has to demonstrate before it is accepted.

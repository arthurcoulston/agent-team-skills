---
cap_tokens: 1200
---
# DEV — agent-team-skills

The public product of R-14: skills and supporting knowledge for leading
long-horizon agent teams. The plan, directive and research live in Crew at
the Crew estate under its R-14 project directory; the work is tracked under project
`R-14`. **Nothing from those two places is copied here** — the boundary is
[PUBLIC-BOUNDARY.md](PUBLIC-BOUNDARY.md), and it is held from the first
commit because the whole history is intended for publication.

## The invariant a session would get wrong

This repository is private *now* and public *later*, with no rewrite in
between. So every commit is written as if it were already public: no local
paths, no credentials, no operating records, no other person's context. The
cost of getting that wrong is not a bad commit, it is a history that cannot
be published without destroying its provenance.

Second: installation must work from relative references. A consuming team
clones this repo and nothing else; anything that reaches for an absolute Crew
path is broken for every reader but us.

## State

Scaffold in progress under H-1165. Landed: the repository, its private
remote, the boundary and contribution documents, the skill/knowledge/
evidence layout with one worked example of each ([LAYOUT.md](LAYOUT.md)), and
the structural checks (`node tools/check.mjs`, proven red by
`node tools/check-fixtures.mjs`), and the behavioural baseline runner
(`node tools/run-case.mjs`) with one worked case. Not yet landed: the
diagramming foundation. The diagram
framework is Arthur's choice — surveyed with evidence and recommended to him,
never picked here (his direction, 2026-09-08); the same sitting established
that he is personally involved in every visual element.

Tooling is Node with no dependencies and no package.json: a consuming team
clones and runs, and `npm install` is not a step. The frontmatter parser in
`tools/check.mjs` is deliberately small and handles only the shapes LAYOUT.md
defines — a schema that outgrows it wants a real YAML dependency, not more
cases bolted onto it.

The boundary is enforced, not only written: the local-path scan lives in the
committed checker, with its patterns in `tools/local-path-patterns.txt` so
that stating a rule does not trip it. The fixtures are the only place a
machine-local path is committed on purpose.

The behavioural runner deliberately does two things a session may try to
"improve". It refuses to run without the model and harness identity, because
a result nothing can be compared against is not a baseline. And it does not
score — the record lands `verdict: unjudged` for a reviewer who did not run
it, because a run graded by the machinery that produced it measures nothing.
Both are load-bearing; adding a scorer here would quietly turn evidence into
a self-assessment.

The example content carries `status: exemplar` on purpose. It was written to
fix the structure, and the research team reviews its claims like any other
entry — a session should not treat it as ratified guidance, or quietly build
more content in its image without that review.

## Remote

`github.com/arthurcoulston/agent-team-skills`, **private**. Sync with Crew's `tools/publishing/sync.mjs`, giving it this repository's
absolute path — a bare name resolves against the working directory and can
report a different repository synced. It refuses to push anywhere it cannot
read as private. Publication, when it comes, goes through Crew's
`PUBLISHING.md`, not through sync.

Neither path is written here. This file is inside a repository whose whole
history is meant for publication, so it carries no path from the machine it
was written on — Crew's FLEET.md holds the local locations.

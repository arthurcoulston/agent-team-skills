---
cap_tokens: 1200
---
# DEV — agent-team-skills

The public product of R-14: skills and supporting knowledge for leading
long-horizon agent teams. The plan, directive and research live in Crew at
`~/projects/crew/projects/r14/`; the work is tracked in Helmo under project
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
remote, the boundary and contribution documents, and the skill/knowledge/
evidence layout with one worked example of each ([LAYOUT.md](LAYOUT.md)).
Not yet landed: the structural checks, the behavioural baseline runner, and
the diagramming foundation. The diagram
framework is Arthur's choice — surveyed with evidence and recommended to him,
never picked here (his direction, 2026-09-08); the same sitting established
that he is personally involved in every visual element.

Tooling leans Node, matching the rest of the estate, but the choice is made
by the first real check rather than declared here.

The example content carries `status: exemplar` on purpose. It was written to
fix the structure, and the research team reviews its claims like any other
entry — a session should not treat it as ratified guidance, or quietly build
more content in its image without that review.

## Remote

`github.com/arthurcoulston/agent-team-skills`, **private**. Sync with
`node ~/projects/crew/tools/publishing/sync.mjs /Users/arthurcoulston/projects/agent-team-skills`
— it refuses to push anywhere it cannot read as private. Publication, when it
comes, goes through Crew's `PUBLISHING.md`, not through sync.

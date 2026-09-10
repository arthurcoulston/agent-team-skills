# Layout

Seven kinds of file, seven directories, and one rule for how they refer to
each other.

    skills/<name>/SKILL.md    an entrypoint an agent loads
    knowledge/<id>.md         a supporting entry and its metadata
    cases/<id>.md             a task the guidance is run against
    evidence/<id>.md          a preserved record an entry rests on
    views/<id>.md             a generated map over the four above
    founder/<id>.md           sparse context a founder keeps loaded
    missions/<id>.md          a continuing directive and its operating bounds

Examples of every kind are in the tree. Their metadata distinguishes exemplar
records from draft candidates; presence in the repository is not acceptance.

## Research before product form

This layout describes the distributable collection. Keep working research
and private review records outside it. Bring in deliberately prepared
skills, supporting knowledge and evidence that stand alone for the consumer;
retained evidence is not a dump of the research workspace. Draft status
allows a public-safe candidate to be reviewed here before acceptance.
See [Contributing](CONTRIBUTING.md) for the research-to-product handoff.

## The installation unit is the whole repository

A consuming team clones the repository and points its agent at `skills/`.
Entrypoints reach out of their own directory into `knowledge/`, which the
Agent Skills convention of keeping supporting files inside the skill folder
would avoid — so this is a deliberate trade. Knowledge entries are shared by
several skills, and copying one into each skill that cites it forks the
evidence: a correction would then have to be found and applied in every copy,
and the generated views would disagree about which version is current. One
entry with many citers is the shape a single correction can reach.

The cost is real: a team cannot lift one skill directory out and have it
work. If that turns out to matter more than shared corrections do, the fix is
a packaging step that inlines an entry's citations into a standalone copy,
not a change to how the source tree is written.

## Paths are always relative

Every link in this repository resolves from the file it is written in. An
absolute path is broken for every reader except the machine it was written
on, and it is the failure that most quietly survives review.

## Skill entrypoints

`skills/<name>/SKILL.md`, in the open
[Agent Skills](https://code.claude.com/docs/en/skills) format: YAML
frontmatter with `name` (matching the directory) and `description`, then the
guidance as markdown.

The `description` is load-bearing rather than decorative — an agent decides
whether to open the skill from that line alone, so it states what the skill
does *and* the conditions under which it applies. See
[knowledge/skill-entrypoint-description.md](knowledge/skill-entrypoint-description.md),
which is both the entry explaining this and the example of a knowledge entry.

Keep the body short enough to be worth loading. Anything a reader needs only
sometimes belongs in a knowledge entry the body links to.

## Founder context

`founder/PROFILE.md` is sparse guidance a founder keeps loaded while skill
bodies remain selectively loaded from their index. Its frontmatter carries
`id`, `title`, `status`, `loading: always`, and typed relations recording the
skills from which each promotion came. A consuming agent's own profile still
governs identity, authority and boundaries.

## Missions

`missions/<id>.md`. A mission is a standing directive, not a task with a
terminal state. Its frontmatter carries `id`, `title`, `status`, and a
`difficulty` record with `assessed_on`, `band` and `basis`. The body carries
the directive, beneficiaries and value, starting circumstances and bounds,
the dated difficulty estimate, continuing progress and known hazards.

The target is Band B: plausibly just beyond the public frontier on the date
stated. That is a reasoned estimate, not a test result. Missions stay open
enough that a founder must discover the work, organization and route; they do
not hide access barriers such as identity, payments or legal authority inside
an apparent capability challenge.

## Knowledge entries

`knowledge/<id>.md`. The identifier is the filename stem, unique across the
directory, and it does not change once published: a superseded entry keeps
its id and gains a `supersedes` relation pointing at it from its replacement.
Renaming an entry breaks every citation and every generated view that names
it.

The frontmatter carries the metadata; the body carries the finding.

```yaml
id: skill-entrypoint-description
title: What a skill's description has to carry
status: exemplar          # exemplar | draft | accepted | superseded
relations:
  - type: applies_to      # applies_to | supports | depends_on | supersedes
    to: skill:writing-a-skill-entrypoint
sources:
  - title: Agent Skills documentation
    url: https://code.claude.com/docs/en/skills
    source_date: unknown  # a date, or unknown with a reason below
    evidence_date: 2026-09-08
    evidence: evidence:agent-skills-docs-2026-09-08
review:
  last_checked: 2026-09-08
  checked_by: mason
uncertainty: ...
applicability: ...
```

**The three dates are three different facts** and never collapse into one.
`source_date` is when the source was published or last revised. `evidence_date`
is when we read it and preserved what it said. `review.last_checked` is when
someone last confirmed the finding still holds. A source with no date on it
records `unknown`, and the entry says why — a missing date is a real property
of the source, and guessing one is worse than admitting it.

`uncertainty` and `applicability` also stay separate. How settled a finding
is and the conditions under which it holds are different questions, and a
single confidence number answers neither.

## Evidence records

`evidence/<id>.md`. A record of what a source actually said at the moment it
was read: the quoted material, where it came from, when it was read, and by
whom. It exists so a reviewer can check a claim against its basis without
refetching a page that may have changed, and so a later check can see what
changed.

Failed and negative results are preserved on the same terms as successful
ones. An evidence record is never edited to match a revised finding — a new
reading gets a new record, and the entry cites both.

## Behavioural cases

`cases/<id>.md`. One task, with the metadata a run needs and the rubric a
reviewer judges by. The frontmatter carries `id`, `title`, `status`, the
`skill:` ref the case is about, and `rubric`. The body carries a `## Task`
section, which is sent to the agent **verbatim** — what an operator reads as
the task is exactly what the model is given, with no assembly in between.

    node tools/run-case.mjs <case-id> --agent '<command>' --model '<model id>' \
         --harness '<name and version>' --by '<who ran it>'

The runner runs the case twice, once with the skill's text prepended to the
prompt and once without, and writes an `evidence/` record holding both
answers. The command is anything that reads a prompt on stdin and writes an
answer on stdout, so the collection assumes no particular harness.

Three things about it are deliberate:

- **It refuses to run without the model, the harness and the runner's name.**
  A result whose identity is unknown cannot be compared with a later one, so
  it is not a baseline; a guessed identity is worse than a refusal.
- **It records; it does not score.** The record lands `verdict: unjudged`,
  and a reviewer who did not run it reads both answers against the rubric.
  A run graded by the machinery that produced it is not a measurement.
- **Failures are preserved on the same terms as successes.** A run that
  errors or times out is written into the record with its exit code and its
  stderr. A baseline that quietly drops its failures overstates what the
  collection has been shown to do.

The with-skill variant puts the skill's body into the prompt. That is not the
same as a harness deciding on its own to load the skill, and a run record
says so: it is evidence about the guidance reaching the model, not about the
description getting it opened.

## Views

`views/<id>.md`. A view is a **definition of what to draw**, not a drawing.
Its frontmatter says where to start and how far to walk; the diagram and the
link index underneath it are generated from the same typed relations the
checks resolve, so a map and its records cannot quietly disagree.

```yaml
id: worked-example
title: How the worked example hangs together
status: exemplar
view:
  include:                            # the entries to start from
    - skill:writing-a-skill-entrypoint
  depth: 2                            # steps of relationship to follow
  follow: [applies_to, sources]       # optional; every edge by default
```

Selection walks relationships in **both directions**. A knowledge entry
records `applies_to` pointing at a skill, so a view seeded with the skill
would otherwise reach nothing; `depth` counts steps outward from the seeds,
whichever way each edge is written.

    node tools/build-views.mjs             regenerate every view
    node tools/build-views.mjs --check     report views that have drifted

Everything below the generated marker belongs to the generator: it is
rewritten on every run, and `check.mjs` reports a committed block that is not
what the records produce. Write the prose that explains the view above the
marker, and if a new view has no marker yet the generator adds one.

**The diagram's nodes are not links, and no framework would make them so.**
GitHub renders Mermaid inside a sandboxed frame that its own content policy
stops from navigating, and a committed SVG is not inlined either — it is
handed to another domain in a frame. So the navigation is the generated index
of ordinary markdown links underneath the picture, which works in a clone, in
an editor, and on GitHub alike. Kinds are told apart by node **shape** rather
than colour, so a view reads the same in either GitHub theme.

## Referring between files

Two forms, for two readers.

- **Typed refs**, in frontmatter, for the checks and the generated views:
  `<kind>:<id>`, resolving as `knowledge:x` → `knowledge/x.md`,
  `evidence:x` → `evidence/x.md`, `case:x` → `cases/x.md`,
  `view:x` → `views/x.md`, `skill:x` → `skills/x/SKILL.md`, and
  `founder:x` → `founder/x.md`, and `mission:x` → `missions/x.md`.
- **Relative markdown links**, in prose, for a person following the argument.

Where a relation and a prose link mean the same thing, both are present and
they agree. The structural checks resolve the typed refs and flag a prose
link into this repository that no relation records in either direction; that
disagreement is usually a citation someone added to the text and forgot to
record.

Every place a typed ref may appear is listed once, in `tools/collection.mjs`.
The checker and the view generator both read the tree through that list, so a
new kind of reference reaches the checks and the maps together rather than
being added to one and forgotten in the other.

Everything on this page is enforced by `node tools/check.mjs`, which needs
nothing installed. `node tools/check-fixtures.mjs` shows each of its rules
failing on a tree broken for that purpose — see
[tools/fixtures/README.md](tools/fixtures/README.md).

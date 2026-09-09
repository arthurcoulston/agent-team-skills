# Layout

Three kinds of file, three directories, and one rule for how they refer to
each other.

    skills/<name>/SKILL.md    an entrypoint an agent loads
    knowledge/<id>.md         a supporting entry and its metadata
    evidence/<id>.md          a preserved record an entry rests on

One worked example of each is in the tree already. They exist to show the
shape: their claims are exemplars, not ratified guidance, and they say so in
their own metadata.

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

## Referring between files

Two forms, for two readers.

- **Typed refs**, in frontmatter, for the checks and the generated views:
  `<kind>:<id>`, resolving as `knowledge:x` → `knowledge/x.md`,
  `evidence:x` → `evidence/x.md`, `skill:x` → `skills/x/SKILL.md`.
- **Relative markdown links**, in prose, for a person following the argument.

Where a relation and a prose link mean the same thing, both are present and
they agree. The structural checks resolve the typed refs and flag a prose
link into this repository that no relation records; that disagreement is
usually a citation someone added to the text and forgot to record.

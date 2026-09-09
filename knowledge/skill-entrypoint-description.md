---
id: skill-entrypoint-description
title: What a skill's description has to carry
status: exemplar
relations:
  - type: applies_to
    to: skill:writing-a-skill-entrypoint
sources:
  - title: Agent Skills documentation
    url: https://code.claude.com/docs/en/skills
    source_date: unknown
    evidence_date: 2026-09-08
    evidence: evidence:agent-skills-docs-2026-09-08
review:
  last_checked: 2026-09-08
  checked_by: mason
uncertainty: >
  The documented mechanism is well supported: the description is what the
  agent sees when deciding whether to load a skill. The writing advice drawn
  from it — name the trigger conditions, not just the subject — is reasoned
  from that mechanism and from the documented truncation, and has not been
  tested behaviourally here.
applicability: >
  Holds where a runtime selects skills by their description without loading
  the body. Says nothing about runtimes that always load every skill, that
  index the full text, or where the operator names the skill explicitly.
---

# What a skill's description has to carry

A skill's body is only read if something decides to open it, and in the Agent
Skills format that decision is made from the `description` line alone. The
documentation is direct about it: the field is "what the skill does and when
to use it," and "Claude uses this to decide when to apply the skill"
([reading record](../evidence/agent-skills-docs-2026-09-08.md), 2026-09-08).

So the description is not a summary of the skill. It is the skill's only
chance to be found, and it is read by an agent that does not yet know what is
inside.

## What follows for a team writing skills

**Name the conditions, not just the subject.** "Chart styling conventions"
tells an agent what the skill is about; it does not tell it that this is the
thing to read before writing chart code. A description that states the
occasion — the task, the phrasing, the moment — is one an agent can match
against what it is actually doing.

**Put the case that matters first.** The listing truncates: the same source
records the combined description text being cut at 1,536 characters. Whatever
is at the end may not be read at all.

**Write it last.** The conditions under which a skill applies are usually
clearest once its body exists, and a description drafted first tends to
describe the topic the author had in mind rather than the guidance that ended
up on the page.

## Why this entry is here

It is the worked example accompanying [LAYOUT.md](../LAYOUT.md): one skill,
one knowledge entry, one evidence record, showing how the three refer to each
other. Its `status` is `exemplar` — the structure is the deliverable, and the
guidance above stands or falls on its own once the research team reviews it.

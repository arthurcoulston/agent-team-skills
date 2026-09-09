---
name: writing-a-skill-entrypoint
description: Use when writing or revising a skill entrypoint (a SKILL.md) that an agent will load on its own — covers what the description line has to carry so the skill gets found, and how much guidance belongs in the body versus a linked reference. Triggers on writing a new skill, a skill that exists but never gets loaded, or a skill body that has grown too long to be worth loading.
---

# Writing a skill entrypoint

An entrypoint has two jobs, and they fail in different ways: being loaded at
the right moment, and being worth the context once it is.

## Being loaded

The agent chooses from the `description` alone — it has not seen the body.
Write the line for that reader: state what the skill does **and the occasion
it applies to**, and put the case that matters most first, because the
listing truncates.

The common failure is a description that names the subject ("chart styling
conventions") instead of the trigger ("read before writing any chart code").
An agent matching its current task against the first cannot tell that it is
the one meant.

Draft the description after the body. What the skill actually turns out to
cover is rarely what was intended when the folder was created.

Details and the source behind this:
[knowledge/skill-entrypoint-description.md](../../knowledge/skill-entrypoint-description.md).

## Being worth loading

Everything in the body is paid for on every load, whether or not it is used.
So the body holds what a reader needs *every* time the skill fires; anything
needed only sometimes moves into a knowledge entry the body links to, and is
read only when it turns out to be wanted.

The test on any line is not whether it is true. It is whether removing it
would let someone make a mistake.

## Before it ships

Read the description as an agent mid-task would — knowing only the current
job and the one line. Would it open this? Then read the body as one that just
opened it, expecting to act immediately. Does it say what to do, or does it
describe a topic?

---

*Exemplar.* This skill accompanies [LAYOUT.md](../../LAYOUT.md) as the worked
example of the entrypoint form. Its structure is settled; its guidance is
subject to the same review as any other entry.

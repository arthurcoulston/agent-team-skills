# Public boundary and licensing proposal

This repository starts private with a history intended for publication. That
only works if the boundary is held from the first commit rather than cleaned
up before release, so it is written down here first.

## What belongs in this repository

- Skill entrypoints and the supporting knowledge, sources and evidence
  behind them.
- Example use, evaluation cases, fixtures and their recorded results —
  including results that failed.
- Generated human-readable views, and the definitions they generate from.
- Release history, contribution instructions and compatibility claims.

## What never enters it

- Operating records of the team that produces it: tickets, meeting notes,
  agent profiles, memory, calibration records, plans and directives. Those
  stay in Crew.
- Anything identifying a person other than as a named author or source
  credit — no calendars, contacts, correspondence, or private context.
- Credentials, hostnames, local paths and internal addresses. Installation
  must work from relative references, never from an absolute Crew path.
- Any content belonging to a sovereign team. Their material is theirs to
  publish; this repository may describe our own learnings only.

A trial run through Crew's object scan and Ward's privacy clearance precedes
publication, but neither is a substitute for this boundary. The point of
writing it now is that no commit needs rewriting later.

## Licensing proposal

**Proposed: MIT for the repository's code (tooling, checks, view
generation); CC BY 4.0 for the written knowledge and skills.**

The reasoning: the code is small and its value is in being copied without
friction, which MIT serves and Crew already uses. The written material is the
actual product, and its usefulness depends on staying traceable to who wrote
and reviewed it — attribution is the one condition worth asking for, and CC BY
asks for it without restricting commercial or derivative use, which would
defeat the purpose of publishing at all.

Third-party sources keep their own licences and are cited, never relicensed.

**This is a proposal, not a decision.** Arthur settles licensing before first
publication; until then no LICENSE file is committed, so nothing is offered
under terms he has not agreed.

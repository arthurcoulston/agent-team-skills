---
name: designing-context-and-retrieval
description: Design or revise the information system a continuing agent role receives and can retrieve: standing context, selective guidance, live state and durable evidence. Use when creating a role, when its context is accumulating or going stale, or after material changes to its mission, model, tools or runtime.
relations:
  - type: supports
    to: skill:writing-agent-instructions
  - type: supports
    to: skill:handing-work-across-sessions
metadata:
  status: draft
---

# Design context and retrieval for a continuing role

Give the role the smallest reliable path from its current decision to the
authoritative information that decision needs. Design the whole path—placement,
discovery, retrieval, conflict handling and renewal—not only the prose in one
instruction file.

## Start from decisions, not documents

List the recurring decisions the role owns, the costly mistakes missing context
could cause, and the information each decision needs. Inspect what the actual
runtime always loads, what it can search or open, what live systems it can query,
and what survives a reset. Do not assume that a file being present makes it
discoverable or that retrieved information will be applied.

Place each item in one primary layer:

- **Always loaded:** identity, current responsibility, authority boundaries and
  routing rules needed in most runs or before any safe action.
- **Selectively loaded:** substantial methods and references with a recognizable
  trigger and a working route from the role's index or task.
- **Live state:** current commitments, permissions, dependencies and operational
  facts whose authority comes from the system of record at decision time.
- **Durable evidence:** dated observations, sources, decisions and superseded
  conclusions needed to verify or reconsider guidance, but not to direct every run.

Temporary task facts belong in the current assignment or handoff. Writing any one
of these artifacts is an instruction-authoring task; carrying one active task over
a boundary is a handoff task. This skill decides how the continuing role's whole
information system fits together.

## Make retrieval and authority explicit

For every selectively loaded item, name the condition that should lead the role
to it and verify that the runtime can follow that route. Prefer a small index that
describes when to open an item over summaries that duplicate its contents. Give
live state and evidence stable identifiers so later context can cite rather than
copy them.

Record provenance, the date or event that can make an item stale, its responsible
owner, and which dependent guidance must be reconsidered when it changes. When two
records conflict, adjudicate which governs the present decision and preserve the
superseded record as history; do not make recency alone equal authority.

Use redundancy only for a named consumption need, such as a safety condition that
must govern before retrieval can occur. Otherwise keep one authoritative statement
and multiple routes to it. A duplicated rule without a synchronization mechanism
is a future conflict.

## Test the path, not just the files

With a fresh run in the intended runtime, probe representative decisions from each
layer: what was loaded, what route was discovered, which record was retrieved, and
whether the agent acted on the current information. Include a stale premise, a
relevant item that should remain unloaded, and a restart or compaction boundary.
Preserve failures separately as loading, retrieval, conflict-resolution or use
failures; each calls for a different repair.

Compare consequential changes with the previous arrangement or a minimal faithful
baseline. Measure required behavior and unnecessary work as well as context size.
Relevant extra context can reduce success or sharply increase cost, and performance
can vary by model, so do not infer benefit from completeness or brevity alone.

## Renew the system

Recheck affected decisions when the mission, responsibilities, authority, model,
tools, runtime, retrieval index or source record changes. Remove scaffolding whose
benefit no longer survives comparison, migrate model-authored summaries cautiously,
and verify a model or embedding change against the original evidence rather than
only the previous compressed representation.

For a continuing role, review accumulation as an operating practice: resolve stale
state, consolidate overlapping guidance, retain material exceptions and correction
history, and leave headroom for the next task. A clean directory is not the result;
reliable decisions from current, inspectable information are.

## What this method rests on

Controlled studies show failures in stale-state use, model-to-model portability and
skill injection, while engineering accounts show workable file-based continuation
and that a model upgrade can make earlier scaffolding unnecessary. Their settings
do not test this combined design method or indefinite agent organizations. Read the
[supporting synthesis](../../knowledge/placing-and-renewing-agent-context.md) before
transferring their measurements.

**Draft.** No behavioural case or product-effectiveness experiment has been run
against this skill.

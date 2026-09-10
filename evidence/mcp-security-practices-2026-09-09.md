---
id: mcp-security-practices-2026-09-09
kind: source_reading
source_title: Model Context Protocol — Security Best Practices (2025-11-25)
source_url: https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices
source_date: 2025-11-25
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the full page for the 2025-11-25 specification revision, extracting the consent, scope-minimization and delegation guidance and the division between normative requirements and operator responsibility; the page carries no separate publication date, so the specification revision it documents is recorded as its date
---

# Reading — MCP security best practices, 2025-11-25 revision

[Source](https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices).
Reading scope: the whole page, with attention to what it says about authority
rather than to the transport-level attacks.

## What it is

A companion to the MCP authorization specification, addressed to "developers
implementing MCP authorization flows, MCP server operators, and security
professionals". It is a protocol security document. It describes attacks —
confused deputy, token passthrough, SSRF, session hijacking, local server
compromise, authorization-URL injection — and the controls against them.

## The parts that bear on authority rather than transport

**Holding a credential is not the same as having been authorized to act.** The
confused deputy section describes a proxy that legitimately holds a
third-party token being induced to exercise it for someone else's purpose: the
attack "allows malicious clients to obtain authorization codes without proper
user consent". The mitigation is per-client consent checked *before* the
downstream flow — "Maintain a registry of approved `client_id` values per user"
and "Check this registry **before** initiating the third-party authorization
flow". Consent is recorded per requester and per named scope, not once and
globally: the consent page "MUST" identify the requesting client by name and
"Display the specific third-party API scopes being requested".

**Do not carry someone else's authority through.** "MCP servers **MUST NOT**
accept any tokens that were not explicitly issued for the MCP server." The
stated harms are accountability ones as much as security ones: without
audience separation, "the downstream Resource Server's logs may show requests
that appear to come from a different source with a different identity."

**Ask for the narrow permission at the point you need it.** The scope
minimization section prescribes "a progressive, least-privilege scope model": a
"minimal initial scope set…containing only low-risk discovery/read operations",
with "incremental elevation via targeted `WWW-Authenticate` `scope="…"`
challenges when privileged operations are first attempted". Named failure
modes include "bundling unrelated privileges to preempt future prompts",
omnibus scopes, "consent abandonment: users decline dialogs listing excessive
scopes", and "scope inflation blindness: lack of metrics makes over-broad
requests normalised". One common mistake is stated as "treating claimed scopes
in token as sufficient without server-side authorization logic".

## What it leaves to the operator

The document is normative about mechanism and silent about judgment. It
specifies what a client and server MUST and SHOULD do with tokens, consent
records, scopes and sessions; it says nothing about which actions deserve a
person's decision, how often to ask, or what an escalation should contain.
Which protections are appropriate "depend on your network environment".

## Caveats

This is protocol guidance, not evidence: no measurement, no comparison, no
reported outcome. It supports the *distinction* between what an agent can
technically do, what it has been granted, and what it was intended to do — and
the practice of requesting narrow authority at the point of use — as
established engineering practice in an adjacent domain. It does not establish
that a team organised this way works better.

This is a paraphrased reading record with quoted material.

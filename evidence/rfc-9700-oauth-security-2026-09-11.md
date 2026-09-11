---
id: rfc-9700-oauth-security-2026-09-11
kind: source_reading
source_title: RFC 9700 — Best Current Practice for OAuth 2.0 Security
source_url: https://www.rfc-editor.org/rfc/rfc9700.html
source_date: unknown
read_on: 2026-09-11
read_by: scout
method: Read sections 2.2, 2.3, 4.9, and 4.10 on replay, sender constraint, audience restriction, and privilege restriction
---

# Reading — RFC 9700

The RFC identifies its publication as January 2025 but supplies no day, so the
date metadata remains `unknown` rather than inventing day precision.

RFC 9700 recommends sender-constrained tokens, audience restriction to a
specific or small set of resource servers, and privileges limited to what the
application needs. It describes these controls as reducing replay, privilege
excess, and the impact of token leakage.

These are OAuth controls, not a universal interface implementation. Their
transfer is the separation of authenticated possession from a narrow,
audience-specific grant. Architecture and performance can constrain particular
mechanisms, and compromise of both token and key can defeat sender constraint.

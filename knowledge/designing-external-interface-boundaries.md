---
id: designing-external-interface-boundaries
title: Why an external interface separates provenance, authority, and delivery
status: draft
relations:
  - type: applies_to
    to: skill:designing-external-interfaces
sources:
  - title: PROV-O — The PROV Ontology
    url: https://www.w3.org/TR/prov-o/
    source_date: 2013-04-30
    evidence_date: 2026-09-11
    evidence: evidence:w3c-prov-2026-09-11
  - title: RFC 9421 — HTTP Message Signatures
    url: https://www.rfc-editor.org/rfc/rfc9421.html
    source_date: unknown
    evidence_date: 2026-09-11
    evidence: evidence:rfc-9421-message-signatures-2026-09-11
  - title: RFC 9700 — Best Current Practice for OAuth 2.0 Security
    url: https://www.rfc-editor.org/rfc/rfc9700.html
    source_date: unknown
    evidence_date: 2026-09-11
    evidence: evidence:rfc-9700-oauth-security-2026-09-11
  - title: CloudEvents Specification 1.0.2
    url: https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md
    source_date: 2022-02-06
    evidence_date: 2026-09-11
    evidence: evidence:cloudevents-1-0-2-2026-09-11
  - title: RFC 9110 — HTTP Semantics
    url: https://www.rfc-editor.org/rfc/rfc9110.html
    source_date: unknown
    evidence_date: 2026-09-11
    evidence: evidence:rfc-9110-http-acceptance-2026-09-11
  - title: NIST Privacy Framework 1.0
    url: https://doi.org/10.6028/NIST.CSWP.01162020
    source_date: 2020-01-16
    evidence_date: 2026-09-11
    evidence: evidence:nist-privacy-framework-2026-09-11
review:
  last_checked: 2026-09-11
  checked_by: scout
uncertainty: The standards establish component mechanisms, not the combined interface-design procedure or its effectiveness for agent teams. Identity assurance, consent, retention, and failure handling remain context-specific.
applicability: Information or requests cross a boundary between a continuing team and people or systems it does not wholly control. It is not a protocol selection guide or a substitute for legal, privacy, or security review.
---

# Why an external interface separates provenance, authority, and delivery

The three RFC pages identify publication months but no publication day; their
source-date fields therefore remain `unknown` rather than claiming false day
precision. The retained readings preserve the reported months.

An interface carries several claims that are easy to collapse. W3C PROV makes
origin, transformation, derivation, and responsible agents representable, but
provenance enables assessment rather than proving truth. RFC 9421 can bind
selected HTTP fields to a signer and add time and replay constraints, but the
application still decides what that signer may do. RFC 9700 makes the same
separation operational for delegated access: constrain the sender, audience,
and privilege instead of treating token possession as a general grant.

CloudEvents supplies a useful minimal event envelope. Source plus id supports
duplicate recognition, while type, schema, subject, and time help a receiver
interpret and route an occurrence. Its limits matter: source can differ from
the producer that constructed the record, and the event does not name its
destination. Those fields are evidence to verify, not authorization.

RFC 9110 supplies contrary evidence to a common delivery shortcut: even a 202
response records acceptance for processing, not completion. A durable interface
therefore needs distinct observations for receipt, validation, routing,
processing, consumer acceptance, and intended effect. Retries need a stable
operation identity and safe duplicate behavior; neither an event id nor an
idempotent transport method makes an irreversible downstream action safe.

NIST's Privacy Framework adds a distinct constraint: secure and attributable
data flow can still create privacy harm. It supports specifying processing
purpose, preferences and permissions, lifecycle and disclosure, minimizing
data in logs, and testing the controls. As a voluntary cross-jurisdiction
framework, it does not decide what consent or legal basis a particular system
requires.

The operative procedure is a reasoned synthesis: define an envelope, keep raw
provenance, evaluate explicit authority at an enforcement point, expose state
transitions, and verify consequential effects separately. None of the sources
tests that combined method with agent teams, and no universal assurance level,
consent form, retention period, or retry count follows from them.

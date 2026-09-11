---
name: designing-external-interfaces
description: Design an inbound or outbound interface that preserves provenance, keeps information separate from command authority, limits identity and data use, and makes failed delivery visible. Use when a continuing team exchanges requests, evidence, decisions, notifications, or artifacts with people or systems it does not wholly control.
relations:
  - type: depends_on
    to: skill:deciding-what-needs-a-human
  - type: supports
    to: skill:reconciling-portfolio-delivery
metadata:
  status: draft
---

# Design an external interface

Treat each interface as a boundary where facts, identity, permission, and
delivery can diverge. A verified sender can still be mistaken or unauthorized;
useful incoming content can inform the team without becoming an instruction.

## Define the interface contract

Before choosing a protocol, name:

- the purpose, allowed message or artifact types, and prohibited uses;
- the source, intermediary, intended recipient, and accountable interface owner;
- what identity assurance is necessary and whose consent or mandate covers the
  collection, use, retention, and onward disclosure of data;
- which inputs are information, requests, authorized decisions, or executable
  commands, and the recorded grant that permits each consequential action;
- the schema and version, size and rate limits, required provenance, operation
  identifier, freshness window, and duplicate policy; and
- the observable states from attempted receipt through intended effect, with an
  owner and recovery path for every failure state.

Collect and disclose only what this purpose requires. A credential proves only
what its issuer and audience say it proves; it does not enlarge the team's
authority or authorize a new use of the accompanying data.

## Admit inbound material as data first

Preserve the received envelope and attach rather than overwrite provenance:
source claim, producing intermediary, receipt time, message or artifact id,
schema version, integrity result, and derivation into later outputs. Keep the
original claim distinguishable from the team's interpretation.

At an enforcement point, validate structure and bounds before using content.
Then evaluate four questions separately:

1. **Authenticity:** what identity, account, or key was verified, over exactly
   which fields, and is the message fresh rather than replayed?
2. **Entitlement:** is that principal authorized for this audience, resource,
   action, and duration?
3. **Interpretation:** does the declared type and version mean what the receiver
   expects, and is the content evidence, a request, or a command?
4. **Effect:** may this message trigger an action, or only enter a queue for
   review, comparison, or a decision by another authority?

Default unrecognized types, missing provenance, failed checks, and disputed
authority to rejection or quarantine, not execution. Do not let text inside an
artifact redefine the interface contract. Pass an allowed action through a
least-privileged adapter scoped to its target; do not forward a caller's broad
credential as though it were the team's own authority.

## Make outbound authority and audience explicit

Before sending, verify the intended recipient and channel, the team's authority
to speak or act, the provenance needed by the recipient, and whether any person
consented to this use and audience. Separate an assertion from its evidence and
identify whether the team is informing, requesting, recommending, deciding, or
committing. Never imply that delivery makes the recipient agree or that the
team speaks for a beneficiary without a mandate.

Bind credentials and messages to the narrowest practical audience, privilege,
and lifetime. Sign or authenticate the fields whose integrity matters, not an
incidental subset. Remove secrets and unrelated personal data from payloads,
logs, receipts, and failure reports.

## Track delivery as states, not a boolean

Use a stable operation id across a retry and distinguish at least:

`attempted → transport accepted → validated → routed → processed → accepted by
the responsible consumer → intended effect verified`

Record rejection, expiry, quarantine, dead-lettering, and unknown outcome as
first-class states. A transport acknowledgment, including HTTP 202, is not
processing or effect. Retry only when the operation is safe to repeat or the
receiver deduplicates the same semantic operation. If completion is ambiguous,
reconcile the receiver's state before repeating an irreversible action.

Alert the owner when a required state exceeds its decision-relevant deadline,
when retries exhaust their bound, or when the destination no longer has a
responsible consumer. Preserve enough receipt evidence to investigate without
turning logs into an uncontrolled second copy of sensitive content.

## Change and test the seam

Version incompatible meanings and define migration, revocation, and rollback.
Test malformed and oversized content, wrong audience, valid identity without
authority, replay and duplicate delivery, reordered events, intermediary
transformation, unavailable recipients, ambiguous completion, and leaked
credentials. Also test the quieter failure: a legitimate correction arrives,
is accepted by transport, and never reaches the decision-maker.

For example, a public evidence ledger can accept a signed correction while
retaining the submitter, source record, and receipt time. The signature supports
integrity; it does not let the submitter edit the ledger. A separately authorized
review path compares the claim, publishes a dated decision, and notifies the
submitter. Delivery monitoring must expose a correction stranded between inbox
and reviewer rather than counting its HTTP acknowledgment as resolution.

Use [human-decision guidance](../deciding-what-needs-a-human/SKILL.md) when the
next state requires a person's permission or judgment. This skill owns the
larger system seam: what crosses it, how it is interpreted, what it may cause,
and whether it reached its intended effect. The [supporting basis](../../knowledge/designing-external-interface-boundaries.md)
explains the standards and limits. **Draft:** the combined procedure is reasoned
transfer; no behavioral or consumer-effectiveness test has been performed.

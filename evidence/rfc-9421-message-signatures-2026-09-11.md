---
id: rfc-9421-message-signatures-2026-09-11
kind: source_reading
source_title: RFC 9421 — HTTP Message Signatures
source_url: https://www.rfc-editor.org/rfc/rfc9421.html
source_date: unknown
read_on: 2026-09-11
read_by: scout
method: Read signature creation, verification requirements, and security considerations concerning covered components, creation and expiry times, nonces, and replay
---

# Reading — RFC 9421

The RFC identifies its publication as February 2024 but supplies no day, so
the date metadata remains `unknown` rather than inventing day precision.

RFC 9421 specifies signatures over selected HTTP message components. Its
verification guidance allows applications to require particular covered
fields, maximum signature age, expiry enforcement, and nonce uniqueness. These
mechanisms support integrity, signer/key association, freshness, and replay
controls when an HTTP interface needs them.

The RFC leaves application policy, key selection, and many verification
requirements to the application. A valid signature therefore does not establish
that the signer may command the receiver, that unsigned fields are trustworthy,
or that the content is true.

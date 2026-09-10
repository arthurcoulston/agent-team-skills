---
id: clarification-injection-surface-2026-09-09
kind: source_reading
source_title: "ASPI: Seeking Ambiguity Clarification Amplifies Prompt Injection Vulnerability in LLM Agents"
source_url: https://arxiv.org/abs/2605.17324
source_date: 2026-05-17
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page only, extracting the benchmark size, the two reported attack-success figures and the authors' framing; the full text was not read
---

# Reading — ASPI

[Source](https://arxiv.org/abs/2605.17324). Sehwag, Shan, Liu, Lakshan,
Brandifino, Fenkell. Submitted 2026-05-17. Reading scope: abstract only.

## The finding

ASPI is a benchmark of 728 task–attack scenarios comparing an agent's
vulnerability when it works from a fully specified instruction against its
vulnerability when it solicits additional input to resolve an ambiguous one.
Across ten frontier models, attack success rises sharply in the
clarification-seeking state: o3 "from 1.8% to 34.0%", Gemini-3-Flash "from 2.2%
to 35.7%".

The authors' conclusion is that "standard execution-time security evaluation
systematically underestimates the attack surface of interactive agents", and
that robustness under fully specified tasks does not transfer to robustness when
handling ambiguous ones.

## Why it is retained here

It is the sharpest available evidence that asking is not free in a second sense
beyond attention: opening a channel for an answer opens a channel for
instructions. It is recorded to mark the boundary of the
`deciding-what-needs-a-human` skill — which covers deciding to ask and shaping
the ask, and does **not** cover judging what comes back — rather than to support
any recommendation inside it.

## Caveats

Abstract only; the setup, the attack construction, the remaining eight models
and the limitations were not read. The two figures quoted are the two the
abstract reports. This record should not be cited for anything beyond the
existence and rough size of the effect, and it should be re-read before it is
used to support guidance.

This is a reading of an abstract, not of the paper.

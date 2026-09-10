---
id: self-correction-role-relabeling-2026-09-09
kind: source_reading
source_title: "The Self-Correction Illusion: Role Relabeling Gates Explicit Error Flagging in Large Language Models"
source_url: https://arxiv.org/abs/2606.05976
source_date: 2026-07-31
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page for v2, extracting the intervention, the effect size and the stated scope. Per-setting tables not extracted; the recorded gap is noted below
---

# Reading — The self-correction illusion (role relabeling), v2

[Source](https://arxiv.org/abs/2606.05976). Kuan-Yen Chen, Fang-Yi Su,
Shih-Yen Lin, Bao Li, Jung-Hsien Chiang. v1 2026-06-04; v2 2026-07-31. The v1
listing carries the subtitle "LLMs Correct Others but Not Themselves"; the v2
title is the one recorded above. Reading scope: the intervention, the headline
effect, the domain dependence.

## Question

Whether the well-documented failure of LLMs to correct their own errors is a
capability limit or an artifact of how the erroneous content is presented.

## Method

**Source-conditioned role relabeling**, a training-free intervention:
byte-identical erroneous content is presented in different message roles — an
internal `<thought>`, a user message, a tool response, or a system `<memory>`
block — and the explicit error-flagging rate is compared. 12 model-domain
combinations across closed-weight APIs and open-weight models from 70B
downwards. Tasks: mathematics and logical deduction.

## Result

Relabeling the *same* error as coming from an external source increased
explicit correction rates by **23 to 93 percentage points**, significant in 10
of 12 settings. `<memory>` blocks worked best for mathematics; user messages
dominated on logical deduction.

The authors read this as evidence that the barrier is the role label attached
to the content, not a deficit in the model's ability to detect the error.

## Why this matters to a review arrangement

Two readings sit on this result and they pull in opposite directions. It
supports the case for handing an artifact to a reviewer as an external object.
It equally warns that some of what looks like reviewer independence may be the
framing rather than the separate judgment — the same weights flag far more
errors purely because the content arrived labelled as someone else's.

## Gaps in this reading

No measurement of harm was extracted: whether relabeling also causes *correct*
content to be flagged as erroneous is not reported in the material read, and
that rate is exactly what the review-overcorrection reading shows can be
severe. The authors describe their findings as domain-dependent. Tasks are
math and logical deduction with verifiable answers, not open-ended work.

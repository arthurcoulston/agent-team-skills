---
id: memory-portability-2026-09-09
kind: source_reading
source_title: "Does Your Agent's Memory Survive a Model Upgrade? A Controlled Study of Memory Portability"
source_url: https://arxiv.org/abs/2609.05339
source_date: 2026-09-04
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page, with targeted extraction of the four storage forms, the controlled design, the per-form transfer results, the deficit decomposition and the stated limitations
---

# Reading — Does your agent's memory survive a model upgrade?

[Source](https://arxiv.org/abs/2609.05339). Goyal, Ray. v1, 2026-09-04.
Reading scope: the four storage forms compared, the controlled design, the
transfer results, where the deficits come from, stated limitations.

## Method

Four ways of storing an agent's history, compared under a deliberate model
swap:

- **LC-RAW** — verbatim history read by a long-context model.
- **RAG** — chunked retrieval.
- **NOTES** — natural-language summaries the model itself compressed.
- **KG-fixed** — a normalised knowledge graph with a fixed schema.

48 synthetic histories with randomised answer codes and exact scoring; two
open-weight models under 10B parameters, swapped in both directions so the
writer and the reader can differ.

## What transferred and what did not

**Fixed structure survived the swap.** "KG-fixed accuracy chang[ed] by only
+0.0004 ±0.0020 following a writer swap" — effectively unchanged.

**Model-compressed notes did not, and failed asymmetrically.** Accuracy
shifted by "+9.91 or −13.28 percentage points depending on the specific
migration direction". A summary written by one model is not neutral input for
another.

**Partial retrieval migrations lose most of the available gain.** A "mixed
index capture[s] only a 4.96-point accuracy improvement, forfeiting the
majority of the 11.90-point gain achieved through full re-embedding."

## Where the losses come from

The decomposition is the part that matters most here. "80% (0.467 ± 0.014) of
the NOTES accuracy deficit [is attributed] to information lost during initial
construction" — the summary was already missing what was later needed, before
any model changed. For retrieval, "retrieval failures drive 81% (0.364 ±
0.012) of the RAG deficit".

And the loss is not repairable downstream: "store-only repair of NOTES fails
to reach a 90% performance recovery target in all 48 test cases."

## Caveats

The authors state the findings rest on synthetic histories and sub-10B
open-weight models, which limits generalisation to larger models and to real
memory scenarios. The task is exact-answer recall against randomised codes,
which rewards structural fidelity and does not measure judgement, reasoning
or the usefulness of what was preserved. The percentages are properties of
this construction. This is a paraphrased reading record with quoted material.

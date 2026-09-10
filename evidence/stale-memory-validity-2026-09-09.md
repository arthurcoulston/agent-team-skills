---
id: stale-memory-validity-2026-09-09
kind: source_reading
source_title: "STALE: Can LLM Agents Know When Their Memories Are No Longer Valid?"
source_url: https://arxiv.org/abs/2605.06527
source_date: 2026-05-07
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the abstract page, with targeted extraction of the benchmark construction, the three evaluated dimensions, the headline accuracy result and the stated positioning
---

# Reading — STALE

[Source](https://arxiv.org/abs/2605.06527). Chao, Bai, Sheng, Li, Sun. v1,
2026-05-07. Reading scope: benchmark construction, the three dimensions, the
headline result, the proposed remedy and stated positioning.

## What it measures

Whether an agent that holds a stored fact notices when a later observation
has invalidated it, and whether it then acts differently. The hard case is
**implicit conflict**: "a later observation invalidates an earlier memory
without explicit negation, requiring contextual inference" — nobody says the
old fact is wrong; something else becomes true that makes it wrong.

400 expert-validated conflict scenarios generate 1,200 evaluation queries
across three dimensions, spanning 100+ everyday topics with contexts reaching
150K tokens. Frontier LLMs and specialised memory frameworks were evaluated.

The three dimensions are distinct abilities:

- **State resolution** — detecting that a stored belief is outdated.
- **Premise resistance** — rejecting a query that falsely presupposes the
  stale state.
- **Implicit policy adaptation** — proactively applying the updated state to
  decisions that depended on it.

## The result

"Even the best evaluated model achiev[es] only 55.2% overall accuracy."

The failure the paper names is the gap between the second and third
abilities: "a pervasive gap between retrieving updated evidence and acting on
it", which it calls the implicit policy adaptation (IPA) gap. An agent can
retrieve the corrected fact and still plan from the superseded one.
Separately, "Models often accept outdated assumptions embedded in a user's
query" — a stale premise carried in the phrasing of the request is not
challenged.

## Proposed remedy

A prototype, CUPMem, uses "structured state consolidation and
propagation-aware search", which the authors offer as evidence that "explicit
state adjudication is a promising direction for robust agentic memory". No
quantified effect for the prototype was extracted in this reading.

## Caveats

The reading covered the abstract page only; per-model numbers, the split
across the three dimensions and the prototype's measured gain were not
retrieved and are not relied on here. The scenarios are constructed everyday
topics rather than an operating team's records. The paper positions itself
against benchmarks that "primarily measure static fact retrieval", so it is a
first measurement of this ability rather than a settled one. This is a
paraphrased reading record with quoted material.

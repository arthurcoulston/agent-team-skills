---
id: ask-or-assume-coding-2026-09-09
kind: source_reading
source_title: "Ask or Assume? Uncertainty-Aware Clarification-Seeking in Coding Agents"
source_url: https://arxiv.org/abs/2603.26233v1
source_date: 2026-03-27
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the v1 full text, with targeted extraction of the underspecified benchmark construction, the resolve rates by condition, the conditional ask/no-ask split, the query distribution and the stated limitations
---

# Reading — Ask or Assume?

[Source](https://arxiv.org/abs/2603.26233v1). Edwards, Schuster. v1,
2026-03-27. Reading scope: setup, resolve rates, asking behaviour, cost,
limitations.

## Method

An underspecified variant of SWE-bench Verified (500 GitHub issues): "the fully
specified instructions were summarized into underspecified variants using
GPT-4o, withholding important details while preserving specific repository
terminology." The agent is Claude Sonnet 4.5 in OpenHands with a 100-iteration
cap; the user is simulated by GPT-5.1. Conditions compare an uncertainty-aware
agent allowed a single query (UA-Single) or several (UA-Multi) against a
**Hidden** baseline that cannot ask and a **Full** baseline given the complete
issue.

## The result

| Condition | Resolve rate |
|---|---|
| Full (complete information) | 70.80% |
| UA-Multi (may ask, several times) | 69.40% |
| UA-Single (may ask once) | 61.20% |
| Hidden (cannot ask) | 54.80% |

Being able to ask recovers almost all of what underspecification costs — but
only in the multi-query form. The single-query form recovers about a third of
the gap.

The interesting split is conditional. Within UA-Multi, tasks where the agent
asked at least once (N=344) resolved at **65.99%**; tasks where it did not ask
(N=156) resolved at **76.92%**. Asking is not what makes a task go badly; the
agent is asking on the harder tasks. The authors report UA-Multi "queried the
user at least once in fewer overall tasks than UA-Single, [yet] its
interventions were substantially more effective", and that it "demonstrates an
improved ability to distinguish when to ask based on task complexity, with a
9.28% higher ask rate for medium tasks than easy tasks."

Queries land early (41.8%) and mid-execution (43.4%) rather than late, at an
average of 3.06 queries per task against UA-Single's 1.84.

## Cost

The multi-agent uncertainty scaffold cost **$3.50 per task** against $1.63 for
the Full baseline.

## Caveats

Stated: "LLM-simulated users can be unreliable proxies for human behavior, often
being unnaturally cooperative" — the simulated user answers immediately, fully
and without irritation, which no real recipient does. The capability comes from
multi-agent scaffolding rather than the model alone, and "current open-weight
models severely lack the internal calibration required to handle interactive
underspecification", so the result is about frontier models with a scaffold.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

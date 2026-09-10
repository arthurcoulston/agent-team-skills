---
id: agent-abstention-benchmark-2026-09-09
kind: source_reading
source_title: "AgentAbstain: Do LLM Agents Know When Not to Act?"
source_url: https://arxiv.org/abs/2607.10059v1
source_date: 2026-07-11
read_on: 2026-09-09
read_by: scout
method: Web retrieval of the v1 full text, with targeted extraction of the paired-task metric, the eight-scenario taxonomy, the headline results across models, the act-versus-abstain relationship and the stated limitations
---

# Reading — AgentAbstain

[Source](https://arxiv.org/abs/2607.10059v1). Liu, Zhang, Kasprova, Rabbani,
Zahraei, Zhang, Ebrahimpour-Boroojeny, Chandrasekaran (University of Illinois
Urbana-Champaign). v1, 2026-07-11. Reading scope: metric, taxonomy, model
results, act/abstain correlation, limitations.

## Method

Tool-using agents are given **paired tasks**: one variant that should be
carried out and one, otherwise similar, that should not. Scoring combines a
deterministic commit check on the tool-call trace with an LLM judge on the
final response. The headline metric, **Paired Accuracy**, is the fraction of
pairs where *both* halves are answered correctly — so an agent cannot score by
being uniformly cautious or uniformly eager. 42 sandbox environments, each
exposing 3–29 tools; 17 models.

## The result

Best paired accuracy **59.5%** (Gemini 3.1 Pro), with Claude Opus 4.7 at
**59.4%**; the mean across the 17 models is **45.7%** and the worst (GPT-4o)
**33.0%**.

The two halves are not equally hard: "mean act accuracy exceeds abstain
accuracy by 21 percentage points" — 80.6% against 59.1%. Recognising that a
task should not be carried out is the weaker capability.

The finding with the most consequence for how a team is arranged: "Abstention
capability is largely independent of general task-solving capability." The phi
coefficient between passing the act half and passing the abstain half of the
same pair averages **−0.10** across models — independence, or slightly worse
than independence. Improvements in act accuracy across model generations did
not carry into abstention.

## The eight triggers

Split by when they can be seen. **Pre-execution**, detectable from the
instruction and the tool list alone: missing critical parameter; ambiguous
action specification; conflicting constraints; high-stakes action;
insufficient tool capability. **Runtime**, emerging only through interaction:
critical tool failure; conflicting evidence; emergent risk discovery.

## Caveats

The authors' stated limitations: environments expose 3–29 tools where "real-world
deployments often connect agents to dozens of independent systems with hundreds
of endpoints"; the taxonomy "cover[s] the principal abstention triggers for
single-agent, single-turn tool use"; the judge "may still exhibit bias on
borderline cases, particularly for categories where the abstention signal is
subtle"; and it is a **single-run evaluation** — "LLM outputs are stochastic, so
multi-run evaluation would likely reveal variance."

Nothing here measures a team of agents, a continuing assignment, or a human
recipient of the abstention. The paper does not report whether telling a model
it may abstain changes the numbers.

This is a paraphrased reading record with quoted material, not an
independently reproduced result.

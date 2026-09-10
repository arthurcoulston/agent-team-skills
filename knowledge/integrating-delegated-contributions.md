---
id: integrating-delegated-contributions
title: Why combining contributions loses the best one, and what to do instead
status: draft
relations:
  - type: applies_to
    to: skill:coordinating-delegated-work
  - type: supports
    to: knowledge:coordination-failure-controls
sources:
  - title: Multi-Agent Teams Hold Experts Back, v4
    url: https://arxiv.org/abs/2602.01011v4
    source_date: 2026-05-28
    evidence_date: 2026-09-09
    evidence: evidence:teams-hold-experts-back-2026-09-09
  - title: Patterns and problems in emerging multiagent systems
    url: https://www.anthropic.com/research/multiagent-systems
    source_date: 2026-08-13
    evidence_date: 2026-09-09
    evidence: evidence:multiagent-patterns-problems-2026-09-09
review:
  last_checked: 2026-09-09
  checked_by: scout
uncertainty: >
  Two sources, one peer-reviewed and one first-party, agreeing on a mechanism
  from different directions. Both studied equal-status groups with no imposed
  hierarchy, on bounded questions with a knowable right answer; the psychology
  tasks and the hidden-profile setup are constructed so that one member is
  demonstrably correct, which is rarer in real work. The paper's attribution of
  consensus-seeking to alignment training is explicitly correlational. Whether
  a named integration owner avoids the effect was not tested by either source.
applicability: >
  Combining findings, recommendations or artifacts returned by several workers
  into one result you will act on, particularly when the workers differ in
  competence or hold different information. The adversarial-robustness caveat
  applies wherever a contributor may be unreliable or compromised.
---

# Why combining contributions loses the best one, and what to do instead

The failure is not that agents cannot find the right answer. It is that
combining answers destroys it.

## The measurement

Self-organizing LLM teams — free interaction, no fixed roles or aggregation
rule — were scored against their own best individual member. Unlike human
teams, they consistently failed to match that member: a relative synergy gap of
**6.3%–41.1%** on ML benchmarks (MMLU Pro, GPQA Diamond, SimpleQA, HLE,
MATH-500) and **17.3%–113.4%** on group-decision tasks.

Telling the team explicitly which member was the expert produced only modest
improvement. **Leveraging expertise, not identifying it, is the bottleneck** —
which is why a roster or a stated hierarchy does not fix this on its own.

Coding the conversations found the mechanism: *integrative compromise* —
averaging expert and non-expert positions — correlated positively with the
synergy gap (r = +0.55, p < 0.001 on the NASA task), while *epistemic
deference* correlated negatively with it (r = −0.44, p = 0.007). The gap grew
with team size across all tasks (all p < 0.05), tested from 2 to 8 members.

## The independent corroboration

A hidden-profile experiment distributed facts across four-agent groups so that
commonly held evidence pointed at the wrong choice while unique private facts
pointed at the right one. Most models' groups reached **17–36%** accuracy; the
strongest reached ~85%; **a single agent given all the facts reached ~100%**.
The groups converged on consensus prematurely and failed to surface or credit
the dissenting private information.

That is the same failure from the opposite direction. The first result says
shared discussion dilutes the member who is right; the second says shared
discussion never surfaces what only one member knows. Both say the same
operational thing: **information that only one contributor holds is exactly the
information a consensus process discards.**

## What follows for whoever integrates

- **Ask for the basis, not the conclusion.** A returned contribution should
  carry what was checked and what it rests on, so integration can weigh
  evidence rather than count positions.
- **Ask each worker specifically for what only it saw** — the fact no other
  worker had access to. The hidden-profile result says this will not come out
  on its own.
- **Never average a disagreement.** Splitting the difference between a
  well-supported finding and a weakly supported one is the coded behaviour that
  correlated most strongly with losing the expert's contribution.
- **Keep dissent in the integrated artifact**, with its reasoning, rather than
  resolving it into a single confident line. A minority finding that survives
  into the record can be rechecked later; one averaged away cannot.
- **Prefer fewer contributors on a question with one right answer.** Dilution
  grew monotonically with team size in this data.

## The trade-off, stated plainly

When one member was instructed to give worst-possible rankings, the same teams
showed "robustness to adversarial input, with minimal performance degradation".
The authors' hypothesis is that the consensus-seeking that filters out expert
knowledge also filters out an adversarial contribution.

So this is a trade and not a free improvement. Weighting one contributor's
evidence heavily is right when you can check that evidence, and it is precisely
what removes your protection when you cannot. Where a contributor may be
unreliable or compromised, the answer is to verify its evidence directly rather
than to restore averaging as a defence — averaging buys that defence by paying
the dilution cost on every ordinary question too.

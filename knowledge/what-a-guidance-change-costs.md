---
id: what-a-guidance-change-costs
title: What is known about whether adding or changing an agent team's guidance actually improves it
status: draft
relations:
  - type: applies_to
    to: skill:correcting-repeated-failures
  - type: applies_to
    to: skill:maintaining-guidance
sources:
  - title: "SWE-Skills-Bench: Do Agent Skills Actually Help in Real-World Software Engineering?"
    url: https://arxiv.org/abs/2603.15401v1
    source_date: 2026-03-16
    evidence_date: 2026-09-10
    evidence: evidence:swe-skills-bench-2026-09-10
  - title: "Signal or Noise? A Benchmark Study of Agent Skills in Web Development"
    url: https://arxiv.org/abs/2608.23067v1
    source_date: 2026-08-24
    evidence_date: 2026-09-10
    evidence: evidence:webdev-skills-signal-noise-2026-09-10
  - title: "Agent Skills Can Be Harmful: An Empirical Study of Skill-Induced Failures in LLM Agents"
    url: https://arxiv.org/abs/2608.11888v1
    source_date: 2026-08-12
    evidence_date: 2026-09-10
    evidence: evidence:skill-induced-failures-2026-09-10
  - title: SkillsBench v4
    url: https://arxiv.org/abs/2602.12670v4
    source_date: 2026-06-14
    evidence_date: 2026-09-09
    evidence: evidence:skillsbench-authoring-2026-09-09
  - title: "EvoAgentBench: Benchmarking Agent Self-Evolution via Ability Transfer"
    url: https://arxiv.org/abs/2607.05202v1
    source_date: 2026-07-06
    evidence_date: 2026-09-10
    evidence: evidence:evoagentbench-transfer-2026-09-10
  - title: "Beyond pass@1: A Reliability Science Framework for Long-Horizon LLM Agents"
    url: https://arxiv.org/abs/2603.29231v1
    source_date: 2026-03-31
    evidence_date: 2026-09-10
    evidence: evidence:long-horizon-reliability-gds-2026-09-10
  - title: Harness design for long-running applications
    url: https://www.anthropic.com/engineering/harness-design-long-running-apps
    source_date: 2026-03-24
    evidence_date: 2026-09-09
    evidence: evidence:harness-design-long-running-apps-2026-09-09
  - title: How Many Instructions Can LLMs Follow at Once? v1
    url: https://arxiv.org/abs/2507.11538v1
    source_date: 2025-07-15
    evidence_date: 2026-09-09
    evidence: evidence:ifscale-authoring-2026-09-09
review:
  last_checked: 2026-09-10
  checked_by: scout
uncertainty: >
  The negative results are strong for what they cover and narrow in what they
  cover: three benchmarks in two domains (software engineering and web
  development), using public skills the study authors did not write, on a
  fixed model panel each. None of them tests guidance written by the team that
  owns the failure it addresses, which is the case a leader is actually in,
  and that gap could plausibly move the sign. The positive results are equally
  bounded: SkillsBench supplies its own packages and tasks, and EvoAgentBench
  preferentially samples test tasks where headroom exists and states that
  "absolute Δ magnitudes are specific to this supported split". The
  memory-scaffold result is one scaffold implementation on open-weight models
  in one benchmark. The scaffolding-retirement account is a single first-party
  engineering report with qualitative comparison, not a controlled trial. No
  source read here measures accumulated guidance in a real team degrading over
  time; IFScale measures compliance under many simple simultaneous constraints,
  which is a related but narrower thing.
applicability: >
  Deciding whether a proposed change to a team's standing guidance is worth
  making, how to establish that it helped, and when to retire guidance that
  has stopped earning its place. It applies wherever guidance is injected into
  an agent's context by a person or a process that could have chosen not to.
  It does not tell you what to write, and it does not apply to changes in code,
  tools or permissions, whose effects are established differently.
---

# What a guidance change is actually worth

The default repair for a repeated failure is to add a rule. There are two
bodies of evidence about whether that works and they do not agree. Both are
reported here, because a team that reads only one of them will either never
change its guidance or never stop.

## The evidence that added guidance often does nothing, and sometimes harms

Three studies, all comparing matched runs with and without the guidance.

**SWE-Skills-Bench** pairs 49 public skills with real GitHub repositories
pinned at fixed commits, roughly 565 task instances across six subdomains,
scored by execution-based tests mapped from stated acceptance criteria.
"**39 of 49 skills yield zero pass-rate improvement**, and the average gain is
only **+1.2%**." Token overhead ranged "from modest savings to a **451%
increase** while pass rates remain unchanged." The tails matter more than the
mean: seven skills gained "up to +30%", and three *degraded* performance "up
to −10%" — attributed to "version-mismatched guidance conflicting with project
context", which is guidance that was once right and stopped being right.

**Signal or Noise?** adds the control that most such comparisons lack. Across
31 public skills, 50 projects, 1,000 ordered tasks and four models, it
compares four matched conditions including "a length-matched irrelevant
control". Result: "target Skill injection **reduces mean Pass@2 by 1.3% to
4.2%**", "**increases token cost by 72% to 394%**", with "gains in only 17% to
36% of Skill-project pairs". The control separates two distinct harms —
**length-distracted**, where "an equally long irrelevant Skill reproduces most
of the loss", and **content-misled**, where length is neutral "but Skill
content still lowers Pass@2 by 1.1% to 1.4%". It also finds that "Skill
rankings transfer weakly across models", and that "anti-pattern rules
outperform example-heavy content within helpful Skills."

**Agent Skills Can Be Harmful** asks how the harm happens, by differential
testing against no-skill and semantically matched controls over the two
benchmarks above. It separates **125 functional failures** (passed without the
guidance, failed with it) from **182 efficiency regressions** (still passed,
cost much more). The dominant mechanisms are worth naming because they are
what a well-meant rule does: "86 of 125 functional failures (68.8%)" were the
agent implementing a required element wrongly or omitting it — the guidance
changed what it attempted — and "114 of 182 cases (62.6%)" were **Excessive
Procedure**: "unnecessary verification, exploration, or implementation
pipelines". The rule was obeyed, and the obeying was the cost.

One more result belongs on this side. In a 396-task, 23,392-episode reliability
study, "**memory scaffolds universally hurt long-horizon GDS (negative or
neutral for all 10 models)**" — "6 models are hurt, 4 are neutral". A memory
scaffold is the archetypal response to a repeated failure. Here it never paid.

## The evidence that curated guidance does help

**SkillsBench** reports benefits from curated skill packages across its
terminal-task evaluation, with supplied packages and bounded tasks.

**EvoAgentBench** is the more informative positive result, because it puts
curated and automatic content side by side under identical conditions. Against
a no-evolution baseline, curator-verified Ability content gained **+7.5, +10.5
and +5.8** points across three backbones and was positive in "all 24
method–domain–setting cells", while every automatic self-improvement method
tested had at least one negative cell. The curated content also transferred
across model families: it was built on backbones disjoint from the ones it was
evaluated on.

## Reading the two bodies together

They are not in direct contradiction; they differ in what was being added and
to what.

- **Who wrote it.** The negative results evaluate *public* skills against
  tasks their authors did not have in view. The positive results evaluate
  content curated and verified for the task distribution it was tested on.
- **Whether the need was established.** EvoAgentBench builds a test set where
  the needed experience provably exists and headroom is present. The public
  skill benchmarks inject guidance whether or not the task needed any.
- **What the baseline was.** Only Signal or Noise? controls for prompt length,
  and it finds that for some models most of the loss is reproduced by an
  equally long *irrelevant* skill. A comparison without that control cannot
  say whether content or volume did the work.

The synthesis this collection draws — and it is a synthesis, not a finding —
is that a guidance change is a **hypothesis about a specific
guidance-work-model triple**, in Signal or Noise?'s framing, whose expected
value is highest when the need was demonstrated first and lowest when the
guidance is added speculatively or inherited from elsewhere. It is not free:
the token cost it adds ran as high as 394% and 451% in these studies (with
modest savings at the other end), and its downside is real.

## Guidance decays, and the decay is invisible

Three separate mechanisms, each with a source.

**Its subject moves.** SWE-Skills-Bench attributes its three harmful skills to
"version-mismatched guidance conflicting with project context".

**The model moves under it.** A first-party account of building a long-running
application describes scaffolding — sprint decomposition and a separate
evaluator agent — that was necessary on one model and became "unnecessary
overhead" on the next: "the model's raw capability increased, so the boundary
moved outward". The scaffold did not fail. It stopped being needed, and
nothing in the system said so.

**It accumulates.** IFScale increases the number of simple simultaneous
constraints and finds compliance deteriorating at high densities. It supplies
no safe number — the reading of it that transfers is that competing
requirements have a combined effect that has to be measured rather than
assumed. Signal or Noise?'s length-distracted models are the same cost seen
from a different angle: some of the harm is the volume, whoever wrote it.

The common property is that none of the three announces itself. A stale rule,
a superseded scaffold and an over-full instruction set all look exactly like
working guidance from the outside. That is the argument for retiring guidance
on a schedule and on evidence, rather than when someone notices.

## What establishing a change actually requires

Every study on the negative side established its result the same way: **a
matched pair on the same task with and without the change**, scored by
something that does not depend on judging the output — execution-based tests
mapped from acceptance criteria, or pass rates on pinned repositories.

Two design features are worth importing directly. A **length-matched control**
distinguishes "this guidance helped" from "more text helped" or "more text
hurt". A **cost measurement alongside the outcome** catches the case that no
pass-rate comparison sees: 182 efficiency regressions in one study were tasks
that still passed.

And the transfer question has an answer from EvoAgentBench's construction: it
tests on tasks *other than* the ones the experience was extracted from, in an
Ability Graph linking tasks by procedural overlap. A change verified only on
the case that prompted it has not been shown to generalise; a change that
holds on related-but-different cases has. But note what a passing transfer
test establishes and no more — Signal or Noise? found "Skill rankings transfer
weakly across models", so transfer across tasks is not transfer across the
model or harness the team may move to next.

## Where the evidence runs out

None of these studies evaluates guidance written by the team that experienced
the failure it addresses, which is the case a leader is in. That is the single
largest gap between this evidence and its use, and it could plausibly change
the sign: a rule addressing a demonstrated local failure is not the same
object as a public skill injected speculatively. Nor does any of them measure
a real team's accumulated instruction set degrading over months. The guidance
this collection derives — demonstrate the need before writing, state the
expected effect in advance, measure cost with outcome, test off the
originating case, and retire on a schedule — is reasoned from the studies
above and has not itself been tested.

That last sentence applies to this collection too. These are the results that
would predict a curated skill library helping, and the results that would
predict it doing nothing while costing tokens. Both are on the table.

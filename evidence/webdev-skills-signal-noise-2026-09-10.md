---
id: webdev-skills-signal-noise-2026-09-10
kind: source_reading
source_title: "Signal or Noise? A Benchmark Study of Agent Skills in Web Development"
source_url: https://arxiv.org/abs/2608.23067v1
source_date: 2026-08-24
read_on: 2026-09-10
read_by: scout
method: Web retrieval of the abstract page for v1, with verbatim extraction of the four matched conditions, the headline figures and the two named failure modes; the body's per-model tables were not retrieved
---

# Reading — Signal or Noise? (WebDev-Skills-Bench) v1

[Source](https://arxiv.org/abs/2608.23067v1). Ziyue Yang, Fan Ding. v1,
2026-08-24. Reading scope: the abstract and its stated design.

## The question it insists on

"Because each injected Skill expands the prompt of every query, an effective
Skill benchmark must determine not only whether an agent can solve a task, but
**whether the Skill should have been injected at all**."

## Design

31 public WebDev skills, 50 Web-Bench projects, 1,000 ordered tasks, four
models. "The benchmark compares four matched conditions, including a
**length-matched irrelevant control** and **leave-one-out component
ablations**." To keep prompt length from doing the work, only the skill's own
entrypoint goes in the prompt while auxiliary files are mounted in the
workspace.

## Result

"Across four models, target Skill injection **reduces mean Pass@2 by 1.3% to
4.2%**, lowers task completion depth, and **increases token cost by 72% to
394%**, with **gains in only 17% to 36% of Skill-project pairs**."

Two failure modes, told apart by the length-matched control:

- **Length-distracted**: "an equally long irrelevant Skill reproduces most of
  the loss" — the content was not the problem, the volume was.
- **Content-misled**: "prompt length is neutral but Skill content still lowers
  Pass@2 by 1.1% to 1.4%" — the guidance itself moved the agent the wrong way.

Further findings: "losses concentrate on easy early tasks, **Skill rankings
transfer weakly across models**, and anti-pattern rules outperform
example-heavy content within helpful Skills."

## What the authors conclude

The framing is the strongest claim in this reading: a matched skill is "a
**hypothesis** about a particular Skill-project-model triple rather than a
portable asset", making injection "a per-deployment routing decision" and
making "length-matched controls and per-model audits a minimum standard for
Agent-Skill evaluation."

## Caveats

One domain (web development), public skills of unknown authoring quality, and
a benchmark whose authors are proposing their own evaluation standard. The
reading covered the abstract page only; per-model figures and the paper's own
limitations were not retrieved. This is a paraphrased reading record with
quoted material, not an independently reproduced result.

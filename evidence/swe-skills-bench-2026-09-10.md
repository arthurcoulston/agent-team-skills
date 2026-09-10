---
id: swe-skills-bench-2026-09-10
kind: source_reading
source_title: "SWE-Skills-Bench: Do Agent Skills Actually Help in Real-World Software Engineering?"
source_url: https://arxiv.org/abs/2603.15401v1
source_date: 2026-03-16
read_on: 2026-09-10
read_by: scout
method: Web retrieval of the abstract page for v1, with verbatim extraction of the abstract's design and headline figures; per-skill tables and the full limitations section were not retrieved
---

# Reading — SWE-Skills-Bench v1

[Source](https://arxiv.org/abs/2603.15401v1). Han, Zhang, Song, Fang, Chen,
Sun, Hu. v1, 2026-03-16. Reading scope: the abstract, its design and its
headline figures.

## Design

"The first requirement-driven benchmark that isolates the marginal utility of
agent skills in real-world software engineering". 49 public SWE skills paired
with "authentic GitHub repositories pinned at fixed commits and requirement
documents with explicit acceptance criteria, yielding approximately 565 task
instances across six SWE subdomains." Acceptance criteria are mapped to
execution-based tests, giving "controlled paired evaluation with and without
the skill."

The pairing is the part worth copying: the same task, the same pinned
repository state, with and without the guidance, scored by tests rather than
by judgement.

## Result

"Skill injection benefits are far more limited than rapid adoption suggests:
**39 of 49 skills yield zero pass-rate improvement**, and the average gain is
only **+1.2%**."

"Token overhead varies from modest savings to a **451% increase** while pass
rates remain unchanged."

The distribution matters more than the average: "Only seven specialized skills
produce meaningful gains (**up to +30%**), while **three degrade performance
(up to −10%)** due to version-mismatched guidance conflicting with project
context."

## What the authors conclude

"Agent skills are a narrow intervention whose utility depends strongly on
domain fit, abstraction level, and contextual compatibility."

The named mechanism for the three harmful skills — guidance written for a
different version of the thing it advises about — is a staleness failure, not
a writing failure. Guidance that was once correct became wrong when its
subject moved.

## Caveats

One domain (software engineering), public skills the authors did not author,
and a single benchmark construction. The reading covered the abstract page;
per-skill results, the model panel and the paper's own limitations section
were not retrieved and are not relied on here. This is a paraphrased reading
record with quoted material, not an independently reproduced result.

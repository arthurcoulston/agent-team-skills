---
id: mission-assessment-agent-process-2026-09-10
kind: source_reading
source_title: "Beyond Final Scores: A Systematic Evaluation of Agents for Long-Horizon AI Research and Development"
source_url: https://arxiv.org/html/2608.13417v1
source_date: 2026-08-13
read_on: 2026-09-10
read_by: scout
method: Full HTML paper; evaluation setting, process results, experience reuse, discussion and limitations.
---

# Reading — process-level evaluation of long-horizon agents

[Li et al.](https://arxiv.org/html/2608.13417v1) evaluated seven frontier
models on 36 bounded AutoLab tasks, with three 2–12 hour rollouts per
model-task pair and objective verifiers. Similar final scores concealed
different failures in framing, execution and feedback control. Build volume
did not imply delivery; checkpoints exposed preservation, regression and
recovery. Reused experience sometimes improved later choices and sometimes
anchored the agent to a misleading conclusion or local optimum.

This supports inspecting trajectory, artifacts and decision changes rather
than a terminal score or activity total. The tasks were short, technical and
verifier-rich; the study does not establish how to assess an indefinite
organization, qualitative social outcomes, pivots or persuasive reports.


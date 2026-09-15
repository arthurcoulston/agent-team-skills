# Security

This repository is written guidance, the knowledge and evidence behind it,
and a few small Node scripts that check and draw from that material. Nothing
here runs as a service, listens on a port, or holds credentials, so the
surface is narrow. It is not empty:

- **The tooling.** `tools/check.mjs` and `tools/build-views.mjs` read a
  checkout and write beneath it; `tools/run-case.mjs` additionally executes
  the agent command you give it. A defect that lets repository content decide
  what runs, or reach outside the checkout it was pointed at, is a
  vulnerability.
- **The content.** These skills are written to be loaded into another agent's
  context. Text shaped to redirect a consuming agent rather than instruct it
  is a security matter here, even though it is only prose.

## Reporting

Use GitHub's private vulnerability reporting on this repository ("Report a
vulnerability" under the Security tab) rather than a public issue. Reports
get a response within a week.

If you are unsure whether something qualifies, report it privately anyway.
A private question costs less than a public one you cannot withdraw.

## Not a security report

Guidance that is wrong, unsupported, or transferred past the conditions its
evidence covers is an ordinary issue or change proposal, not a vulnerability.
[CONTRIBUTING.md](CONTRIBUTING.md) states what such a change has to show.

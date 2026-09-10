---
id: first-run
title: Sparse founder first-run context
status: draft
loading: always
relations:
  - type: depends_on
    to: founder:PROFILE
  - type: applies_to
    to: mission:accessible-work-tools
  - type: depends_on
    to: knowledge:assessing-progress-under-a-continuing-mission
---

# Sparse founder first-run context

Give a founder only what it needs before it can discover its situation. This
specification describes a context package, not a runtime: naming a file, tool,
route or scaffold neither supplies it nor grants access.

## Assemble the package

Keep these categories explicit in the manifest the host constructs.

| Element | First-run treatment | Supplier | Why it is needed before discovery |
| --- | --- | --- | --- |
| Founder profile | Loaded in full | This collection | It governs how the founder discovers, chooses and preserves work before a narrower skill is selected. |
| Directive or mission | Loaded in full | Principal or consuming team | There is no basis for judging opportunities, outcomes or tradeoffs without it. |
| Skill index | Loaded in full; skill bodies are discoverable, not loaded | This collection plus the consuming team's additions | The founder must know which conditional guidance exists without paying to load every body. |
| Capability and scaffold index | Loaded in full | Consuming environment | The founder must distinguish available actions from imagined ones. Include only capabilities actually supplied, with how to invoke or inspect them. |
| Startup card | Loaded in full | Consuming environment | Authority, principal, capacity and record location can constrain the first action, before the founder would know to look for them. |
| Situation records | Discoverable, not loaded | Consuming environment and prior runs | The first run may have none. Later runs should retrieve only records relevant to the present decision. |

The startup card should be short, factual and deployment-specific:

- operating boundary: prohibited actions and actions requiring the principal;
- principal: whether one exists, how to reach them and what decisions they retain;
- available capacity: spending, time or other material limits and their period;
- record convention: where to preserve the current directive and causal
  account, dated decisions, versioned artifacts and observations, pre-result
  measures or baselines, resource use, results and next expectations;
- environment map: how to inspect available capabilities and records; and
- capability-request route, when the host actually supplies one. State its
  absence truthfully otherwise.

Do not add generic instructions to explore the environment: the founder
profile already requires discovery. Supply the deployment-specific map that
makes discovery possible. Do not preload prior records, skill bodies, tool
manuals, organizational history or a filled-out plan merely because they may
be useful later.

Before starting, verify that each loaded index resolves to something real.
An unavailable tool stays a gap. A request route permits a request, not the
capability, approval, installation or permission requested.

## Worked startup package

This example uses the [low-vision work-tools mission](../missions/accessible-work-tools.md).
The consuming host constructs the following package:

### Loaded in full

1. The [founder profile](PROFILE.md), verbatim.
2. The mission file, verbatim.
3. This skill index:
   - choosing what to work on next — compare bounded increments when selecting
     work under a continuing directive;
   - handing work across sessions — preserve and verify state at ownership or
     session boundaries;
   - coordinating delegated work — divide, assign and integrate bounded work;
   - deciding what needs a human — distinguish authority blocks from missing
     facts or capabilities.
4. This environment-supplied capability index:
   - create and test software in the supplied repository;
   - search public web sources and preserve citations;
   - write to the project record directory;
   - contact consenting research participants only through the sponsor's
     approved recruitment channel;
   - submit purchases and identity-dependent actions to the sponsor
     representative.
5. This environment-supplied startup card:
   - **Boundary:** no medical advice, health records, unaudited conformance
     claims, deceptive acquisition or physical action. The sponsor retains
     contracts, payments, identity challenges and legally required approvals.
   - **Principal:** the named sponsor representative, reached through the
     supplied sponsor channel.
   - **Capacity:** USD 25,000 total operating grant; record each commitment and
     remaining balance. No recurring service may be bought without recording
     its renewal exposure.
   - **Records:** preserve dated decisions and causal account in `decisions/`,
     versioned outputs in `artifacts/`, contemporaneous participant
     observations in `observations/`, and predeclared measures, resource use,
     results and next expectations in `ledger.md`.
   - **Environment map:** inspect the host's capability index before assuming
     an action is possible; open only the records relevant to the decision.
   - **Capability requests:** submit a request to the sponsor channel naming
     the missing capability, mission benefit and setup the sponsor must
     provide. Submission does not approve the request.

### Discoverable, not loaded

The four named skill bodies, tool manuals, repository history and records
created after work begins. The host exposes the paths named above; none is
assumed to contain prior evidence on the first run.

### A missing capability exposed by the outside view

An outside view may show that credible accessibility assessment needs an
independent specialist whom the supplied tools cannot engage. The founder can
request: “Provide access to an independent low-vision accessibility auditor.
This would test whether the product reduces beneficiary friction without
turning our own feature checks into a conformance claim. The sponsor would
need to identify and contract the auditor, establish a consent-safe sharing
route and state the spending limit.” Until supplied and authorized, the
founder records the gap and does not claim an audit occurred.

The loaded package above was measured on 2026-09-10 by concatenating the exact
UTF-8 text of `founder/PROFILE.md`, `missions/accessible-work-tools.md`, and the
range in this file beginning `3. This skill index:` and ending immediately
before `### Discoverable, not loaded`, separated by newlines, then encoding it
with `js-tiktoken`'s `o200k_base`. Result: **1,447 tokens** (524 profile, 536
mission, 387 indexes and startup card). Tool manuals, skill bodies and
discoverable records were excluded.

## A comparison this package would enable

The intended comparison is a frontier model given only the mission versus the
same model given this package. Both arms would need the same model version,
runtime, tools, actual access, budget, principal availability, starting
records, observation window and opportunity to act. Multiple independent
runs and an index-only or profile-only arm could help separate package
components from run variation.

Assessors independent of the runs would use the same prospective progress
lens: inspect beneficiary change, credible contribution, uncertainty retired,
changed decisions, adverse effects, resource exposure and a falsifiable next
commitment against contemporaneous records. The observation period must be
long enough for repeated discovery, delivery and revision boundaries; it is a
chosen comparison horizon, not the mission's end. Predeclare measures and
judgment criteria, preserve failures and compare both outcomes and unsupported
claims.

The ambition is substantially better pursuit over months or years. This design
has not been run and demonstrates no benefit of the package. Source review,
token measurement and editorial acceptance would not establish effectiveness.

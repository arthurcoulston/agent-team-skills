---
id: github-app-capability-requests-2026-09-11
kind: source_reading
source_title: GitHub App permission, installation-request, and changed-permission documentation
source_url: https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app
source_date: unknown
read_on: 2026-09-11
read_by: scout
method: Read the permission-selection, installation-request, changed-permission approval, and organization request-limit pages in full.
---

# Reading — GitHub App capability acquisition

App permissions begin empty and should be selected for required operations.
Members can request an installation from an organization owner where that route
is enabled; owners can narrow repository scope or disable requests. Changed
permissions require approval before taking effect. Installation may itself
grant repository or organization access, so setup and authorization must be
distinguished by inspecting the actual transaction rather than by assuming they
always occur separately.

---
id: instruction-authoring-pilot-artifacts-2026-09-09
kind: trial_materials
source_title: Instruction-authoring pilot tasks and outputs
source_date: 2026-09-09
read_on: 2026-09-09
read_by: mason
method: Preserved task text, authored answers, synthetic fixtures, final files and blinded reviews
relations:
  - type: supports
    to: evidence:instruction-authoring-pilot-2026-09-09
---

# Instruction-authoring pilot materials

Data supporting the [pilot report](instruction-authoring-pilot-2026-09-09.md).
Author answers, fixture content, final files and review text are preserved
without editing. All data describe fictional tasks. Machine-local paths and
session identifiers are excluded; this is not a full harness transcript.

Authors were told to read their assigned prompt, write only the requested
instruction artifact, and use no other source files or external services.
Recipients were told to apply their assigned instructions separately in the
two snapshot directories. Reviewers received source requirements and
anonymized candidate packets without the condition mapping. Assignment IDs
below can now be mapped to conditions because the review has finished.

The JSON contains exact task text. The treated prompt was the pinned skill
body (without frontmatter), then a horizontal separator, then that task.
The baseline prompt was the task alone. Prompt hashes in the author records
cover those supplied prompt files, including their terminal newline; the
shared orchestration wrapper and ordinary harness context are additional.

```json
{
  "skill_commit": "b0a1f9459b395fe207eb321ab58cf68bd5e7405e",
  "model": "gpt-6-astra",
  "reasoning_effort": "xhigh",
  "harness": "Codex 0.153.4 native collaboration subagents",
  "intervention": "skill body prepended; linked references not loaded; fork_turns=none",
  "task_texts": {
    "handoff": "Write a handoff for another agent. Return only the instructions it should\nreceive. It will receive the files named below and already knows how to read\nand write Markdown. You are authoring its instructions, not doing its task.\n\nThe agent must update digest.md from release-notes.md and digest.md. Include\nconfirmed changes since the date recorded in the digest. Do not repeat\nentries already included. A correction to an existing entry is an exception:\nreplace that entry even when its original release predates the cutoff.\nIf a note is tentative or contradicts another note, put the specific\nuncertainty in an Unresolved section instead of presenting it as confirmed.\nKeep links to the source notes. If no relevant changes or unresolved items\nexist, leave digest.md unchanged. Work is local and authorized; publishing\nor contacting anyone is outside this task. The agent can complete routine\nchoices without asking for approval. Do not impose a new format on existing\ndigest entries or make it research facts outside the two supplied files.\n",
    "revision": "Rewrite the following standing instructions for an agent maintaining a\ndocument index. Remove verbosity while preserving the operating requirements.\nReturn only the revised instructions. The agent already has file tools and\ngeneral Markdown knowledge. Other loaded instructions allow local edits and\nrequire authorization for external publication; do not restate those rules.\n\n“You are a diligent, careful and thoughtful steward of our very important\ndocument index. The index must be correct and accurate, because accuracy\nand correctness are essential to a trustworthy index. Whenever a run is\nstarted, first inspect changes.json, which lists source documents changed\nsince the last successful run. Refresh affected entries in index.md using\nthe changed documents. If there are no changes, leave the index alone.\nIf a source is absent from the list, that is not proof it was deleted.\nRemove an entry only when changes.json explicitly marks that source deleted.\nIf a change cannot be resolved from the supplied documents, record its source\nID and the unresolved question in pending.md, then continue independent\nentries. Preserve existing pending items until evidence resolves them.\nRecord successfully handled change IDs in handled.json so later runs do not\nrepeat them. Do not mark unresolved changes handled. Please be methodical,\nmeticulous and comprehensive. Make every effort to do a great job.”\n"
  },
  "authors": [
    {
      "id": "a17",
      "case": "handoff",
      "condition": "baseline",
      "replicate": 1,
      "prompt_sha256": "95b261c999f2d2c5a35e3633fe287357203f5c8cc1b68001fc81141439ef5bfc",
      "words": 200,
      "answer_tokens_o200k": 247,
      "prompt_tokens_o200k": 207,
      "answer": "Update `digest.md` using only `release-notes.md` and the existing `digest.md`.\n\n- Read both files and use the date recorded in the digest as the cutoff for new changes.\n- Add confirmed changes since that date, excluding entries already included in the digest.\n- Treat a correction to an existing entry as an exception: replace the affected entry with the confirmed correction, even if the original release predates the cutoff. Do not add a duplicate entry for the correction.\n- If a relevant note is tentative or contradicts another note, describe the specific uncertainty in an `Unresolved` section and link to the affected source notes. Do not present the uncertain claim as confirmed or choose between conflicting claims without support from the supplied files. Apply this rule to proposed corrections as well.\n- Keep links to the source notes for additions, replacements, and unresolved items. Preserve the existing format of digest entries; reuse an existing `Unresolved` section or add one only when needed.\n- If there are no relevant changes, corrections, or unresolved items, leave `digest.md` unchanged.\n\nMake routine choices without asking for approval. This local update is authorized. Do not research outside the two supplied files, publish anything, or contact anyone.\n"
    },
    {
      "id": "b42",
      "case": "revision",
      "condition": "with-skill",
      "replicate": 1,
      "prompt_sha256": "eb4e65f9a4bbdfd690916e54ac015c9d4590f5c765c068026549d37c70dc7fc1",
      "words": 102,
      "answer_tokens_o200k": 130,
      "prompt_tokens_o200k": 1062,
      "answer": "First inspect `changes.json` each run; it lists source documents changed since the last successful run.\n\n- Refresh affected entries in `index.md` using the changed documents. If there are no changes, leave the index unchanged.\n- Remove an entry only when `changes.json` explicitly marks its source deleted. Absence from the list does not prove deletion.\n- If the supplied documents cannot resolve a change, record its source ID and unresolved question in `pending.md`, then continue independent entries. Preserve existing pending items until evidence resolves them.\n- Record successfully handled change IDs in `handled.json` to prevent repeat processing. Do not mark unresolved changes handled.\n"
    },
    {
      "id": "c09",
      "case": "handoff",
      "condition": "with-skill",
      "replicate": 1,
      "prompt_sha256": "c9c46e5896e50c75c5e6141799e76a1fb13ef5447e455b547de4875feae5993c",
      "words": 148,
      "answer_tokens_o200k": 194,
      "prompt_tokens_o200k": 1012,
      "answer": "Update `digest.md` using only `release-notes.md` and `digest.md`.\n\nRead the digest’s recorded date, existing entries, and formatting. Include confirmed changes since that date without repeating entries already included. For a confirmed correction to an existing entry, replace that entry even if its original release predates the cutoff.\n\nIf a relevant note is tentative or contradicts another note, describe the specific uncertainty in an `Unresolved` section instead of presenting the disputed change as confirmed. Use an existing `Unresolved` section if present; create one only when needed. Avoid duplicating unresolved items already recorded.\n\nKeep links to the source notes for changes, corrections, and unresolved items. Preserve the existing format of digest entries. If there are no relevant changes or unresolved items to incorporate, leave `digest.md` unchanged.\n\nThe local update is authorized. Make routine choices without asking for approval. Do not research outside the two supplied files, publish anything, or contact anyone.\n"
    },
    {
      "id": "d63",
      "case": "revision",
      "condition": "baseline",
      "replicate": 1,
      "prompt_sha256": "670ff1281bb91a63e7dd0be0e9dd47481c70c8dae8a9b4119e11d2e80b543dc5",
      "words": 93,
      "answer_tokens_o200k": 113,
      "prompt_tokens_o200k": 257,
      "answer": "Begin each run by reading changes.json, which lists sources changed since the last successful run.\n\n- Refresh affected entries in index.md using the supplied documents. If there are no changes, leave index.md unchanged.\n- Remove entries only when changes.json explicitly marks their source deleted; omission is not deletion.\n- If supplied documents cannot resolve a change, record its source ID and unresolved question in pending.md, then continue independent entries. Preserve pending items until evidence resolves them.\n- Record successfully handled change IDs in handled.json to prevent reprocessing. Do not mark unresolved changes handled.\n"
    },
    {
      "id": "e28",
      "case": "revision",
      "condition": "baseline",
      "replicate": 2,
      "prompt_sha256": "670ff1281bb91a63e7dd0be0e9dd47481c70c8dae8a9b4119e11d2e80b543dc5",
      "words": 95,
      "answer_tokens_o200k": 115,
      "prompt_tokens_o200k": 257,
      "answer": "On each run, first read changes.json, which lists sources changed since the last successful run.\n\n- If no changes are listed, leave index.md unchanged.\n- Refresh affected index.md entries using the supplied changed documents. Remove entries only when changes.json explicitly marks their sources deleted; omission is not deletion.\n- For each change unresolved by the supplied documents, record its source ID and unresolved question in pending.md, then continue independent entries. Preserve existing pending items until evidence resolves them.\n- Record successfully handled change IDs in handled.json to prevent repeat processing. Never mark unresolved changes handled.\n"
    },
    {
      "id": "f51",
      "case": "handoff",
      "condition": "with-skill",
      "replicate": 2,
      "prompt_sha256": "c9c46e5896e50c75c5e6141799e76a1fb13ef5447e455b547de4875feae5993c",
      "words": 171,
      "answer_tokens_o200k": 219,
      "prompt_tokens_o200k": 1012,
      "answer": "Update `digest.md` using only `release-notes.md` and `digest.md`.\n\nRead both files to identify the date recorded in the digest, its existing entries, and relevant source notes. Preserve the format of existing digest entries.\n\n- Include confirmed changes since the recorded date, without repeating entries already included.\n- A confirmed correction to an existing entry must replace that entry, even when its original release predates the cutoff. Do not append a duplicate.\n- If a relevant note is tentative or contradicts another note, describe the specific uncertainty in an `Unresolved` section instead of presenting it as confirmed. This applies to proposed corrections too. Keep links to the source notes, including conflicting notes where applicable.\n- Keep source-note links for confirmed additions and replacements as well.\n\nIf there are no relevant changes, corrections, or unresolved items, leave `digest.md` unchanged. Before saving, check for duplicates, unsupported confirmations, and missing source links.\n\nMake routine choices without requesting approval. This local update is authorized; publishing, contacting anyone, and researching outside the two supplied files are outside scope.\n"
    },
    {
      "id": "g84",
      "case": "revision",
      "condition": "with-skill",
      "replicate": 2,
      "prompt_sha256": "eb4e65f9a4bbdfd690916e54ac015c9d4590f5c765c068026549d37c70dc7fc1",
      "words": 106,
      "answer_tokens_o200k": 134,
      "prompt_tokens_o200k": 1062,
      "answer": "At the start of each run, inspect `changes.json`, which lists source documents changed since the last successful run.\n\n- Refresh affected entries in `index.md` using the changed documents. If there are no changes, leave the index unchanged.\n- Remove an entry only when `changes.json` explicitly marks its source deleted. Absence from the list does not establish deletion.\n- If the supplied documents cannot resolve a change, record its source ID and unresolved question in `pending.md`, then continue with independent entries. Preserve existing pending items until evidence resolves them.\n- Record successfully handled change IDs in `handled.json` to prevent repeat work. Do not mark unresolved changes handled.\n"
    },
    {
      "id": "h36",
      "case": "handoff",
      "condition": "baseline",
      "replicate": 2,
      "prompt_sha256": "95b261c999f2d2c5a35e3633fe287357203f5c8cc1b68001fc81141439ef5bfc",
      "words": 198,
      "answer_tokens_o200k": 248,
      "prompt_tokens_o200k": 207,
      "answer": "Update `digest.md` using only `release-notes.md` and the existing `digest.md`.\n\nRead both files. Use the date recorded in the digest as the cutoff, and compare the source notes with existing entries to avoid repeating changes already included.\n\nAdd confirmed changes since the cutoff, preserving the format and style of existing digest entries. Apply confirmed corrections by replacing the affected entry, even if its original release predates the cutoff; do not append a duplicate entry for the correction.\n\nIf a relevant note is tentative or contradicts another note, describe the specific uncertainty in an `Unresolved` section rather than presenting the disputed information as confirmed. Use an existing `Unresolved` section if present, or create one as needed. An uncertain correction belongs there until it can be treated as confirmed from the supplied files. Avoid duplicating unresolved items already recorded.\n\nKeep links to the source notes with the changes, corrections, and unresolved items they support. Preserve existing source links where still applicable.\n\nIf there are no relevant changes, corrections, or unresolved items to incorporate, leave `digest.md` unchanged. Make routine choices without requesting approval. This work is local and authorized: do not publish, contact anyone, or research facts outside the two supplied files.\n"
    }
  ],
  "initial_fixtures": {
    "handoff": {
      "mixed": {
        "digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-08] Cache support (2026-08-10): Cache expires after 30 minutes. [Source](https://example.invalid/notes/r-08)\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n\n## Unresolved\n\n- [r-05] Legacy importer: ownership remains unclear. [Source](https://example.invalid/notes/r-05)\n",
        "release-notes.md": "# Release notes\n\n## r-08-correction — 2026-09-05 — confirmed\nCorrection to r-08 (originally released 2026-08-10): cache expires after 60 minutes, not 30 minutes.\nSource: https://example.invalid/notes/r-08-correction\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-10 — 2026-09-03 — confirmed\nKeyboard shortcuts are available.\nSource: https://example.invalid/notes/r-10\n\n## r-11 — 2026-09-06 — tentative\nOffline mode may be introduced; availability is unconfirmed.\nSource: https://example.invalid/notes/r-11\n\n## r-12-a — 2026-09-04 — confirmed\nThe new upload limit is 20 files per batch.\nSource: https://example.invalid/notes/r-12-a\n\n## r-12-b — 2026-09-04 — confirmed\nThe new upload limit is 50 files per batch. No note indicates which statement supersedes the other.\nSource: https://example.invalid/notes/r-12-b\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n"
      },
      "unchanged": {
        "digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n",
        "release-notes.md": "# Release notes\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n"
      }
    },
    "revision": {
      "mixed": {
        "changes.json": "{\n  \"changes\": [\n    {\n      \"change_id\": \"chg-a2\",\n      \"source_id\": \"A\",\n      \"status\": \"modified\",\n      \"path\": \"sources/A.md\"\n    },\n    {\n      \"change_id\": \"chg-c3\",\n      \"source_id\": \"C\",\n      \"status\": \"deleted\"\n    },\n    {\n      \"change_id\": \"chg-d4\",\n      \"source_id\": \"D\",\n      \"status\": \"modified\",\n      \"path\": \"sources/D.md\"\n    },\n    {\n      \"change_id\": \"chg-e5\",\n      \"source_id\": \"E\",\n      \"status\": \"modified\",\n      \"path\": \"sources/E.md\"\n    },\n    {\n      \"change_id\": \"chg-f6\",\n      \"source_id\": \"F\",\n      \"status\": \"modified\",\n      \"path\": \"sources/F.md\"\n    }\n  ]\n}\n",
        "index.md": "# Document index\n\n- A: Aperture — old overview.\n- B: Beacon — retained reference.\n- C: Cedar — retired setup.\n- D: Drift — overview.\n- E: Ember — stable reference.\n- F: Fjord — already updated.\n",
        "pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n",
        "handled.json": "[\"chg-f6\"]\n",
        "sources/A.md": "# A: Aperture\n\nAperture is the nightly sync guide.\n",
        "sources/D.md": "# D: Drift\n\nCurrent owner: Data Services.\nCurrent owner: Platform Operations.\nNo timestamps or supersession information distinguish these conflicting statements.\n",
        "sources/E.md": "# E: Ember\n\nEmber is a stable reference. Its new section covers recovery codes.\n",
        "sources/F.md": "# F: Fjord\n\nFjord — obsolete preview.\n"
      },
      "unchanged": {
        "changes.json": "{\"changes\": []}\n",
        "index.md": "# Document index\n\n- B: Beacon — retained reference.\n",
        "pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n",
        "handled.json": "[\"chg-prior\"]\n"
      }
    }
  },
  "criteria": {
    "author_handoff": [
      "Update only digest from the two supplied files",
      "Use recorded date and confirmed status for ordinary inclusion",
      "Avoid duplicate existing entries",
      "Replace an existing entry for confirmed correction even before cutoff",
      "Record specific tentative/conflicting uncertainty instead of confirmed claim",
      "Preserve links and existing entry format",
      "Leave file alone when nothing relevant exists",
      "Retain routine autonomy and exclude research, publication and contact"
    ],
    "author_revision": [
      "Inspect changes.json first on every run",
      "Refresh affected entries using supplied changed sources",
      "No listed changes means leave index alone",
      "Delete only on explicit deletion; omission is not deletion",
      "Record unresolved source ID and question, continue independent work",
      "Preserve pending items until evidence resolves them",
      "Record successful change IDs to prevent repeat processing",
      "Do not mark unresolved changes handled",
      "Remove supplied padding without introducing schedule, quota or approval gate",
      "Do not repeat already-loaded authorization boilerplate"
    ],
    "recipient_handoff": [
      "Correct r-08 to 60 minutes using correction source link",
      "Do not duplicate r-08 or r-09",
      "Add r-10 with source link",
      "Place r-11 tentative availability in Unresolved with source link",
      "Place r-12 conflicting 20/50 limits in Unresolved with both links",
      "Do not add r-01, a pre-cutoff ordinary release",
      "Preserve existing r-05 unresolved item and entry style",
      "Leave source files unchanged",
      "Unchanged snapshot: preserve all file bytes and do not rewrite digest"
    ],
    "recipient_revision": [
      "A updated to nightly sync guide",
      "B retained despite absence from changes",
      "C explicitly deleted and removed",
      "D unresolved ownership recorded with source ID, not marked handled",
      "E updated with recovery codes despite independent unresolved D",
      "F already handled: preserve already-updated entry, ignore stale source",
      "Existing pending P retained",
      "Handled IDs include a2,c3,e5,f6 and exclude d4",
      "Input changes/source files remain unchanged",
      "Unchanged snapshot: preserve every file byte and do not rewrite index"
    ]
  },
  "recipient_outputs": [
    {
      "id": "a17",
      "files": {
        "mixed/digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-08] Cache support (2026-08-10): Cache expires after 60 minutes. [Source](https://example.invalid/notes/r-08-correction)\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n- [r-10] Keyboard shortcuts (2026-09-03): Keyboard shortcuts are available. [Source](https://example.invalid/notes/r-10)\n\n## Unresolved\n\n- [r-05] Legacy importer: ownership remains unclear. [Source](https://example.invalid/notes/r-05)\n- [r-11] Offline mode (2026-09-06): Availability is tentative and unconfirmed. [Source](https://example.invalid/notes/r-11)\n- [r-12-a / r-12-b] Upload limit (2026-09-04): The notes conflict on whether the limit is 20 or 50 files per batch; neither is identified as superseding the other. [Source r-12-a](https://example.invalid/notes/r-12-a), [Source r-12-b](https://example.invalid/notes/r-12-b)\n",
        "mixed/release-notes.md": "# Release notes\n\n## r-08-correction — 2026-09-05 — confirmed\nCorrection to r-08 (originally released 2026-08-10): cache expires after 60 minutes, not 30 minutes.\nSource: https://example.invalid/notes/r-08-correction\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-10 — 2026-09-03 — confirmed\nKeyboard shortcuts are available.\nSource: https://example.invalid/notes/r-10\n\n## r-11 — 2026-09-06 — tentative\nOffline mode may be introduced; availability is unconfirmed.\nSource: https://example.invalid/notes/r-11\n\n## r-12-a — 2026-09-04 — confirmed\nThe new upload limit is 20 files per batch.\nSource: https://example.invalid/notes/r-12-a\n\n## r-12-b — 2026-09-04 — confirmed\nThe new upload limit is 50 files per batch. No note indicates which statement supersedes the other.\nSource: https://example.invalid/notes/r-12-b\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n",
        "unchanged/digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n",
        "unchanged/release-notes.md": "# Release notes\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n"
      },
      "checks": {
        "correction_60_minutes": true,
        "no_duplicates": true,
        "new_shortcuts": true,
        "tentative_unresolved": true,
        "conflict_unresolved": true,
        "old_release_excluded": true,
        "prior_uncertainty_retained": true,
        "source_unchanged": true,
        "unchanged_snapshot_bytes": true,
        "unchanged_snapshot_no_rewrite": true,
        "no_extra_snapshot_files": true
      }
    },
    {
      "id": "b42",
      "files": {
        "mixed/changes.json": "{\n  \"changes\": [\n    {\n      \"change_id\": \"chg-a2\",\n      \"source_id\": \"A\",\n      \"status\": \"modified\",\n      \"path\": \"sources/A.md\"\n    },\n    {\n      \"change_id\": \"chg-c3\",\n      \"source_id\": \"C\",\n      \"status\": \"deleted\"\n    },\n    {\n      \"change_id\": \"chg-d4\",\n      \"source_id\": \"D\",\n      \"status\": \"modified\",\n      \"path\": \"sources/D.md\"\n    },\n    {\n      \"change_id\": \"chg-e5\",\n      \"source_id\": \"E\",\n      \"status\": \"modified\",\n      \"path\": \"sources/E.md\"\n    },\n    {\n      \"change_id\": \"chg-f6\",\n      \"source_id\": \"F\",\n      \"status\": \"modified\",\n      \"path\": \"sources/F.md\"\n    }\n  ]\n}\n",
        "mixed/handled.json": "[\"chg-f6\", \"chg-a2\", \"chg-c3\", \"chg-e5\"]\n",
        "mixed/index.md": "# Document index\n\n- A: Aperture — nightly sync guide.\n- B: Beacon — retained reference.\n- D: Drift — overview.\n- E: Ember — stable reference covering recovery codes.\n- F: Fjord — already updated.\n",
        "mixed/pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n- D (chg-d4): Is the current owner Data Services or Platform Operations? The source lists both without timestamps or supersession information.\n",
        "mixed/sources/A.md": "# A: Aperture\n\nAperture is the nightly sync guide.\n",
        "mixed/sources/D.md": "# D: Drift\n\nCurrent owner: Data Services.\nCurrent owner: Platform Operations.\nNo timestamps or supersession information distinguish these conflicting statements.\n",
        "mixed/sources/E.md": "# E: Ember\n\nEmber is a stable reference. Its new section covers recovery codes.\n",
        "mixed/sources/F.md": "# F: Fjord\n\nFjord — obsolete preview.\n",
        "unchanged/changes.json": "{\"changes\": []}\n",
        "unchanged/handled.json": "[\"chg-prior\"]\n",
        "unchanged/index.md": "# Document index\n\n- B: Beacon — retained reference.\n",
        "unchanged/pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n"
      },
      "checks": {
        "a_updated": true,
        "b_retained": true,
        "c_removed": true,
        "d_pending": true,
        "e_updated": true,
        "f_not_reprocessed": true,
        "p_retained": true,
        "handled_exact": true,
        "inputs_unchanged": true,
        "unchanged_snapshot_bytes": true,
        "unchanged_snapshot_no_rewrite": true,
        "no_extra_snapshot_files": true
      }
    },
    {
      "id": "c09",
      "files": {
        "mixed/digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-08] Cache support (2026-08-10): Cache expires after 60 minutes. [Source](https://example.invalid/notes/r-08-correction)\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n- [r-10] Keyboard shortcuts (2026-09-03): Keyboard shortcuts are available. [Source](https://example.invalid/notes/r-10)\n\n## Unresolved\n\n- [r-05] Legacy importer: ownership remains unclear. [Source](https://example.invalid/notes/r-05)\n- [r-11] Offline mode (2026-09-06): Introduction is tentative; availability is unconfirmed. [Source](https://example.invalid/notes/r-11)\n- [r-12-a / r-12-b] Upload limit (2026-09-04): Notes conflict between 20 and 50 files per batch; neither is identified as superseding the other. [Source](https://example.invalid/notes/r-12-a) [Source](https://example.invalid/notes/r-12-b)\n",
        "mixed/release-notes.md": "# Release notes\n\n## r-08-correction — 2026-09-05 — confirmed\nCorrection to r-08 (originally released 2026-08-10): cache expires after 60 minutes, not 30 minutes.\nSource: https://example.invalid/notes/r-08-correction\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-10 — 2026-09-03 — confirmed\nKeyboard shortcuts are available.\nSource: https://example.invalid/notes/r-10\n\n## r-11 — 2026-09-06 — tentative\nOffline mode may be introduced; availability is unconfirmed.\nSource: https://example.invalid/notes/r-11\n\n## r-12-a — 2026-09-04 — confirmed\nThe new upload limit is 20 files per batch.\nSource: https://example.invalid/notes/r-12-a\n\n## r-12-b — 2026-09-04 — confirmed\nThe new upload limit is 50 files per batch. No note indicates which statement supersedes the other.\nSource: https://example.invalid/notes/r-12-b\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n",
        "unchanged/digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n",
        "unchanged/release-notes.md": "# Release notes\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n"
      },
      "checks": {
        "correction_60_minutes": true,
        "no_duplicates": true,
        "new_shortcuts": true,
        "tentative_unresolved": true,
        "conflict_unresolved": true,
        "old_release_excluded": true,
        "prior_uncertainty_retained": true,
        "source_unchanged": true,
        "unchanged_snapshot_bytes": true,
        "unchanged_snapshot_no_rewrite": true,
        "no_extra_snapshot_files": true
      }
    },
    {
      "id": "d63",
      "files": {
        "mixed/changes.json": "{\n  \"changes\": [\n    {\n      \"change_id\": \"chg-a2\",\n      \"source_id\": \"A\",\n      \"status\": \"modified\",\n      \"path\": \"sources/A.md\"\n    },\n    {\n      \"change_id\": \"chg-c3\",\n      \"source_id\": \"C\",\n      \"status\": \"deleted\"\n    },\n    {\n      \"change_id\": \"chg-d4\",\n      \"source_id\": \"D\",\n      \"status\": \"modified\",\n      \"path\": \"sources/D.md\"\n    },\n    {\n      \"change_id\": \"chg-e5\",\n      \"source_id\": \"E\",\n      \"status\": \"modified\",\n      \"path\": \"sources/E.md\"\n    },\n    {\n      \"change_id\": \"chg-f6\",\n      \"source_id\": \"F\",\n      \"status\": \"modified\",\n      \"path\": \"sources/F.md\"\n    }\n  ]\n}\n",
        "mixed/handled.json": "[\"chg-f6\", \"chg-a2\", \"chg-c3\", \"chg-e5\"]\n",
        "mixed/index.md": "# Document index\n\n- A: Aperture — nightly sync guide.\n- B: Beacon — retained reference.\n- D: Drift — overview.\n- E: Ember — stable reference; includes recovery codes.\n- F: Fjord — already updated.\n",
        "mixed/pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n- D (chg-d4): Who is the current owner: Data Services or Platform Operations? The supplied source gives conflicting owners without timestamps or supersession information.\n",
        "mixed/sources/A.md": "# A: Aperture\n\nAperture is the nightly sync guide.\n",
        "mixed/sources/D.md": "# D: Drift\n\nCurrent owner: Data Services.\nCurrent owner: Platform Operations.\nNo timestamps or supersession information distinguish these conflicting statements.\n",
        "mixed/sources/E.md": "# E: Ember\n\nEmber is a stable reference. Its new section covers recovery codes.\n",
        "mixed/sources/F.md": "# F: Fjord\n\nFjord — obsolete preview.\n",
        "unchanged/changes.json": "{\"changes\": []}\n",
        "unchanged/handled.json": "[\"chg-prior\"]\n",
        "unchanged/index.md": "# Document index\n\n- B: Beacon — retained reference.\n",
        "unchanged/pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n"
      },
      "checks": {
        "a_updated": true,
        "b_retained": true,
        "c_removed": true,
        "d_pending": true,
        "e_updated": true,
        "f_not_reprocessed": true,
        "p_retained": true,
        "handled_exact": true,
        "inputs_unchanged": true,
        "unchanged_snapshot_bytes": true,
        "unchanged_snapshot_no_rewrite": true,
        "no_extra_snapshot_files": true
      }
    },
    {
      "id": "e28",
      "files": {
        "mixed/changes.json": "{\n  \"changes\": [\n    {\n      \"change_id\": \"chg-a2\",\n      \"source_id\": \"A\",\n      \"status\": \"modified\",\n      \"path\": \"sources/A.md\"\n    },\n    {\n      \"change_id\": \"chg-c3\",\n      \"source_id\": \"C\",\n      \"status\": \"deleted\"\n    },\n    {\n      \"change_id\": \"chg-d4\",\n      \"source_id\": \"D\",\n      \"status\": \"modified\",\n      \"path\": \"sources/D.md\"\n    },\n    {\n      \"change_id\": \"chg-e5\",\n      \"source_id\": \"E\",\n      \"status\": \"modified\",\n      \"path\": \"sources/E.md\"\n    },\n    {\n      \"change_id\": \"chg-f6\",\n      \"source_id\": \"F\",\n      \"status\": \"modified\",\n      \"path\": \"sources/F.md\"\n    }\n  ]\n}\n",
        "mixed/handled.json": "[\n  \"chg-f6\",\n  \"chg-a2\",\n  \"chg-c3\",\n  \"chg-e5\"\n]\n",
        "mixed/index.md": "# Document index\n\n- A: Aperture — nightly sync guide.\n- B: Beacon — retained reference.\n- D: Drift — overview.\n- E: Ember — stable reference with recovery codes.\n- F: Fjord — already updated.\n",
        "mixed/pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n- D: Who is the current owner: Data Services or Platform Operations? The supplied source lists both without timestamps or supersession information (chg-d4).\n",
        "mixed/sources/A.md": "# A: Aperture\n\nAperture is the nightly sync guide.\n",
        "mixed/sources/D.md": "# D: Drift\n\nCurrent owner: Data Services.\nCurrent owner: Platform Operations.\nNo timestamps or supersession information distinguish these conflicting statements.\n",
        "mixed/sources/E.md": "# E: Ember\n\nEmber is a stable reference. Its new section covers recovery codes.\n",
        "mixed/sources/F.md": "# F: Fjord\n\nFjord — obsolete preview.\n",
        "unchanged/changes.json": "{\"changes\": []}\n",
        "unchanged/handled.json": "[\"chg-prior\"]\n",
        "unchanged/index.md": "# Document index\n\n- B: Beacon — retained reference.\n",
        "unchanged/pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n"
      },
      "checks": {
        "a_updated": true,
        "b_retained": true,
        "c_removed": true,
        "d_pending": true,
        "e_updated": true,
        "f_not_reprocessed": true,
        "p_retained": true,
        "handled_exact": true,
        "inputs_unchanged": true,
        "unchanged_snapshot_bytes": true,
        "unchanged_snapshot_no_rewrite": true,
        "no_extra_snapshot_files": true
      }
    },
    {
      "id": "f51",
      "files": {
        "mixed/digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-08] Cache support (2026-08-10): Cache expires after 60 minutes. [Source](https://example.invalid/notes/r-08-correction)\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n- [r-10] Keyboard shortcuts (2026-09-03): Keyboard shortcuts are available. [Source](https://example.invalid/notes/r-10)\n\n## Unresolved\n\n- [r-05] Legacy importer: ownership remains unclear. [Source](https://example.invalid/notes/r-05)\n- [r-11] Offline mode (2026-09-06): Introduction is tentative; availability is unconfirmed. [Source](https://example.invalid/notes/r-11)\n- [r-12-a / r-12-b] Upload limit (2026-09-04): Source notes conflict on whether the limit is 20 or 50 files per batch; neither is identified as superseding the other. [20-file source](https://example.invalid/notes/r-12-a) [50-file source](https://example.invalid/notes/r-12-b)\n",
        "mixed/release-notes.md": "# Release notes\n\n## r-08-correction — 2026-09-05 — confirmed\nCorrection to r-08 (originally released 2026-08-10): cache expires after 60 minutes, not 30 minutes.\nSource: https://example.invalid/notes/r-08-correction\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-10 — 2026-09-03 — confirmed\nKeyboard shortcuts are available.\nSource: https://example.invalid/notes/r-10\n\n## r-11 — 2026-09-06 — tentative\nOffline mode may be introduced; availability is unconfirmed.\nSource: https://example.invalid/notes/r-11\n\n## r-12-a — 2026-09-04 — confirmed\nThe new upload limit is 20 files per batch.\nSource: https://example.invalid/notes/r-12-a\n\n## r-12-b — 2026-09-04 — confirmed\nThe new upload limit is 50 files per batch. No note indicates which statement supersedes the other.\nSource: https://example.invalid/notes/r-12-b\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n",
        "unchanged/digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n",
        "unchanged/release-notes.md": "# Release notes\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n"
      },
      "checks": {
        "correction_60_minutes": true,
        "no_duplicates": true,
        "new_shortcuts": true,
        "tentative_unresolved": true,
        "conflict_unresolved": true,
        "old_release_excluded": true,
        "prior_uncertainty_retained": true,
        "source_unchanged": true,
        "unchanged_snapshot_bytes": true,
        "unchanged_snapshot_no_rewrite": true,
        "no_extra_snapshot_files": true
      }
    },
    {
      "id": "g84",
      "files": {
        "mixed/changes.json": "{\n  \"changes\": [\n    {\n      \"change_id\": \"chg-a2\",\n      \"source_id\": \"A\",\n      \"status\": \"modified\",\n      \"path\": \"sources/A.md\"\n    },\n    {\n      \"change_id\": \"chg-c3\",\n      \"source_id\": \"C\",\n      \"status\": \"deleted\"\n    },\n    {\n      \"change_id\": \"chg-d4\",\n      \"source_id\": \"D\",\n      \"status\": \"modified\",\n      \"path\": \"sources/D.md\"\n    },\n    {\n      \"change_id\": \"chg-e5\",\n      \"source_id\": \"E\",\n      \"status\": \"modified\",\n      \"path\": \"sources/E.md\"\n    },\n    {\n      \"change_id\": \"chg-f6\",\n      \"source_id\": \"F\",\n      \"status\": \"modified\",\n      \"path\": \"sources/F.md\"\n    }\n  ]\n}\n",
        "mixed/handled.json": "[\"chg-f6\", \"chg-a2\", \"chg-c3\", \"chg-e5\"]\n",
        "mixed/index.md": "# Document index\n\n- A: Aperture — nightly sync guide.\n- B: Beacon — retained reference.\n- D: Drift — overview.\n- E: Ember — stable reference; includes recovery codes.\n- F: Fjord — already updated.\n",
        "mixed/pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n- D: Who is the current owner: Data Services or Platform Operations? The source lists both without timestamps or supersession information (change chg-d4).\n",
        "mixed/sources/A.md": "# A: Aperture\n\nAperture is the nightly sync guide.\n",
        "mixed/sources/D.md": "# D: Drift\n\nCurrent owner: Data Services.\nCurrent owner: Platform Operations.\nNo timestamps or supersession information distinguish these conflicting statements.\n",
        "mixed/sources/E.md": "# E: Ember\n\nEmber is a stable reference. Its new section covers recovery codes.\n",
        "mixed/sources/F.md": "# F: Fjord\n\nFjord — obsolete preview.\n",
        "unchanged/changes.json": "{\"changes\": []}\n",
        "unchanged/handled.json": "[\"chg-prior\"]\n",
        "unchanged/index.md": "# Document index\n\n- B: Beacon — retained reference.\n",
        "unchanged/pending.md": "# Pending\n\n- P: Which retention period applies? Awaiting source confirmation.\n"
      },
      "checks": {
        "a_updated": true,
        "b_retained": true,
        "c_removed": true,
        "d_pending": true,
        "e_updated": true,
        "f_not_reprocessed": true,
        "p_retained": true,
        "handled_exact": true,
        "inputs_unchanged": true,
        "unchanged_snapshot_bytes": true,
        "unchanged_snapshot_no_rewrite": true,
        "no_extra_snapshot_files": true
      }
    },
    {
      "id": "h36",
      "files": {
        "mixed/digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-08] Cache support (2026-08-10): Cache expires after 60 minutes. [Source](https://example.invalid/notes/r-08) [Correction](https://example.invalid/notes/r-08-correction)\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n- [r-10] Keyboard shortcuts (2026-09-03): Keyboard shortcuts are available. [Source](https://example.invalid/notes/r-10)\n\n## Unresolved\n\n- [r-05] Legacy importer: ownership remains unclear. [Source](https://example.invalid/notes/r-05)\n- [r-11] Offline mode (2026-09-06): Introduction is tentative; availability is unconfirmed. [Source](https://example.invalid/notes/r-11)\n- [r-12-a, r-12-b] Upload limit (2026-09-04): Confirmed notes conflict on whether the limit is 20 or 50 files per batch; neither is identified as superseding the other. [20-file source](https://example.invalid/notes/r-12-a) [50-file source](https://example.invalid/notes/r-12-b)\n",
        "mixed/release-notes.md": "# Release notes\n\n## r-08-correction — 2026-09-05 — confirmed\nCorrection to r-08 (originally released 2026-08-10): cache expires after 60 minutes, not 30 minutes.\nSource: https://example.invalid/notes/r-08-correction\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-10 — 2026-09-03 — confirmed\nKeyboard shortcuts are available.\nSource: https://example.invalid/notes/r-10\n\n## r-11 — 2026-09-06 — tentative\nOffline mode may be introduced; availability is unconfirmed.\nSource: https://example.invalid/notes/r-11\n\n## r-12-a — 2026-09-04 — confirmed\nThe new upload limit is 20 files per batch.\nSource: https://example.invalid/notes/r-12-a\n\n## r-12-b — 2026-09-04 — confirmed\nThe new upload limit is 50 files per batch. No note indicates which statement supersedes the other.\nSource: https://example.invalid/notes/r-12-b\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n",
        "unchanged/digest.md": "# Release digest\n\nCutoff: 2026-08-31\n\n- [r-09] Batch export (2026-09-02): CSV export is available. [Source](https://example.invalid/notes/r-09)\n",
        "unchanged/release-notes.md": "# Release notes\n\n## r-09 — 2026-09-02 — confirmed\nCSV export is available.\nSource: https://example.invalid/notes/r-09\n\n## r-01 — 2026-08-01 — confirmed\nArchive browsing is available.\nSource: https://example.invalid/notes/r-01\n"
      },
      "checks": {
        "correction_60_minutes": true,
        "no_duplicates": true,
        "new_shortcuts": true,
        "tentative_unresolved": true,
        "conflict_unresolved": true,
        "old_release_excluded": true,
        "prior_uncertainty_retained": true,
        "source_unchanged": true,
        "unchanged_snapshot_bytes": true,
        "unchanged_snapshot_no_rewrite": true,
        "no_extra_snapshot_files": true
      }
    }
  ],
  "author_review": "# Author-output review\n\nAll eight candidates pass. None materially loses an operating requirement. The handoffs differ in useful clarifications and one added check; the index revisions are nearly equivalent. These are qualitative judgments about these texts, not evidence of statistical effects.\n\n## Handoff\n\nIn the table, **core requirements** means: use the two supplied files; take the digest date as the cutoff; include confirmed changes without duplicates; replace corrections even for releases before the cutoff; put specific tentative or conflicting claims in `Unresolved`; retain source links; preserve existing entry format; leave the file unchanged when nothing relevant needs incorporating; make routine local choices without approval; do not publish, contact anyone, or research elsewhere.\n\n| Candidate | Preserved requirements | Material omissions/changes | Unsupported additions | Overall |\n|---|---|---|---|---|\n| c09 | All core requirements, including the correction exception and specific uncertainty. | None. The uncertainty rule covers corrections implicitly. | No material unsupported obligation. Reusing `Unresolved` and avoiding duplicate unresolved items are sensible applications of the existing-format and no-repeat requirements. | **Pass.** Complete and economical. |\n| h36 | All core requirements; explicitly routes uncertain corrections to `Unresolved` and preserves applicable existing source links. | None. | No material unsupported obligation. “Format and style” is slightly broader than the source's format constraint; section reuse and unresolved-item deduplication are conservative refinements. | **Pass.** Complete, with useful edge-case clarity, although more expansive. |\n| a17 | All core requirements; explicitly applies uncertainty handling to corrections and retains links for each type of update. | None. | No material unsupported obligation. The instruction not to choose between conflicting claims without support follows the source's uncertainty rule; section reuse is a practical refinement. | **Pass.** Clear coverage of the correction/uncertainty interaction. |\n| f51 | All core requirements; explicitly covers uncertain corrections and links to conflicting source notes. | None. It does not explicitly discuss reusing `Unresolved`, but the source did not require that detail. | Adds a mandatory process step: “Before saving, check for duplicates, unsupported confirmations, and missing source links.” The source specifies these outcomes, not a separate review step. | **Pass.** The extra check is bounded and directly supports required outcomes; it adds work without changing scope or approval rules. |\n\n**Concision and useful specificity.** c09 is the most economical handoff. Its phrase “For a confirmed correction” works with its general uncertainty rule, although the reader must connect the two. h36 makes that connection explicit: “An uncertain correction belongs there.” a17 and f51 do the same more briefly with “Apply this rule to proposed corrections as well” and “This applies to proposed corrections too.” That clarification is useful because corrections are also an exception to the date cutoff.\n\nh36 offers the most detail, including “Preserve existing source links where still applicable,” but some detail repeats implications already present. a17's warning against choosing conflicting claims without support is a helpful elaboration, not a new research or approval requirement. f51's “including conflicting notes where applicable” helps make an unresolved item traceable. Its separate saving check is the only clear added procedure. Prose versus bullets does not establish a fidelity or quality difference here.\n\n## Revision\n\nHere, **all operating requirements** means: inspect `changes.json` first each run; refresh affected index entries from changed documents; leave the index unchanged when there are no changes; delete only on an explicit deletion marker; record unresolved source IDs and questions in `pending.md`; continue independent entries; preserve pending items until evidence resolves them; record successful change IDs in `handled.json`; do not mark unresolved changes handled. All candidates also omit the motivational padding and avoid restating authorization rules.\n\n| Candidate | Preserved requirements | Material omissions/changes | Unsupported additions | Overall |\n|---|---|---|---|---|\n| d63 | All operating requirements. | None material. “Using the supplied documents” is less exact than “using the changed documents,” but the preceding change-list context still identifies the affected work. | None. | **Pass.** Concise and operationally complete. |\n| b42 | All operating requirements, retaining “using the changed documents.” | None. | None. | **Pass.** A direct, clear compression. |\n| g84 | All operating requirements, retaining the changed-document scope and evidence condition for pending items. | None. | None. | **Pass.** Substantively equivalent to b42. |\n| e28 | All operating requirements, including both explicit deletion evidence and continued independent work. | None. | None. “Never mark unresolved changes handled” expresses the original prohibition. | **Pass.** Compact and complete. |\n\n**Concision and useful specificity.** d63 and e28 are especially compact; b42 and g84 differ mostly in wording. “Absence from the list does not prove deletion” (b42) and “does not establish deletion” (g84) carry the same instruction. e28 makes the no-change case a separate opening bullet and compresses the deletion rule to “omission is not deletion”; both are clear. Its “supplied changed documents” is slightly more precise than d63's “supplied documents.” These small writing differences do not create a meaningful difference in task coverage.\n",
  "recipient_review": "# Independent recipient-outcome review\n\nAll eight candidates pass the semantic review of the supplied before/after files. No candidate shows an unsupported factual addition, harmful omission, or failure to preserve relevant existing state. The small wording and link-label differences do not establish a meaningful difference in task completion.\n\nThis review used only `recipient-packet.md`. It assesses recipient outputs against the source assignments, initial snapshots, and frozen criteria; it does not assess the withheld authored instructions or infer experimental conditions.\n\n## Revision recipients\n\nAll four outputs correctly update A to the nightly sync guide, retain absent B, remove explicitly deleted C, and update E to include recovery codes despite unresolved D. Each preserves D's existing index entry and records source ID D plus the specific Data Services/Platform Operations ownership conflict in `pending.md`. Each retains existing pending item P. Each preserves F's already-updated entry despite its stale supplied source and records precisely the required handled set: `chg-a2`, `chg-c3`, `chg-e5`, and `chg-f6`, excluding unresolved `chg-d4`.\n\n| Candidate | Verdict | Completion, exceptions, retained state, and additions/omissions |\n| --- | --- | --- |\n| g84 | Pass | Meets all shared revision checks above. D's pending question explicitly names both conflicting owners, explains the missing disambiguating evidence, and includes `chg-d4`. No harmful omission or unsupported addition. |\n| d63 | Pass | Meets all shared revision checks above. `D (chg-d4)` identifies the source and change clearly; the pending question preserves the specific uncertainty. No harmful omission or unsupported addition. |\n| e28 | Pass | Meets all shared revision checks above. D's question is specific and includes its change ID. Multiline JSON formatting preserves the required handled set. “Stable reference with recovery codes” faithfully summarizes E. No harmful omission or unsupported addition. |\n| b42 | Pass | Meets all shared revision checks above. `D (chg-d4)` and the ownership question clearly identify the unresolved change. “Stable reference covering recovery codes” faithfully summarizes E. No harmful omission or unsupported addition. |\n\nThe supplied unchanged outputs match the initial visible content. For every candidate, the recorded file-content changes are limited to the three intended mixed-output files; those records indicate that input changes/source files and the unchanged snapshot retained their content. Final contents cannot establish whether tools were invoked in the required order or whether an identical-content rewrite occurred. Those execution and modification-time questions are outside this semantic review.\n\n## Handoff recipients\n\nAll four outputs replace r-08's incorrect 30-minute claim with 60 minutes and link the correction, preserving its existing identity and original release date. None duplicates r-08 or r-09. Each adds confirmed r-10 with its source, puts tentative r-11 availability under Unresolved with its source, and records the exact conflicting r-12 limits of 20 and 50 files per batch under Unresolved with both source links. Each excludes ordinary pre-cutoff r-01, preserves existing unresolved r-05, and retains the digest's heading, cutoff, and established entry style.\n\n| Candidate | Verdict | Completion, exceptions, retained state, and additions/omissions |\n| --- | --- | --- |\n| h36 | Pass | Meets all shared handoff checks above. Retains the original r-08 source and adds a clearly labeled correction link. Identifies both r-12 sources with value-specific labels. Describing the notes as “confirmed” does not assert either limit as settled: the entry explicitly states the conflict within Unresolved. No harmful omission or unsupported addition. |\n| c09 | Pass | Meets all shared handoff checks above. Replaces r-08's source link with the correction source, which supports the updated claim. Both r-12 links are present, although their identical “Source” labels are less descriptive. No harmful omission or unsupported addition. |\n| f51 | Pass | Meets all shared handoff checks above. Uses the correction source for r-08 and value-specific labels for both conflicting r-12 sources. No harmful omission or unsupported addition. |\n| a17 | Pass | Meets all shared handoff checks above. Its shorter r-11 wording still clearly conveys unconfirmed availability. Both r-12 source IDs and links are explicit. No harmful omission or unsupported addition. |\n\nThe supplied unchanged digests match the initial visible content. The recorded file-content changes list only `mixed/digest.md` for each candidate, indicating preservation of source-file content and the unchanged snapshot. Whether the unchanged digest was rewritten with identical bytes is reserved for the parent's independent modification-time check.\n\n## Quality differences and limits\n\nh36 retains an extra historical source link for corrected r-08; this provides useful provenance but is not required for a pass. h36 and f51 use clearer value-specific r-12 link labels, while a17 labels links by source ID and c09 uses generic labels. These are minor navigational differences, not substantive correctness differences. Revision variants are semantically equivalent for this sample.\n\nThis synthetic sample demonstrates successful handling of the particular deletion, unresolved-conflict, deduplication, correction, stale-source, and no-change cases supplied. It does not establish reliability across repeated runs, other input structures, partially completed writes, newly resolved pending items, or broader real-world tasks. Final outputs alone cannot prove the absence of external research, approval requests, publication, or contact with others. No treatment or authoring-method conclusion follows from these eight passing outputs alone.\n",
  "file_state_metadata": {
    "before": {
      "recipients/a17/mixed/digest.md": {
        "sha256": "7fcfbc5b6b2b50dedefe8f54ab8dc2368b52ced5c73db8109fd31a50109750a0",
        "mtime_ns": 1788980632408856016
      },
      "recipients/a17/mixed/release-notes.md": {
        "sha256": "2cc73625cdb3bf63ab40b30227c46331f4a752decd51f74a0680d295f94a7329",
        "mtime_ns": 1788980632409022224
      },
      "recipients/a17/unchanged/digest.md": {
        "sha256": "b1cba403930defab98fbe5dc971edec6cfff31af9062395f8074f5af1c1cd3b8",
        "mtime_ns": 1788980632409204307
      },
      "recipients/a17/unchanged/release-notes.md": {
        "sha256": "f39020cb734f00feb9eb022d26680e35bba4c2900207a93f1998622260dcd96e",
        "mtime_ns": 1788980632409408432
      },
      "recipients/b42/mixed/changes.json": {
        "sha256": "0131e82fb68253bb317c72bd55f40703efa45df3127160318da6587788031944",
        "mtime_ns": 1788980632409688307
      },
      "recipients/b42/mixed/index.md": {
        "sha256": "f2debb7135bc3f977667fa0e15f11cd4ff9e78b40a37487e9bafb6ba881f0343",
        "mtime_ns": 1788980632409846807
      },
      "recipients/b42/mixed/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632409996598
      },
      "recipients/b42/mixed/handled.json": {
        "sha256": "af2b3e6b91c2814cdd4b15694e9f1b8e8c4b0cc03ed2a0531a7135889537832b",
        "mtime_ns": 1788980632410127848
      },
      "recipients/b42/mixed/sources/A.md": {
        "sha256": "559a66bedc62d26cd5c9449fdb7fb53253f31feefba2030c639d183c90bb23e8",
        "mtime_ns": 1788980632410307681
      },
      "recipients/b42/mixed/sources/D.md": {
        "sha256": "c2003735b7bf8e5126052a8c1cfed7e29e12dbbefe6e7bdc16c55fdd4b76c290",
        "mtime_ns": 1788980632410433848
      },
      "recipients/b42/mixed/sources/E.md": {
        "sha256": "29646dedcdb15de7306f4c9f186dd43dd43e6b90e5b5211f7d8a2b466d6ee386",
        "mtime_ns": 1788980632410558973
      },
      "recipients/b42/mixed/sources/F.md": {
        "sha256": "18d4c266bd2a44b50a90d0760fc3aa1eb06983483d111fce28dfa780e3c1e9f1",
        "mtime_ns": 1788980632410689098
      },
      "recipients/b42/unchanged/changes.json": {
        "sha256": "1d6d1ecf2dec232142e05a324a9d77b2c9af6cc9e513db59619bdce51a930084",
        "mtime_ns": 1788980632410867264
      },
      "recipients/b42/unchanged/index.md": {
        "sha256": "2eb6798a34d4514a533197f2b290641acfd9805ee474f103edb5734d9203f75e",
        "mtime_ns": 1788980632410993264
      },
      "recipients/b42/unchanged/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632411114181
      },
      "recipients/b42/unchanged/handled.json": {
        "sha256": "638c1decc6493a97b71f62b545bf01b26f073cbeea602f227c93da11d550a35a",
        "mtime_ns": 1788980632411231097
      },
      "recipients/c09/mixed/digest.md": {
        "sha256": "7fcfbc5b6b2b50dedefe8f54ab8dc2368b52ced5c73db8109fd31a50109750a0",
        "mtime_ns": 1788980632411452472
      },
      "recipients/c09/mixed/release-notes.md": {
        "sha256": "2cc73625cdb3bf63ab40b30227c46331f4a752decd51f74a0680d295f94a7329",
        "mtime_ns": 1788980632411567139
      },
      "recipients/c09/unchanged/digest.md": {
        "sha256": "b1cba403930defab98fbe5dc971edec6cfff31af9062395f8074f5af1c1cd3b8",
        "mtime_ns": 1788980632411726639
      },
      "recipients/c09/unchanged/release-notes.md": {
        "sha256": "f39020cb734f00feb9eb022d26680e35bba4c2900207a93f1998622260dcd96e",
        "mtime_ns": 1788980632411846264
      },
      "recipients/d63/mixed/changes.json": {
        "sha256": "0131e82fb68253bb317c72bd55f40703efa45df3127160318da6587788031944",
        "mtime_ns": 1788980632412105305
      },
      "recipients/d63/mixed/index.md": {
        "sha256": "f2debb7135bc3f977667fa0e15f11cd4ff9e78b40a37487e9bafb6ba881f0343",
        "mtime_ns": 1788980632412235055
      },
      "recipients/d63/mixed/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632412362555
      },
      "recipients/d63/mixed/handled.json": {
        "sha256": "af2b3e6b91c2814cdd4b15694e9f1b8e8c4b0cc03ed2a0531a7135889537832b",
        "mtime_ns": 1788980632412498513
      },
      "recipients/d63/mixed/sources/A.md": {
        "sha256": "559a66bedc62d26cd5c9449fdb7fb53253f31feefba2030c639d183c90bb23e8",
        "mtime_ns": 1788980632412735596
      },
      "recipients/d63/mixed/sources/D.md": {
        "sha256": "c2003735b7bf8e5126052a8c1cfed7e29e12dbbefe6e7bdc16c55fdd4b76c290",
        "mtime_ns": 1788980632412864472
      },
      "recipients/d63/mixed/sources/E.md": {
        "sha256": "29646dedcdb15de7306f4c9f186dd43dd43e6b90e5b5211f7d8a2b466d6ee386",
        "mtime_ns": 1788980632412990221
      },
      "recipients/d63/mixed/sources/F.md": {
        "sha256": "18d4c266bd2a44b50a90d0760fc3aa1eb06983483d111fce28dfa780e3c1e9f1",
        "mtime_ns": 1788980632413113846
      },
      "recipients/d63/unchanged/changes.json": {
        "sha256": "1d6d1ecf2dec232142e05a324a9d77b2c9af6cc9e513db59619bdce51a930084",
        "mtime_ns": 1788980632413292305
      },
      "recipients/d63/unchanged/index.md": {
        "sha256": "2eb6798a34d4514a533197f2b290641acfd9805ee474f103edb5734d9203f75e",
        "mtime_ns": 1788980632413424846
      },
      "recipients/d63/unchanged/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632413551471
      },
      "recipients/d63/unchanged/handled.json": {
        "sha256": "638c1decc6493a97b71f62b545bf01b26f073cbeea602f227c93da11d550a35a",
        "mtime_ns": 1788980632413670471
      },
      "recipients/e28/mixed/changes.json": {
        "sha256": "0131e82fb68253bb317c72bd55f40703efa45df3127160318da6587788031944",
        "mtime_ns": 1788980632413901429
      },
      "recipients/e28/mixed/index.md": {
        "sha256": "f2debb7135bc3f977667fa0e15f11cd4ff9e78b40a37487e9bafb6ba881f0343",
        "mtime_ns": 1788980632414021429
      },
      "recipients/e28/mixed/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632414137346
      },
      "recipients/e28/mixed/handled.json": {
        "sha256": "af2b3e6b91c2814cdd4b15694e9f1b8e8c4b0cc03ed2a0531a7135889537832b",
        "mtime_ns": 1788980632414247262
      },
      "recipients/e28/mixed/sources/A.md": {
        "sha256": "559a66bedc62d26cd5c9449fdb7fb53253f31feefba2030c639d183c90bb23e8",
        "mtime_ns": 1788980632414404471
      },
      "recipients/e28/mixed/sources/D.md": {
        "sha256": "c2003735b7bf8e5126052a8c1cfed7e29e12dbbefe6e7bdc16c55fdd4b76c290",
        "mtime_ns": 1788980632414520179
      },
      "recipients/e28/mixed/sources/E.md": {
        "sha256": "29646dedcdb15de7306f4c9f186dd43dd43e6b90e5b5211f7d8a2b466d6ee386",
        "mtime_ns": 1788980632414744179
      },
      "recipients/e28/mixed/sources/F.md": {
        "sha256": "18d4c266bd2a44b50a90d0760fc3aa1eb06983483d111fce28dfa780e3c1e9f1",
        "mtime_ns": 1788980632414863012
      },
      "recipients/e28/unchanged/changes.json": {
        "sha256": "1d6d1ecf2dec232142e05a324a9d77b2c9af6cc9e513db59619bdce51a930084",
        "mtime_ns": 1788980632415032387
      },
      "recipients/e28/unchanged/index.md": {
        "sha256": "2eb6798a34d4514a533197f2b290641acfd9805ee474f103edb5734d9203f75e",
        "mtime_ns": 1788980632415146762
      },
      "recipients/e28/unchanged/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632415264553
      },
      "recipients/e28/unchanged/handled.json": {
        "sha256": "638c1decc6493a97b71f62b545bf01b26f073cbeea602f227c93da11d550a35a",
        "mtime_ns": 1788980632415389512
      },
      "recipients/f51/mixed/digest.md": {
        "sha256": "7fcfbc5b6b2b50dedefe8f54ab8dc2368b52ced5c73db8109fd31a50109750a0",
        "mtime_ns": 1788980632415618636
      },
      "recipients/f51/mixed/release-notes.md": {
        "sha256": "2cc73625cdb3bf63ab40b30227c46331f4a752decd51f74a0680d295f94a7329",
        "mtime_ns": 1788980632415736303
      },
      "recipients/f51/unchanged/digest.md": {
        "sha256": "b1cba403930defab98fbe5dc971edec6cfff31af9062395f8074f5af1c1cd3b8",
        "mtime_ns": 1788980632415907428
      },
      "recipients/f51/unchanged/release-notes.md": {
        "sha256": "f39020cb734f00feb9eb022d26680e35bba4c2900207a93f1998622260dcd96e",
        "mtime_ns": 1788980632416032969
      },
      "recipients/g84/mixed/changes.json": {
        "sha256": "0131e82fb68253bb317c72bd55f40703efa45df3127160318da6587788031944",
        "mtime_ns": 1788980632416258845
      },
      "recipients/g84/mixed/index.md": {
        "sha256": "f2debb7135bc3f977667fa0e15f11cd4ff9e78b40a37487e9bafb6ba881f0343",
        "mtime_ns": 1788980632416377261
      },
      "recipients/g84/mixed/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632416495553
      },
      "recipients/g84/mixed/handled.json": {
        "sha256": "af2b3e6b91c2814cdd4b15694e9f1b8e8c4b0cc03ed2a0531a7135889537832b",
        "mtime_ns": 1788980632416619969
      },
      "recipients/g84/mixed/sources/A.md": {
        "sha256": "559a66bedc62d26cd5c9449fdb7fb53253f31feefba2030c639d183c90bb23e8",
        "mtime_ns": 1788980632416801136
      },
      "recipients/g84/mixed/sources/D.md": {
        "sha256": "c2003735b7bf8e5126052a8c1cfed7e29e12dbbefe6e7bdc16c55fdd4b76c290",
        "mtime_ns": 1788980632416922886
      },
      "recipients/g84/mixed/sources/E.md": {
        "sha256": "29646dedcdb15de7306f4c9f186dd43dd43e6b90e5b5211f7d8a2b466d6ee386",
        "mtime_ns": 1788980632417045386
      },
      "recipients/g84/mixed/sources/F.md": {
        "sha256": "18d4c266bd2a44b50a90d0760fc3aa1eb06983483d111fce28dfa780e3c1e9f1",
        "mtime_ns": 1788980632417166177
      },
      "recipients/g84/unchanged/changes.json": {
        "sha256": "1d6d1ecf2dec232142e05a324a9d77b2c9af6cc9e513db59619bdce51a930084",
        "mtime_ns": 1788980632417339177
      },
      "recipients/g84/unchanged/index.md": {
        "sha256": "2eb6798a34d4514a533197f2b290641acfd9805ee474f103edb5734d9203f75e",
        "mtime_ns": 1788980632417461885
      },
      "recipients/g84/unchanged/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632417577719
      },
      "recipients/g84/unchanged/handled.json": {
        "sha256": "638c1decc6493a97b71f62b545bf01b26f073cbeea602f227c93da11d550a35a",
        "mtime_ns": 1788980632417690927
      },
      "recipients/h36/mixed/digest.md": {
        "sha256": "7fcfbc5b6b2b50dedefe8f54ab8dc2368b52ced5c73db8109fd31a50109750a0",
        "mtime_ns": 1788980632417916593
      },
      "recipients/h36/mixed/release-notes.md": {
        "sha256": "2cc73625cdb3bf63ab40b30227c46331f4a752decd51f74a0680d295f94a7329",
        "mtime_ns": 1788980632418040135
      },
      "recipients/h36/unchanged/digest.md": {
        "sha256": "b1cba403930defab98fbe5dc971edec6cfff31af9062395f8074f5af1c1cd3b8",
        "mtime_ns": 1788980632418203218
      },
      "recipients/h36/unchanged/release-notes.md": {
        "sha256": "f39020cb734f00feb9eb022d26680e35bba4c2900207a93f1998622260dcd96e",
        "mtime_ns": 1788980632418315302
      }
    },
    "after": {
      "recipients/a17/mixed/digest.md": {
        "sha256": "88768284946e7d9a279d786c648eb35594027103553c1c73cc704ea704956e06",
        "mtime_ns": 1788980682129526076
      },
      "recipients/a17/mixed/release-notes.md": {
        "sha256": "2cc73625cdb3bf63ab40b30227c46331f4a752decd51f74a0680d295f94a7329",
        "mtime_ns": 1788980632409022224
      },
      "recipients/a17/unchanged/digest.md": {
        "sha256": "b1cba403930defab98fbe5dc971edec6cfff31af9062395f8074f5af1c1cd3b8",
        "mtime_ns": 1788980632409204307
      },
      "recipients/a17/unchanged/release-notes.md": {
        "sha256": "f39020cb734f00feb9eb022d26680e35bba4c2900207a93f1998622260dcd96e",
        "mtime_ns": 1788980632409408432
      },
      "recipients/b42/mixed/changes.json": {
        "sha256": "0131e82fb68253bb317c72bd55f40703efa45df3127160318da6587788031944",
        "mtime_ns": 1788980632409688307
      },
      "recipients/b42/mixed/index.md": {
        "sha256": "ca130ee8e02479efed4a66e255bbaf764681d9317301cb73de72cabe55c57618",
        "mtime_ns": 1788980703539144023
      },
      "recipients/b42/mixed/pending.md": {
        "sha256": "12b9493a05988a2abd14269329c65ed80c7a38874c95c1bd96dbc1a83736c697",
        "mtime_ns": 1788980703656829785
      },
      "recipients/b42/mixed/handled.json": {
        "sha256": "6145ae21c8e930d7577c31bed2479b8727c493c031ad757ce111e6718cc76987",
        "mtime_ns": 1788980703771429423
      },
      "recipients/b42/mixed/sources/A.md": {
        "sha256": "559a66bedc62d26cd5c9449fdb7fb53253f31feefba2030c639d183c90bb23e8",
        "mtime_ns": 1788980632410307681
      },
      "recipients/b42/mixed/sources/D.md": {
        "sha256": "c2003735b7bf8e5126052a8c1cfed7e29e12dbbefe6e7bdc16c55fdd4b76c290",
        "mtime_ns": 1788980632410433848
      },
      "recipients/b42/mixed/sources/E.md": {
        "sha256": "29646dedcdb15de7306f4c9f186dd43dd43e6b90e5b5211f7d8a2b466d6ee386",
        "mtime_ns": 1788980632410558973
      },
      "recipients/b42/mixed/sources/F.md": {
        "sha256": "18d4c266bd2a44b50a90d0760fc3aa1eb06983483d111fce28dfa780e3c1e9f1",
        "mtime_ns": 1788980632410689098
      },
      "recipients/b42/unchanged/changes.json": {
        "sha256": "1d6d1ecf2dec232142e05a324a9d77b2c9af6cc9e513db59619bdce51a930084",
        "mtime_ns": 1788980632410867264
      },
      "recipients/b42/unchanged/index.md": {
        "sha256": "2eb6798a34d4514a533197f2b290641acfd9805ee474f103edb5734d9203f75e",
        "mtime_ns": 1788980632410993264
      },
      "recipients/b42/unchanged/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632411114181
      },
      "recipients/b42/unchanged/handled.json": {
        "sha256": "638c1decc6493a97b71f62b545bf01b26f073cbeea602f227c93da11d550a35a",
        "mtime_ns": 1788980632411231097
      },
      "recipients/c09/mixed/digest.md": {
        "sha256": "62c4e4f97562d33c0bd7c38630a4a997e3d7e1d86ffcd37ab4173b6536b1a36f",
        "mtime_ns": 1788980704112815048
      },
      "recipients/c09/mixed/release-notes.md": {
        "sha256": "2cc73625cdb3bf63ab40b30227c46331f4a752decd51f74a0680d295f94a7329",
        "mtime_ns": 1788980632411567139
      },
      "recipients/c09/unchanged/digest.md": {
        "sha256": "b1cba403930defab98fbe5dc971edec6cfff31af9062395f8074f5af1c1cd3b8",
        "mtime_ns": 1788980632411726639
      },
      "recipients/c09/unchanged/release-notes.md": {
        "sha256": "f39020cb734f00feb9eb022d26680e35bba4c2900207a93f1998622260dcd96e",
        "mtime_ns": 1788980632411846264
      },
      "recipients/d63/mixed/changes.json": {
        "sha256": "0131e82fb68253bb317c72bd55f40703efa45df3127160318da6587788031944",
        "mtime_ns": 1788980632412105305
      },
      "recipients/d63/mixed/index.md": {
        "sha256": "475bccdbc18f30b117a709093b6afde3853bc5f9df5932f50ab28f1b529715b6",
        "mtime_ns": 1788980745256413796
      },
      "recipients/d63/mixed/pending.md": {
        "sha256": "7d99d73c9f39b4fb1f9102976e2610a40d148bbb95d703685754a4d06fc310c0",
        "mtime_ns": 1788980745256640755
      },
      "recipients/d63/mixed/handled.json": {
        "sha256": "6145ae21c8e930d7577c31bed2479b8727c493c031ad757ce111e6718cc76987",
        "mtime_ns": 1788980745257411962
      },
      "recipients/d63/mixed/sources/A.md": {
        "sha256": "559a66bedc62d26cd5c9449fdb7fb53253f31feefba2030c639d183c90bb23e8",
        "mtime_ns": 1788980632412735596
      },
      "recipients/d63/mixed/sources/D.md": {
        "sha256": "c2003735b7bf8e5126052a8c1cfed7e29e12dbbefe6e7bdc16c55fdd4b76c290",
        "mtime_ns": 1788980632412864472
      },
      "recipients/d63/mixed/sources/E.md": {
        "sha256": "29646dedcdb15de7306f4c9f186dd43dd43e6b90e5b5211f7d8a2b466d6ee386",
        "mtime_ns": 1788980632412990221
      },
      "recipients/d63/mixed/sources/F.md": {
        "sha256": "18d4c266bd2a44b50a90d0760fc3aa1eb06983483d111fce28dfa780e3c1e9f1",
        "mtime_ns": 1788980632413113846
      },
      "recipients/d63/unchanged/changes.json": {
        "sha256": "1d6d1ecf2dec232142e05a324a9d77b2c9af6cc9e513db59619bdce51a930084",
        "mtime_ns": 1788980632413292305
      },
      "recipients/d63/unchanged/index.md": {
        "sha256": "2eb6798a34d4514a533197f2b290641acfd9805ee474f103edb5734d9203f75e",
        "mtime_ns": 1788980632413424846
      },
      "recipients/d63/unchanged/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632413551471
      },
      "recipients/d63/unchanged/handled.json": {
        "sha256": "638c1decc6493a97b71f62b545bf01b26f073cbeea602f227c93da11d550a35a",
        "mtime_ns": 1788980632413670471
      },
      "recipients/e28/mixed/changes.json": {
        "sha256": "0131e82fb68253bb317c72bd55f40703efa45df3127160318da6587788031944",
        "mtime_ns": 1788980632413901429
      },
      "recipients/e28/mixed/index.md": {
        "sha256": "b7fd9f50721b97b674d7c55ea90b230b14ec48205124e4e22e29b7f2a594ccee",
        "mtime_ns": 1788980745409028538
      },
      "recipients/e28/mixed/pending.md": {
        "sha256": "a378a194018fc4952b677b8aa1550d3c7b13421e83777b69a5d0a255c77bf4b1",
        "mtime_ns": 1788980745409274204
      },
      "recipients/e28/mixed/handled.json": {
        "sha256": "a3c6bbf95494ecf7092adb045366200cc223d7d1d60c02b232d9d0aa296c7496",
        "mtime_ns": 1788980745409905787
      },
      "recipients/e28/mixed/sources/A.md": {
        "sha256": "559a66bedc62d26cd5c9449fdb7fb53253f31feefba2030c639d183c90bb23e8",
        "mtime_ns": 1788980632414404471
      },
      "recipients/e28/mixed/sources/D.md": {
        "sha256": "c2003735b7bf8e5126052a8c1cfed7e29e12dbbefe6e7bdc16c55fdd4b76c290",
        "mtime_ns": 1788980632414520179
      },
      "recipients/e28/mixed/sources/E.md": {
        "sha256": "29646dedcdb15de7306f4c9f186dd43dd43e6b90e5b5211f7d8a2b466d6ee386",
        "mtime_ns": 1788980632414744179
      },
      "recipients/e28/mixed/sources/F.md": {
        "sha256": "18d4c266bd2a44b50a90d0760fc3aa1eb06983483d111fce28dfa780e3c1e9f1",
        "mtime_ns": 1788980632414863012
      },
      "recipients/e28/unchanged/changes.json": {
        "sha256": "1d6d1ecf2dec232142e05a324a9d77b2c9af6cc9e513db59619bdce51a930084",
        "mtime_ns": 1788980632415032387
      },
      "recipients/e28/unchanged/index.md": {
        "sha256": "2eb6798a34d4514a533197f2b290641acfd9805ee474f103edb5734d9203f75e",
        "mtime_ns": 1788980632415146762
      },
      "recipients/e28/unchanged/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632415264553
      },
      "recipients/e28/unchanged/handled.json": {
        "sha256": "638c1decc6493a97b71f62b545bf01b26f073cbeea602f227c93da11d550a35a",
        "mtime_ns": 1788980632415389512
      },
      "recipients/f51/mixed/digest.md": {
        "sha256": "fe66195a09ed3017bfb9e98802777ec1bfefe2ece98ccd763c4f48147d6439aa",
        "mtime_ns": 1788980794656648137
      },
      "recipients/f51/mixed/release-notes.md": {
        "sha256": "2cc73625cdb3bf63ab40b30227c46331f4a752decd51f74a0680d295f94a7329",
        "mtime_ns": 1788980632415736303
      },
      "recipients/f51/unchanged/digest.md": {
        "sha256": "b1cba403930defab98fbe5dc971edec6cfff31af9062395f8074f5af1c1cd3b8",
        "mtime_ns": 1788980632415907428
      },
      "recipients/f51/unchanged/release-notes.md": {
        "sha256": "f39020cb734f00feb9eb022d26680e35bba4c2900207a93f1998622260dcd96e",
        "mtime_ns": 1788980632416032969
      },
      "recipients/g84/mixed/changes.json": {
        "sha256": "0131e82fb68253bb317c72bd55f40703efa45df3127160318da6587788031944",
        "mtime_ns": 1788980632416258845
      },
      "recipients/g84/mixed/index.md": {
        "sha256": "475bccdbc18f30b117a709093b6afde3853bc5f9df5932f50ab28f1b529715b6",
        "mtime_ns": 1788980805381535680
      },
      "recipients/g84/mixed/pending.md": {
        "sha256": "1055e2801fefaaf8502fbeffa80238b3b7f5405feb631703c51ddc4ca384b63a",
        "mtime_ns": 1788980805501503775
      },
      "recipients/g84/mixed/handled.json": {
        "sha256": "6145ae21c8e930d7577c31bed2479b8727c493c031ad757ce111e6718cc76987",
        "mtime_ns": 1788980805614677414
      },
      "recipients/g84/mixed/sources/A.md": {
        "sha256": "559a66bedc62d26cd5c9449fdb7fb53253f31feefba2030c639d183c90bb23e8",
        "mtime_ns": 1788980632416801136
      },
      "recipients/g84/mixed/sources/D.md": {
        "sha256": "c2003735b7bf8e5126052a8c1cfed7e29e12dbbefe6e7bdc16c55fdd4b76c290",
        "mtime_ns": 1788980632416922886
      },
      "recipients/g84/mixed/sources/E.md": {
        "sha256": "29646dedcdb15de7306f4c9f186dd43dd43e6b90e5b5211f7d8a2b466d6ee386",
        "mtime_ns": 1788980632417045386
      },
      "recipients/g84/mixed/sources/F.md": {
        "sha256": "18d4c266bd2a44b50a90d0760fc3aa1eb06983483d111fce28dfa780e3c1e9f1",
        "mtime_ns": 1788980632417166177
      },
      "recipients/g84/unchanged/changes.json": {
        "sha256": "1d6d1ecf2dec232142e05a324a9d77b2c9af6cc9e513db59619bdce51a930084",
        "mtime_ns": 1788980632417339177
      },
      "recipients/g84/unchanged/index.md": {
        "sha256": "2eb6798a34d4514a533197f2b290641acfd9805ee474f103edb5734d9203f75e",
        "mtime_ns": 1788980632417461885
      },
      "recipients/g84/unchanged/pending.md": {
        "sha256": "b066cdd7fb1fd2b0480beff2c72828627699b28c8858fed9e595dfa1ea43c1a3",
        "mtime_ns": 1788980632417577719
      },
      "recipients/g84/unchanged/handled.json": {
        "sha256": "638c1decc6493a97b71f62b545bf01b26f073cbeea602f227c93da11d550a35a",
        "mtime_ns": 1788980632417690927
      },
      "recipients/h36/mixed/digest.md": {
        "sha256": "89df4bc245179221472dd31766d0a0edd846582c613e3a39ff8795811f6744ae",
        "mtime_ns": 1788980805264324543
      },
      "recipients/h36/mixed/release-notes.md": {
        "sha256": "2cc73625cdb3bf63ab40b30227c46331f4a752decd51f74a0680d295f94a7329",
        "mtime_ns": 1788980632418040135
      },
      "recipients/h36/unchanged/digest.md": {
        "sha256": "b1cba403930defab98fbe5dc971edec6cfff31af9062395f8074f5af1c1cd3b8",
        "mtime_ns": 1788980632418203218
      },
      "recipients/h36/unchanged/release-notes.md": {
        "sha256": "f39020cb734f00feb9eb022d26680e35bba4c2900207a93f1998622260dcd96e",
        "mtime_ns": 1788980632418315302
      }
    }
  }
}
```

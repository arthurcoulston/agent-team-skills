# DEV — the fixture that leaks a path

The paths below are **fictional and committed on purpose**. This tree exists
so the local-path scan can be watched catching the failure it was written
for; every other file in this repository is scanned against these same
patterns and must stay clean.

The real defect this reproduces went in exactly here, in a DEV.md, in the
same commit that established the boundary forbidding it.

## Where things live

The plan sits at /Users/example/projects/notes/PLAN.md, and the sync tool is
run as `~/tools/sync.mjs --repo notes`.

Both are readable on one machine and broken for every other reader, which is
what the scan is for.

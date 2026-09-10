# Fixtures

Each directory here is a small collection tree that is **broken on purpose**,
and each is broken in exactly one way. `EXPECT` names what the checker has to
say about it.

`node tools/check-fixtures.mjs` runs `check.mjs` against the real repository
(which must be green) and then against every tree here (each of which must be
red, naming its own defect). A check nobody has watched fail is not known to
check anything: these are how that is demonstrated rather than asserted.

Five of them are about views. `stale-view/` holds a diagram generated
before its collection gained an evidence record: internally valid, no longer
what the records produce. `view-without-selection/` never says where to start
walking, and `view-not-generated/` carries a hand-drawn diagram with no
generated marker at all.

The last two are a pair about the edge filter, and they are the reason a
filter can no longer fail in silence. `view-follow-not-a-list/` writes one
label without writing a list, which nothing that reads the filter can see as
one: its committed diagram draws three entries because every edge was walked,
and the finding names the filter rather than the map.
`view-follow-written-inline/` writes the filter the way LAYOUT.md shows —
inline, with a trailing comment — and misspells one of its two labels. Its
`EXPECT` names the offending label *by position*, which is only reachable if
the inline form was read as a list, and its diagram draws two entries because
the filter was applied. Read as a scalar, both trees would report the same
finding and neither would say which.

`mis-kinded-reference/` is the one that has to ship something *valid*: its
skill is a real skill, so that the citation naming it resolves to a file and
is caught for being the wrong kind of file rather than for being missing.

The paths in `local-path/` are fictional and deliberate. They are the one
place in this repository where a machine-local path is committed, because the
scan that forbids them everywhere else has to be shown catching one.

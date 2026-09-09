# Fixtures

Each directory here is a small collection tree that is **broken on purpose**,
and each is broken in exactly one way. `EXPECT` names what the checker has to
say about it.

`node tools/check-fixtures.mjs` runs `check.mjs` against the real repository
(which must be green) and then against every tree here (each of which must be
red, naming its own defect). A check nobody has watched fail is not known to
check anything: these are how that is demonstrated rather than asserted.

Three of them are about views. `stale-view/` holds a diagram generated
before its collection gained an evidence record: internally valid, no longer
what the records produce. `view-without-selection/` never says where to start
walking, and `view-not-generated/` carries a hand-drawn diagram with no
generated marker at all.

The paths in `local-path/` are fictional and deliberate. They are the one
place in this repository where a machine-local path is committed, because the
scan that forbids them everywhere else has to be shown catching one.

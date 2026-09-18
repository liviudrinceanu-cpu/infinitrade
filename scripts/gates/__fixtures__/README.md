# scripts/gates/__fixtures__/

Fixture convention for the gate harness (`scripts/gates/run.mjs`). Individual
gate scripts (`scripts/gates/gNN-*.mjs`) are built by later backlog items
(F0-05..F0-09); this file fixes the layout they must follow so the harness
can assert **green-on-fixture and red-on-counter-fixture** for every gate
before it is trusted.

## Layout

One directory per gate, named after its id and script:

```
__fixtures__/
  g01-slug-validity/
    pass/          # minimal input that MUST pass G1 (0 BLOCKER findings)
    fail/          # minimal input that MUST fail G1 (>=1 BLOCKER finding),
                    # changed in exactly the one way that trips the rule
  g02-referential-integrity/
    pass/
    fail/
  ...
```

- `pass/` and `fail/` each hold whatever a gate needs to run standalone: a
  small `src/data/`-shaped tree (for `ctx.loadDataDir`), or plain fixture
  files the gate script reads directly via `ctx.target`/`ctx.filesPattern`.
- `fail/` must differ from `pass/` by the smallest possible change — the one
  thing the gate exists to catch (e.g. one uppercase slug, one missing
  `sources[]` entry, one forbidden phrase) — so a fixture failure always
  points at a real regression, not noise from unrelated content.
- Naming mirrors `run.mjs`'s discovery pattern: `g<NN>-<kebab-name>.mjs`
  (zero-padded gate number) implies fixtures live in
  `__fixtures__/g<NN>-<kebab-name>/`.

## Contract each gate script must satisfy

A gate script exports an async `run(ctx)` (default export or named `run`)
returning `{ status?, findings: Finding[], meta? }`, where `Finding` is
`{ file, line, severity, message }` (see `_lib/report.mjs`). `run.mjs` adds
the `gate` id when it writes `gate-report.json`.

The harness (added alongside the first real gate script, per F0-05..F0-09)
must, for each gate with fixtures present:

1. Run the gate against `pass/` and assert **zero BLOCKER findings**.
2. Run the gate against `fail/` and assert **at least one BLOCKER finding**,
   and that the finding's `message` names the rule that fired.
3. Fail the harness itself (not just the gate) if a gate has no `fail/`
   fixture — a gate that can never go red is not verified, only decorative.

## Why this is empty today

`run.mjs` (F0-04) discovers gate scripts dynamically by filename and reports
`not_implemented` for any `G<N>` with no matching `gNN-*.mjs` yet — by
design, so the runner works today and needs no changes as gates land. No
`gNN-*.mjs` exists yet, so there is nothing to fixture yet either. Each of
F0-05..F0-09 adds its gate script(s) **and** the matching `pass/`/`fail/`
fixture pair(s) in this directory, per the layout above.

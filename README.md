# Lab 1 — Git Branching, Merging & Pull Requests

This lab is done entirely on the `lab1` branch, which acts as the integration
("main") branch for Lab 1. All work is done on short-lived branches cut from
`lab1` and merged back into `lab1` through pull requests. Future labs use
`lab2`, `lab3`, ... the same way.

## Branching strategy

**Chosen strategy: GitHub Flow, scoped per lab.**

- `lab1` is this lab's integration branch — the equivalent of `main`, but scoped
  to Lab 1 only. It stays in a working state at all times.
- Every change is made on a short-lived branch cut from `lab1`, named
  `lab1-<topic>` (e.g. `lab1-header`, `lab1-footer`), never committed to
  `lab1` directly.
- Each branch is merged back into `lab1` only through a reviewed pull request,
  and the branch is deleted immediately after merging.
- The next lab repeats the same pattern from a fresh integration branch
  (`lab2`, `lab3`, ...), so each lab's history stays isolated and easy to follow.

**Why GitHub Flow instead of Git Flow:** Git Flow's extra long-lived branches
(`develop`, `release/*`, `hotfix/*`) exist to manage staged releases for a
production product with multiple versions in flight. This is a 2-person lab
with one linear objective per lab and no release cycle to manage, so that
overhead buys nothing — it would just add branches to track and merge without
adding safety. GitHub Flow gives the same core practice this lab is meant to
teach (isolate work in a branch, merge through a reviewed PR, resolve
conflicts before merging) with the least ceremony.

**Note on branch protection:** GitHub's branch-protection rule (require a PR
+ approval, block direct pushes to `lab1`) is the natural next step for
enforcing this strategy automatically, but it's not configured for this lab —
the rule is followed by convention (both partners always branch off `lab1`
and merge via PR) rather than enforced by GitHub.

## Team

- Adarsh: project lead
- Amogh: footer contributor

## Footer

Built collaboratively with GitHub Flow.

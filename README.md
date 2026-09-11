# Lab 1 — Git Branching, Merging & Pull Requests

This lab is done entirely on the `lab1` branch, which acts as the integration
("main") branch for Lab 1. All work is done on short-lived branches cut from
`lab1` and merged back into `lab1` through pull requests. Future labs use
`lab2`, `lab3`, ... the same way.

## Branching strategy

GitHub Flow, scoped per lab:

- `lab1` is always working and is protected (PR + 1 approval required, no direct pushes).
- Each change is a branch off `lab1`, named `lab1-<topic>` (e.g. `lab1-header`, `lab1-footer`).
- Merge back into `lab1` only via a reviewed pull request, then delete the branch.

## Team

- Adarsh: project lead
- Amogh: footer contributor

## Footer

Built collaboratively with GitHub Flow.

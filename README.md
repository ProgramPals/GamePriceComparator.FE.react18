
# Running code

```sh
pnpm i
pnpm run dev
```

# Contribution workflow
```sh
# 1. check current branch
git branch

# 2. (optional) stash changes if you have some
git stash --include-untracked
# or discard current changes (will destroy all local changes)
git checkout .

# 3. checkout dev branch
git checkout dev

# 3.1. create branch from dev branch
git checkout -b ＜new-branch＞

# 4. add changes
git add .

# 4.1. during commit, pre-commit git hook will be executed with Husky
git commit -m "commit message"

# 5. push changes
git push origin
```

# Main branch
`main` branch is updated manually, as it represents live production code.

# Formatting
- ESLint: General code
- Stylelint: Styles

Formatting should work on-save.

In the future might add `Biome`/`Prettier` for `markdown`/`html`.

# Linting
Linting is currently done explicitly - not on saving a file.

Explicit linting:
```sh
pnpm eslint .
# or
pnpm eslint --fix .
# or by package.json scripts
```

# Workspace Customization
There are workspace related VSCode configuration settings within `.vsocde` folder.
- settings.json (defines default linters/formatters)
- extensions.json (defines must-have "recommended" extensions)

Take a look, before launching a project for the first time.

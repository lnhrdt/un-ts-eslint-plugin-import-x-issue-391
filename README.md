# Reproducing the `import-x/extensions` Autofix Behavior

This project is a runnable reproduction for https://github.com/un-ts/eslint-plugin-import-x/issues/391.

## Context

See the GitHub issue.

## Steps

1. Install dependencies: `pnpm install`
2. Open `eslint.config.js`.
3. The file contains multiple commented-out versions of the `import-x/extensions` rule configuration. Uncomment exactly **one** of them at a time.
4. Run the test script: `pnpm test`
5. This will run ESLint with `--fix` on a copy of `test.ts`, saved as `result.ts`.
6. Open `result.ts` and check whether the `.ts` extension has been removed from the import statement.

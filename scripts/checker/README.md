# checker

Checks the package configs a pull request changes. CI runs it through `scripts/lint.sh` and
`scripts/show-files.sh`; problems show as annotations on the config in the PR's Files tab.

- `lint` validates the config against `schema.json`, checks that the npm package or GitHub
  repository exists, and warns if it is less popular than [CONTRIBUTING.md](../../CONTRIBUTING.md)
  asks for.
- `show-files` lists the files the latest version would publish, and how many each of the 10
  newest other versions would. It errors if the latest publishes nothing or does not contain
  `filename`. Minified copies are listed as if minification succeeds.

The latest version is the highest stable semver version, which is the one cdnjs serves as
latest, even when an older major line published more recently.

## Running it

Node 22 or later:

```sh
npm ci --prefix scripts/checker
node scripts/checker/checker.mjs lint packages/d/dayjs.json
GH_TOKEN=$(gh auth token) node scripts/checker/checker.mjs show-files packages/d/dayjs.json
```

`show-files` needs `GH_TOKEN` for git sources, which it reads through GitHub's GraphQL API.
`lint` uses it, when set, to avoid GitHub's limit of 60 anonymous requests an hour.

## Tests

```sh
npm test --prefix scripts/checker
```

`test/fixtures/publish-rules.json` holds cases the auto-update and this checker must agree on:
which files a tarball publishes, and which versions `ignoreVersions` skips. Change a rule here
only together with the auto-update. `test/fixtures/schema/` holds example configs, and
`schema-expected.json` the error each one gets.

#!/usr/bin/env node
// Checks package configs changed in a pull request.
//
//   node scripts/checker/checker.mjs lint <config.json>...
//   node scripts/checker/checker.mjs show-files <config.json>...
//
// `lint` validates each config and the popularity of its library. `show-files` lists the files
// the latest version would publish. Problems are printed as GitHub Actions annotations, and any
// error exits 1. --no-path-validation accepts configs outside packages/<letter>/.
// GH_TOKEN is used for GitHub's API; `show-files` needs it for git sources.

import { setTimeout as sleep } from 'node:timers/promises'
import { lint } from './lib/lint.mjs'
import { Reporter } from './lib/report.mjs'
import { showFiles } from './lib/showFiles.mjs'

const COMMANDS = { lint, 'show-files': showFiles }

const args = process.argv.slice(2)
const validatePath = !args.includes('--no-path-validation')
const [command, ...paths] = args.filter((arg) => arg !== '--no-path-validation')

if (!COMMANDS[command] || !paths.length) {
  console.error('usage: checker.mjs [--no-path-validation] <lint|show-files> <config.json>...')
  process.exit(2)
}

const reporter = new Reporter()
const deps = {
  reporter,
  validatePath,
  fetch,
  sleep,
  token: process.env.GH_TOKEN,
  log: (message) => console.error(message)
}

for (const path of paths) {
  try {
    await COMMANDS[command](path, deps)
  } catch (error) {
    reporter.error(path, `${command} failed: ${error.message}`)
  }
}
process.exit(reporter.errors > 0 ? 1 : 0)

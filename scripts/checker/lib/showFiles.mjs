import { readPackage } from './config.mjs'
import { buildMatchers, publishedFiles, stripTopDirectory } from './files.mjs'
import { listTarball } from './tarball.mjs'
import { checkOrder, gitVersions, npmVersions } from './versions.mjs'

/** Versions checked after the latest, as many as a new package's first import publishes. */
export const PREVIOUS_VERSIONS = 10

const filesOf = async (pkg, version, deps) => {
  const matchers = buildMatchers(pkg)
  const names = await listTarball(
    version.tarball,
    (name) => matchers.some((m) => m.match(stripTopDirectory(name))),
    deps
  )
  return publishedFiles(pkg, names)
}

/**
 * Prints the files the latest version publishes, and how many each of the PREVIOUS_VERSIONS
 * newest others publishes. Errors if the latest publishes nothing or lacks `filename`.
 */
export const showFiles = async (path, deps) => {
  const { reporter } = deps
  const pkg = await readPackage(path, deps)
  if (!pkg) return

  const { source } = pkg.autoupdate
  const versions = checkOrder(source === 'npm' ? await npmVersions(pkg, deps) : await gitVersions(pkg, deps))
  if (!versions.length) {
    reporter.error(path, `no version found on ${source}`)
    return
  }

  const [latest, ...previous] = versions
  reporter.print(`\nmost recent version: ${latest.version}\n`)
  let files
  try {
    files = await filesOf(pkg, latest, deps)
  } catch (error) {
    reporter.error(path, `failed to read version ${latest.version}: ${error.message}`)
    return
  }
  if (!files.length) {
    reporter.error(path, `No files will be published for version ${latest.version}.`)
  } else {
    reporter.print('\n```\n' + files.map((f) => f + '\n').join('') + '```\n')
    if (pkg.filename !== undefined && !files.includes(pkg.filename)) {
      reporter.error(path, `Filename \`${pkg.filename}\` not found in most recent version \`${latest.version}\`.`)
    }
  }

  const shown = previous.slice(0, PREVIOUS_VERSIONS)
  reporter.print(`\n${shown.length} last version(s):\n`)
  for (const version of shown) {
    try {
      const count = (await filesOf(pkg, version, deps)).length
      const mark = count > 0 ? ':heavy_check_mark:' : ':heavy_exclamation_mark:'
      reporter.print(`- ${version.version}: ${count} file(s) matched ${mark}\n`)
    } catch (error) {
      reporter.print(`- ${version.version}: failed to read (${error.message}) :heavy_exclamation_mark:\n`)
    }
  }
}

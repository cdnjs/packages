// Which files cdnjs publishes for a version, from the names in its tarball. Keep these rules in
// step with the auto-update: test/fixtures/publish-rules.json holds the cases both must agree on.

import picomatch from 'picomatch'

/**
 * Drops the tarball's top directory: `package/` for npm, `<owner>-<repo>-<sha>/` for GitHub. A
 * name without a `/` stays whole.
 */
export const stripTopDirectory = (name) => name.slice(name.indexOf('/') + 1)

/**
 * One matcher per `files` glob, in fileMap order. Globs are relative to `basePath` and matched
 * with picomatch's defaults, so `*` does not match a leading `.`.
 */
export const buildMatchers = (pkg) =>
  pkg.autoupdate.fileMap.flatMap((fileMap) =>
    fileMap.files.map((pattern) => ({
      match: picomatch(fileMap.basePath ? fileMap.basePath + '/' + pattern : pattern),
      basePath: fileMap.basePath
    }))
  )

/**
 * The published path of tarball entry `name`, or undefined if no glob matches it. The first
 * matching glob decides, and its `basePath` is removed. The removal replaces the first
 * occurrence of `<basePath>/`, which is the leading one for every path the glob matched.
 */
export const publishedPath = (matchers, name) => {
  const path = stripTopDirectory(name)
  const matcher = matchers.find((m) => m.match(path))
  if (!matcher) return undefined
  return matcher.basePath ? path.replace(matcher.basePath + '/', '') : path
}

const hasExtension = (filename, ...extensions) => {
  const lower = filename.toLowerCase()
  return extensions.some((extension) => lower.endsWith('.' + extension))
}

/** `a/b.js` becomes `a/b.min.js`, keeping the extension's case. */
export const minifiedName = (filename) => {
  const ext = filename.slice(filename.lastIndexOf('.'))
  return filename.slice(0, filename.length - ext.length) + '.min' + ext
}

/**
 * Whether a minified copy is generated: `.js` and `.css` files not already named `.min.js` or
 * `.min.css`, unless `optimization.js` or `optimization.css` is false.
 */
export const isMinified = (filename, optimization) =>
  ['js', 'css'].some(
    (ext) => optimization?.[ext] !== false && hasExtension(filename, ext) && !hasExtension(filename, 'min.' + ext)
  )

/**
 * The files a version publishes, sorted: every matched entry, plus the minified copy of each
 * `.js` and `.css` file that gets one. A copy the tarball already ships is listed once.
 */
export const publishedFiles = (pkg, entryNames) => {
  const matchers = buildMatchers(pkg)
  const files = new Set()
  for (const name of entryNames) {
    const path = publishedPath(matchers, name)
    if (path === undefined) continue
    files.add(path)
    if (isMinified(path, pkg.optimization)) files.add(minifiedName(path))
  }
  return [...files].sort()
}

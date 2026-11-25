import semver from 'semver'
import { fetchWithRetry, readJson } from './http.mjs'
import { isVersionIgnored } from './ignore.mjs'

/** How many tags to read: GitHub orders them by name, not date, so 10 can miss new versions. */
export const GIT_TAG_LIMIT = 50

/** Sorts before every real date, for a tag whose commit has none. */
const NO_DATE = new Date(-62135596800000)

/** `owner/repo` of a GitHub URL, or undefined. */
export const githubRepo = (url) => {
  const match = /github\.com[:/]([^/]+)\/([^/#?]+?)(?:\.git)?(?:[/#?].*)?$/.exec(url ?? '')
  return match ? { owner: match[1], name: match[2] } : undefined
}

/**
 * Versions of the npm package, `{ version, tarball, date }`, minus ignoreVersions. A package npm
 * does not know has none. Versions without a tarball or publish time are left out.
 */
export const npmVersions = async (pkg, deps) => {
  const url = `https://registry.npmjs.org/${pkg.autoupdate.target}`
  const res = await fetchWithRetry(url, undefined, deps)
  if (res.status === 404) {
    await res.body?.cancel()
    return []
  }
  if (!res.ok) throw new Error(`${url} returned HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`)
  const doc = await readJson(res, url)

  const versions = []
  for (const [version, meta] of Object.entries(doc.versions ?? {})) {
    const tarball = meta?.dist?.tarball
    const date = new Date(doc.time?.[version])
    if (typeof tarball !== 'string' || Number.isNaN(date.getTime())) {
      deps.log(`${pkg.name}: version ${version} has no tarball or publish time`)
      continue
    }
    if (isVersionIgnored(pkg.autoupdate.ignoreVersions, version)) {
      deps.log(`${pkg.name}: version ${version} is ignored`)
      continue
    }
    versions.push({ version, tarball, date })
  }
  return versions
}

const TAGS_QUERY = `
query ($owner: String!, $name: String!, $limit: Int!) {
  repository(owner: $owner, name: $name) {
    refs(refPrefix: "refs/tags/", last: $limit) {
      nodes {
        name
        target {
          ... on Tag { target { ... on Commit { tarballUrl committedDate authoredDate } } }
          ... on Commit { tarballUrl committedDate authoredDate }
        }
      }
    }
  }
}`

/**
 * Versions from the last GIT_TAG_LIMIT tags of the GitHub repository, minus ignoreVersions,
 * which match the tag name. A leading `v` is removed from the version.
 */
export const gitVersions = async (pkg, deps) => {
  const repo = githubRepo(pkg.autoupdate.target)
  if (!repo) throw new Error(`autoupdate.target ${pkg.autoupdate.target} is not a GitHub repository`)

  const url = 'https://api.github.com/graphql'
  const res = await fetchWithRetry(
    url,
    {
      method: 'POST',
      headers: { authorization: `bearer ${deps.token}`, 'content-type': 'application/json' },
      // Variables, not interpolation: the target comes from the pull request.
      body: JSON.stringify({ query: TAGS_QUERY, variables: { ...repo, limit: GIT_TAG_LIMIT } })
    },
    deps
  )
  if (!res.ok) throw new Error(`GitHub GraphQL returned HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`)
  const body = await readJson(res, url)

  const versions = []
  for (const tag of body.data?.repository?.refs?.nodes ?? []) {
    const commit = tag.target?.target ?? tag.target ?? {}
    const tarball = commit.tarballUrl
    const dated = commit.committedDate || commit.authoredDate
    if (!tarball) continue
    if (isVersionIgnored(pkg.autoupdate.ignoreVersions, tag.name)) {
      deps.log(`${pkg.name}: version ${tag.name} is ignored`)
      continue
    }
    versions.push({
      version: tag.name.startsWith('v') ? tag.name.slice(1) : tag.name,
      tarball,
      date: dated ? new Date(dated) : NO_DATE
    })
  }
  return versions
}

/**
 * The version cdnjs serves as latest: the highest stable semver version, else the highest
 * prerelease, else the greatest name. Undefined for no versions.
 */
export const latestVersion = (names) => {
  const parsed = names.map((name) => ({ name, sv: semver.parse(name) }))
  const highest = (list) => list.reduce((a, b) => (semver.gt(b.sv, a.sv) ? b : a)).name
  const stable = parsed.filter((p) => p.sv && p.sv.prerelease.length === 0)
  if (stable.length) return highest(stable)
  const pre = parsed.filter((p) => p.sv)
  if (pre.length) return highest(pre)
  return names.length ? names.reduce((a, b) => (b > a ? b : a)) : undefined
}

/**
 * Versions in the order show-files checks them: the latest (see latestVersion) first, then
 * newest first. A package that still maintains an older major line can publish there after its
 * latest release, so the newest is not always the latest.
 */
export const checkOrder = (versions) => {
  const sorted = [...versions].sort((a, b) => b.date - a.date)
  const latest = latestVersion(sorted.map((v) => v.version))
  const index = sorted.findIndex((v) => v.version === latest)
  if (index > 0) sorted.unshift(...sorted.splice(index, 1))
  return sorted
}

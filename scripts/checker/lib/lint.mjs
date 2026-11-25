import { readPackage } from './config.mjs'
import { fetchWithRetry, readJson } from './http.mjs'
import { githubRepo } from './versions.mjs'

/** Popularity cdnjs asks of new libraries; see CONTRIBUTING.md. */
export const MIN_NPM_MONTHLY_DOWNLOADS = 800
export const MIN_GITHUB_STARS = 200

const githubHeaders = (token) => (token ? { authorization: `bearer ${token}` } : {})

/** Whether the repository has MIN_GITHUB_STARS, warning if a GitHub repository has fewer. */
const isPopularOnGithub = async (path, pkg, deps) => {
  const repo = githubRepo(pkg.repository.url)
  if (!repo) return false
  const url = `https://api.github.com/repos/${repo.owner}/${repo.name}`
  const res = await fetchWithRetry(url, { headers: githubHeaders(deps.token) }, deps)
  // A repository GitHub does not know has no stars.
  const stars = res.ok ? ((await readJson(res, url)).stargazers_count ?? 0) : 0
  if (!res.ok) await res.body?.cancel()
  if (stars < MIN_GITHUB_STARS) {
    deps.reporter.warn(path, `stars on GitHub is under ${MIN_GITHUB_STARS}`)
    return false
  }
  return true
}

const npmExists = async (name, deps) => {
  const url = `https://registry.npmjs.org/${name}`
  const res = await fetchWithRetry(url, undefined, deps)
  await res.body?.cancel()
  if (res.status === 200) return true
  if (res.status === 404) return false
  throw new Error(`${url} returned HTTP ${res.status}`)
}

const npmMonthlyDownloads = async (name, deps) => {
  const url = `https://api.npmjs.org/downloads/point/last-month/${name}`
  const res = await fetchWithRetry(url, undefined, deps)
  if (res.status !== 200 && res.status !== 404) {
    throw new Error(`${url} returned HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`)
  }
  return (await readJson(res, url)).downloads ?? 0
}

/** Checks the config's schema, its npm package or GitHub repository, and their popularity. */
export const lint = async (path, deps) => {
  const pkg = await readPackage(path, deps)
  if (!pkg) return

  const { source, target } = pkg.autoupdate
  if (source === 'npm') {
    if (!(await npmExists(target, deps))) {
      deps.reporter.error(path, "package doesn't exist on npm")
      return
    }
    if ((await npmMonthlyDownloads(target, deps)) < MIN_NPM_MONTHLY_DOWNLOADS) {
      if (!(await isPopularOnGithub(path, pkg, deps))) {
        deps.reporter.warn(path, `package download per month on npm is under ${MIN_NPM_MONTHLY_DOWNLOADS}`)
      }
    }
  } else {
    await isPopularOnGithub(path, pkg, deps)
  }
  deps.log(`${path} lint OK`)
}

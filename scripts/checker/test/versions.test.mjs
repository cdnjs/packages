import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { checkOrder, gitVersions, githubRepo, latestVersion, npmVersions } from '../lib/versions.mjs'
import { deps, json } from './helpers.mjs'

const npmPkg = (ignoreVersions) => ({
  name: 'demo',
  autoupdate: { source: 'npm', target: 'demo', fileMap: [], ignoreVersions }
})
const gitPkg = (target, ignoreVersions) => ({
  name: 'demo',
  autoupdate: { source: 'git', target, fileMap: [], ignoreVersions }
})
const dist = (v) => ({ dist: { tarball: `https://registry.npmjs.org/demo/-/demo-${v}.tgz` } })

describe('latestVersion', () => {
  it('prefers the highest stable semver version', () => {
    assert.equal(latestVersion(['15.0.3', '14.3.3', '16.0.0-beta.1', 'nightly']), '15.0.3')
  })
  it('falls back to the highest prerelease, then the greatest name', () => {
    assert.equal(latestVersion(['2.0.0-rc.1', '2.0.0-rc.2', 'zzz']), '2.0.0-rc.2')
    assert.equal(latestVersion(['Release_4_1_0', 'Release_3_7_9']), 'Release_4_1_0')
    assert.equal(latestVersion([]), undefined)
  })
})

describe('checkOrder', () => {
  it('puts the latest first even when an older line published after it', () => {
    const versions = [
      { version: '15.0.3', date: new Date('2026-01-01T00:00:00Z') },
      { version: '14.3.3', date: new Date('2026-01-01T00:22:00Z') },
      { version: '15.0.2', date: new Date('2025-12-01T00:00:00Z') }
    ]
    assert.deepEqual(
      checkOrder(versions).map((v) => v.version),
      ['15.0.3', '14.3.3', '15.0.2']
    )
  })
})

describe('githubRepo', () => {
  it('parses the URL forms configs use', () => {
    for (const url of [
      'git://github.com/mikehostetler/amplify.git',
      'git+https://github.com/mikehostetler/amplify.git',
      'https://github.com/mikehostetler/amplify',
      'git@github.com:mikehostetler/amplify.git',
      'https://github.com/mikehostetler/amplify/tree/master'
    ]) {
      assert.deepEqual(githubRepo(url), { owner: 'mikehostetler', name: 'amplify' }, url)
    }
    assert.equal(githubRepo('https://gitlab.com/a/b'), undefined)
  })
})

describe('npmVersions', () => {
  it('lists versions with a tarball and time, minus ignored ones', async () => {
    const { deps: d, logs } = deps({
      'https://registry.npmjs.org/demo': json({
        versions: { '1.0.0': dist('1.0.0'), '1.1.0-dev.1': dist('1.1.0-dev.1'), '0.9.0': dist('0.9.0'), '0.1.0': {} },
        time: { '1.0.0': '2026-01-02T00:00:00Z', '1.1.0-dev.1': '2026-01-03T00:00:00Z', '0.1.0': '2020-01-01T00:00:00Z' }
      })
    })
    const versions = await npmVersions(npmPkg(['*-dev.*']), d)
    assert.deepEqual(
      versions.map((v) => v.version),
      ['1.0.0']
    )
    assert.equal(versions[0].tarball, 'https://registry.npmjs.org/demo/-/demo-1.0.0.tgz')
    assert.equal(logs.length, 3)
  })

  it('has no versions for a package npm does not know', async () => {
    assert.deepEqual(await npmVersions(npmPkg(), deps({}).deps), [])
  })

  it('fails on another error', async () => {
    const { deps: d } = deps({ 'https://registry.npmjs.org/demo': new Response('nope', { status: 403 }) })
    await assert.rejects(npmVersions(npmPkg(), d), /HTTP 403/)
  })
})

describe('gitVersions', () => {
  const tags = (...nodes) => json({ data: { repository: { refs: { nodes } } } })
  const commit = (tarballUrl, committedDate) => ({ tarballUrl, committedDate })

  it('reads tags with variables, strips a leading v and ignores by tag name', async () => {
    const { deps: d, calls } = deps({
      'https://api.github.com/graphql': tags(
        { name: 'v2.0.0', target: { target: commit('https://api.github.com/t/2', '2026-02-01T00:00:00Z') } },
        { name: 'v1.0.0', target: commit('https://api.github.com/t/1', '2026-01-01T00:00:00Z') },
        { name: 'v1.0.0-beta', target: commit('https://api.github.com/t/b', '2025-12-01T00:00:00Z') },
        { name: 'docs', target: { target: {} } }
      )
    })
    const versions = await gitVersions(gitPkg('https://github.com/own"er/re}po', ['v*-beta']), d)
    assert.deepEqual(
      versions.map((v) => [v.version, v.tarball]),
      [
        ['2.0.0', 'https://api.github.com/t/2'],
        ['1.0.0', 'https://api.github.com/t/1']
      ]
    )
    const { query, variables } = JSON.parse(calls[0].init.body)
    assert.deepEqual(variables, { owner: 'own"er', name: 're}po', limit: 50 })
    assert.ok(!query.includes('own"er'))
    assert.equal(calls[0].init.headers.authorization, 'bearer test-token')
  })

  it('dates a tag without a commit date before every other', async () => {
    const { deps: d } = deps({
      'https://api.github.com/graphql': tags({ name: '1.0.0', target: { tarballUrl: 'https://api.github.com/t/1' } })
    })
    const [v] = await gitVersions(gitPkg('https://github.com/a/b'), d)
    assert.ok(v.date < new Date('1970-01-01'))
  })

  it('has no versions for a repository GitHub does not know', async () => {
    const { deps: d } = deps({ 'https://api.github.com/graphql': json({ data: { repository: null } }) })
    assert.deepEqual(await gitVersions(gitPkg('https://github.com/a/b'), d), [])
  })

  it('fails for a target outside GitHub', async () => {
    await assert.rejects(gitVersions(gitPkg('https://gitlab.com/a/b'), deps({}).deps), /not a GitHub repository/)
  })
})

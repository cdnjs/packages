import assert from 'node:assert/strict'
import { mkdtemp, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { lint } from '../lib/lint.mjs'
import { showFiles } from '../lib/showFiles.mjs'
import { deps, json, tarball } from './helpers.mjs'

const config = (overrides = {}) => ({
  name: 'demo',
  description: 'demo',
  keywords: ['demo'],
  filename: 'demo.min.js',
  repository: { type: 'git', url: 'https://github.com/a/demo.git' },
  autoupdate: { source: 'npm', target: 'demo', fileMap: [{ basePath: 'dist', files: ['*.js'] }] },
  ...overrides
})

const write = async (content) => {
  const path = join(await mkdtemp(join(tmpdir(), 'checker-')), 'demo.json')
  await writeFile(path, JSON.stringify(content))
  return path
}

const messages = (reporter) => reporter.annotations.map((a) => `${a.type}: ${a.message}`)

const REGISTRY = 'https://registry.npmjs.org/demo'
const DOWNLOADS = 'https://api.npmjs.org/downloads/point/last-month/demo'
const REPO = 'https://api.github.com/repos/a/demo'

describe('lint', () => {
  it('passes a popular npm package', async () => {
    const { deps: d, logs } = deps({ [REGISTRY]: json({}), [DOWNLOADS]: json({ downloads: 5000 }) })
    const path = await write(config())
    await lint(path, d)
    assert.deepEqual(messages(d.reporter), [])
    assert.deepEqual(logs, [`${path} lint OK`])
  })

  it('errors for a package npm does not know', async () => {
    const { deps: d } = deps({})
    await lint(await write(config()), d)
    assert.deepEqual(messages(d.reporter), ["error: package doesn't exist on npm"])
  })

  it('warns when npm downloads and GitHub stars are both low', async () => {
    const { deps: d } = deps({
      [REGISTRY]: json({}),
      [DOWNLOADS]: json({ downloads: 10 }),
      [REPO]: json({ stargazers_count: 3 })
    })
    await lint(await write(config()), d)
    assert.deepEqual(messages(d.reporter), [
      'warning: stars on GitHub is under 200',
      'warning: package download per month on npm is under 800'
    ])
  })

  it('accepts few npm downloads for a popular GitHub repository', async () => {
    const { deps: d, calls } = deps({
      [REGISTRY]: json({}),
      [DOWNLOADS]: json({ error: 'package demo not found' }, { status: 404 }),
      [REPO]: json({ stargazers_count: 900 })
    })
    await lint(await write(config()), d)
    assert.deepEqual(messages(d.reporter), [])
    assert.equal(calls.find((c) => c.url === REPO).init.headers.authorization, 'bearer test-token')
  })

  it('fails when npm keeps answering with server errors', async () => {
    const { deps: d } = deps({ [REGISTRY]: new Response('', { status: 503 }) })
    await assert.rejects(lint(await write(config()), d), /HTTP 503/)
  })

  it('fails when the downloads API answers neither 200 nor 404', async () => {
    const { deps: d } = deps({ [REGISTRY]: json({}), [DOWNLOADS]: new Response('denied', { status: 403 }) })
    await assert.rejects(lint(await write(config()), d), /HTTP 403: denied/)
  })

  it('checks stars for a git source', async () => {
    const { deps: d } = deps({ [REPO]: json({ message: 'Not Found' }, { status: 404 }) })
    await lint(await write(config({ autoupdate: { ...config().autoupdate, source: 'git' } })), d)
    assert.deepEqual(messages(d.reporter), ['warning: stars on GitHub is under 200'])
  })
})

const npmDoc = (...versions) =>
  json({
    versions: Object.fromEntries(versions.map(([v]) => [v, { dist: { tarball: `${REGISTRY}/-/demo-${v}.tgz` } }])),
    time: Object.fromEntries(versions.map(([v, date]) => [v, date]))
  })

describe('show-files', () => {
  it('lists the latest version and counts the previous ones', async () => {
    const { deps: d } = deps({
      [REGISTRY]: npmDoc(['2.0.0', '2026-01-01T00:00:00Z'], ['1.9.9', '2026-02-01T00:00:00Z'], ['1.0.0', '2025-01-01T00:00:00Z']),
      [`${REGISTRY}/-/demo-2.0.0.tgz`]: new Response(
        tarball([{ name: 'package/dist/demo.js' }, { name: 'package/dist/../../glob/index.js' }, { name: 'package/src/x.js' }])
      ),
      [`${REGISTRY}/-/demo-1.9.9.tgz`]: new Response(tarball([{ name: 'package/lib/demo.js' }]))
    })
    await showFiles(await write(config()), d)
    assert.deepEqual(messages(d.reporter), [])
    assert.equal(
      d.reporter.output,
      [
        '',
        'most recent version: 2.0.0',
        '',
        '```',
        'demo.js',
        'demo.min.js',
        '```',
        '',
        '2 last version(s):',
        '- 1.9.9: 0 file(s) matched :heavy_exclamation_mark:',
        '- 1.0.0: failed to read (HTTP 404 downloading https://registry.npmjs.org/demo/-/demo-1.0.0.tgz) :heavy_exclamation_mark:',
        ''
      ].join('\n')
    )
  })

  it('errors when filename is not among the latest files', async () => {
    const { deps: d } = deps({
      [REGISTRY]: npmDoc(['1.0.0', '2026-01-01T00:00:00Z']),
      [`${REGISTRY}/-/demo-1.0.0.tgz`]: new Response(tarball([{ name: 'package/dist/other.js' }]))
    })
    await showFiles(await write(config()), d)
    assert.deepEqual(messages(d.reporter), ['error: Filename `demo.min.js` not found in most recent version `1.0.0`.'])
  })

  it('errors when the latest version cannot be read', async () => {
    const { deps: d } = deps({ [REGISTRY]: npmDoc(['1.0.0', '2026-01-01T00:00:00Z']) })
    await showFiles(await write(config()), d)
    assert.deepEqual(messages(d.reporter), [
      'error: failed to read version 1.0.0: HTTP 404 downloading https://registry.npmjs.org/demo/-/demo-1.0.0.tgz'
    ])
  })

  it('errors when the latest version publishes nothing', async () => {
    const { deps: d } = deps({
      [REGISTRY]: npmDoc(['1.0.0', '2026-01-01T00:00:00Z']),
      [`${REGISTRY}/-/demo-1.0.0.tgz`]: new Response(tarball([{ name: 'package/README.md' }]))
    })
    await showFiles(await write(config()), d)
    assert.deepEqual(messages(d.reporter), ['error: No files will be published for version 1.0.0.'])
  })

  it('errors when there is no version', async () => {
    const { deps: d } = deps({})
    await showFiles(await write(config()), d)
    assert.deepEqual(messages(d.reporter), ['error: no version found on npm'])
  })

  it('stops at an invalid config', async () => {
    const { deps: d, calls } = deps({})
    await showFiles(await write(config({ keywords: [] })), d)
    assert.deepEqual(messages(d.reporter), ['error: keywords: Array must have at least 1 items'])
    assert.equal(calls.length, 0)
  })
})

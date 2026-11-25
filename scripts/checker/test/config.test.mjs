import assert from 'node:assert/strict'
import { mkdtemp, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
import { describe, it } from 'node:test'
import { readPackage } from '../lib/config.mjs'
import { recordingReporter } from './helpers.mjs'

const fixtures = new URL('./fixtures/schema/', import.meta.url)
// Recorded from the Go checker's gojsonschema validation of each fixture.
const expected = JSON.parse(await readFile(new URL('./fixtures/schema-expected.json', import.meta.url), 'utf8'))

const read = async (path, validatePath = false) => {
  const reporter = recordingReporter()
  const pkg = await readPackage(path, { reporter, validatePath })
  return { pkg, reporter, errors: reporter.annotations.filter((a) => a.type === 'error').map((a) => a.message) }
}

describe('schema errors match the previous checker word for word', () => {
  for (const { file, invalidJSON, errors } of expected) {
    it(file, async () => {
      const result = await read(new URL(file, fixtures).pathname)
      if (invalidJSON) {
        assert.equal(result.pkg, undefined)
        assert.match(result.errors[0], /^failed to parse /)
      } else {
        assert.deepEqual(result.errors.sort(), errors)
        assert.equal(result.pkg === undefined, errors.length > 0)
      }
    })
  }
})

const valid = {
  name: 'demo',
  description: 'demo',
  keywords: ['demo'],
  filename: 'demo.js',
  repository: { type: 'git', url: 'https://github.com/a/demo' },
  autoupdate: { source: 'npm', target: 'demo', fileMap: [{ basePath: '', files: ['*.js'] }] }
}

const configAt = async (relative, content) => {
  const root = await mkdtemp(join(tmpdir(), 'checker-'))
  const path = join(root, relative)
  const { mkdir } = await import('node:fs/promises')
  await mkdir(join(path, '..'), { recursive: true })
  await writeFile(path, JSON.stringify(content))
  return { root, path }
}

describe('readPackage', () => {
  it('requires packages/<first letter>/<name>.json', async () => {
    const cwd = process.cwd()
    const { root } = await configAt('packages/x/demo.json', valid)
    process.chdir(root)
    try {
      assert.match((await read('packages/x/demo.json', true)).errors[0], /must go into `d` dir, not `x` dir/)
      assert.match((await read('lib/demo.json', true)).errors[0], /does not match/)
    } finally {
      process.chdir(cwd)
    }
  })

  it('rejects an ignoreVersions glob that does not compile', async () => {
    const { path } = await configAt('d.json', {
      ...valid,
      autoupdate: { ...valid.autoupdate, ignoreVersions: ['1.[', '*-dev.*'] }
    })
    const { pkg, errors } = await read(path)
    assert.equal(pkg, undefined)
    assert.deepEqual(errors, ['autoupdate.ignoreVersions: `1.[` is not a valid glob'])
  })

  it('warns when filename is missing', async () => {
    const { filename, ...rest } = valid
    const { path } = await configAt('d.json', rest)
    const { pkg, reporter } = await read(path)
    assert.equal(pkg.name, 'demo')
    assert.deepEqual(reporter.annotations, [{ type: 'warning', file: path, message: 'filename is missing' }])
  })
})

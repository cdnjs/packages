import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { mkdtemp, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { promisify } from 'node:util'

const CHECKER = new URL('../checker.mjs', import.meta.url).pathname
const run = (...args) =>
  promisify(execFile)('node', [CHECKER, ...args]).then(
    (r) => ({ code: 0, ...r }),
    (e) => ({ code: e.code, stdout: e.stdout, stderr: e.stderr })
  )

describe('checker.mjs', () => {
  it('prints usage and exits 2 without a command', async () => {
    const { code, stderr } = await run()
    assert.equal(code, 2)
    assert.match(stderr, /usage:/)
  })

  it('annotates every config and exits 1 on an error', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'checker-'))
    const path = join(dir, 'bad.json')
    await writeFile(path, '{"name": "100%\\nsure"}')
    const { code, stdout } = await run('--no-path-validation', 'lint', path, join(dir, 'missing.json'))
    assert.equal(code, 1)
    const lines = stdout.trim().split('\n')
    assert.ok(lines.includes(`::error file=${path},line=1,col=1::name: Does not match pattern '^[a-zA-Z0-9._-]+$'`))
    assert.ok(lines.some((l) => l.startsWith(`::error file=${join(dir, 'missing.json')},line=1,col=1::failed to parse`)))
  })

  it('validates the path without --no-path-validation', async () => {
    const { code, stdout } = await run('lint', 'nowhere/x.json')
    assert.equal(code, 1)
    assert.match(stdout, /^::error file=nowhere\/x.json,line=1,col=1::package path `nowhere\/x.json` does not match/)
  })
})

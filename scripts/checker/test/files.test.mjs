import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { describe, it } from 'node:test'
import { minifiedName, publishedFiles } from '../lib/files.mjs'
import { compileIgnoreGlob, isVersionIgnored } from '../lib/ignore.mjs'

const rules = JSON.parse(await readFile(new URL('./fixtures/publish-rules.json', import.meta.url), 'utf8'))

describe('publishedFiles agrees with the publish rules', () => {
  for (const { name, pkg, entries, published } of rules.files) {
    it(name, () => assert.deepEqual(publishedFiles(pkg, entries), published))
  }
})

describe('isVersionIgnored agrees with gobwas on real configs', () => {
  for (const { name, ignoreVersions, ignored, kept } of rules.ignoreVersions) {
    it(`${name} ${JSON.stringify(ignoreVersions)}`, () => {
      const actual = [...ignored, ...kept].filter((v) => isVersionIgnored(ignoreVersions, v))
      assert.deepEqual(actual, ignored)
    })
  }
})

describe('ignore globs', () => {
  it('rejects the patterns gobwas rejects', () => {
    for (const pattern of ['1.[', '1.[]', '1.[z-a]']) assert.equal(compileIgnoreGlob(pattern), null, pattern)
  })

  it('ignores nothing for an invalid pattern', () => {
    assert.equal(isVersionIgnored(['1.['], '1.['), false)
  })

  it('matches a pathological pattern in linear time', () => {
    const start = performance.now()
    assert.equal(isVersionIgnored(['*a*a*a*a*a*a*a*a*a*a*b'], 'a'.repeat(5000)), false)
    assert.ok(performance.now() - start < 2000)
  })
})

describe('minifiedName', () => {
  it('inserts .min before the extension', () => {
    assert.equal(minifiedName('a/b.c.js'), 'a/b.c.min.js')
    assert.equal(minifiedName('x.CSS'), 'x.min.CSS')
  })
})

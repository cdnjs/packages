import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { gzipSync } from 'node:zlib'
import { listTarball } from '../lib/tarball.mjs'
import { fakeFetch, tarball } from './helpers.mjs'

const URL_ = 'https://registry.npmjs.org/demo/-/demo-1.0.0.tgz'
const all = () => true

describe('listTarball', () => {
  it('lists regular files and skips directories and links', async () => {
    const { fetch } = fakeFetch({
      [URL_]: new Response(
        tarball([
          { name: 'package/', type: '5' },
          { name: 'package/a.js', content: 'a' },
          { name: 'package/link.js', type: '2' },
          { name: 'package/hard.js', type: '1' },
          { name: 'package/b.css', content: 'b' }
        ])
      )
    })
    assert.deepEqual(await listTarball(URL_, all, { fetch }), ['package/a.js', 'package/b.css'])
  })

  it('reads names longer than 100 bytes from pax headers', async () => {
    const long = 'package/' + 'd/'.repeat(60) + 'deep.js'
    const { fetch } = fakeFetch({ [URL_]: new Response(tarball([{ name: long, content: 'x' }])) })
    assert.deepEqual(await listTarball(URL_, all, { fetch }), [long])
  })

  it('returns a name that leaves the package as a string and writes nothing', async () => {
    const { fetch } = fakeFetch({
      [URL_]: new Response(tarball([{ name: 'package/../../glob/index.js', content: '#!/bin/sh' }]))
    })
    assert.deepEqual(await listTarball(URL_, all, { fetch }), ['package/../../glob/index.js'])
  })

  it('only lists what the filter accepts', async () => {
    const { fetch } = fakeFetch({
      [URL_]: new Response(tarball([{ name: 'package/a.js' }, { name: 'package/test/huge.bin', content: 'x' }]))
    })
    assert.deepEqual(await listTarball(URL_, (n) => n.endsWith('.js'), { fetch }), ['package/a.js'])
  })

  it('accepts padding after the gzip data', async () => {
    const { fetch } = fakeFetch({ [URL_]: new Response(tarball([{ name: 'package/a.js' }], { trailing: 1024 })) })
    assert.deepEqual(await listTarball(URL_, all, { fetch }), ['package/a.js'])
  })

  it('fails a truncated tarball', async () => {
    const whole = tarball([{ name: 'package/a.js', content: 'x'.repeat(4096) }])
    const { gunzipSync } = await import('node:zlib')
    const cut = gzipSync(gunzipSync(whole).subarray(0, 1024))
    const { fetch } = fakeFetch({ [URL_]: new Response(cut) })
    await assert.rejects(listTarball(URL_, all, { fetch }))
  })

  it('fails a download that is not a 200', async () => {
    const { fetch } = fakeFetch({})
    await assert.rejects(listTarball(URL_, all, { fetch }), /HTTP 404 downloading/)
  })
})

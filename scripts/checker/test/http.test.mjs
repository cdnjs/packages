import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { fetchWithRetry } from '../lib/http.mjs'

const URL_ = 'https://api.npmjs.org/downloads/point/last-month/demo'

/** A fetch answering with `answers` in turn: a status number, a Response, or an Error to throw. */
const sequence = (...answers) => {
  let calls = 0
  const fetch = async () => {
    const answer = answers[Math.min(calls++, answers.length - 1)]
    if (answer instanceof Error) throw answer
    return answer instanceof Response ? answer : new Response('error code: 1015', { status: answer })
  }
  return { fetch, calls: () => calls }
}

const sleeps = () => {
  const waits = []
  return { sleep: async (ms) => waits.push(ms), waits }
}

describe('fetchWithRetry', () => {
  it('retries 429 and 5xx, doubling the wait', async () => {
    const { fetch, calls } = sequence(429, 503, 200)
    const { sleep, waits } = sleeps()
    const res = await fetchWithRetry(URL_, undefined, { fetch, sleep })
    assert.equal(res.status, 200)
    assert.equal(calls(), 3)
    assert.deepEqual(waits, [2000, 4000])
  })

  it('retries a connection error', async () => {
    const { fetch } = sequence(new TypeError('fetch failed'), 200)
    const res = await fetchWithRetry(URL_, undefined, { fetch, ...sleeps() })
    assert.equal(res.status, 200)
  })

  it('does not retry a 404', async () => {
    const { fetch, calls } = sequence(404)
    assert.equal((await fetchWithRetry(URL_, undefined, { fetch, ...sleeps() })).status, 404)
    assert.equal(calls(), 1)
  })

  it('uses a longer Retry-After and ignores a shorter one', async () => {
    const { fetch } = sequence(
      new Response('', { status: 429, headers: { 'retry-after': '30' } }),
      new Response('', { status: 429, headers: { 'retry-after': '0' } }),
      200
    )
    const { sleep, waits } = sleeps()
    await fetchWithRetry(URL_, undefined, { fetch, sleep })
    assert.deepEqual(waits, [30000, 4000])
  })

  it('caps the wait at a minute and returns the last answer after 8 attempts', async () => {
    const { fetch, calls } = sequence(429)
    const { sleep, waits } = sleeps()
    const res = await fetchWithRetry(URL_, undefined, { fetch, sleep })
    assert.equal(res.status, 429)
    assert.equal(calls(), 8)
    assert.deepEqual(waits, [2000, 4000, 8000, 16000, 32000, 60000, 60000])
  })

  it('throws the last connection error after 8 attempts', async () => {
    const { fetch } = sequence(new TypeError('fetch failed'))
    await assert.rejects(fetchWithRetry(URL_, undefined, { fetch, ...sleeps() }), /fetch failed/)
  })
})

const MAX_ATTEMPTS = 8
const BASE_WAIT_MS = 2_000
const MAX_WAIT_MS = 60_000

/** Seconds or an HTTP date, in milliseconds; undefined if absent or unparsable. */
const retryAfterMs = (value, now) => {
  if (!value) return undefined
  if (/^\d+$/.test(value)) return Number(value) * 1000
  const date = Date.parse(value)
  return Number.isNaN(date) ? undefined : date - now()
}

/**
 * fetch, retried while the server answers 429 or a 5xx status, or the request fails to connect.
 * api.npmjs.org rate-limits bursts of about a dozen requests with a 429 whose body is not JSON.
 * The wait doubles from 2 seconds up to a minute, about three minutes over 8 attempts. A longer
 * Retry-After wins; a shorter one is ignored, because npm sends `Retry-After: 0` while it still
 * refuses requests. The last attempt's response or error is returned, so check the status.
 */
export const fetchWithRetry = async (url, init, { fetch, sleep, now = Date.now }) => {
  let wait = BASE_WAIT_MS
  for (let attempt = 1; ; attempt++) {
    let res
    try {
      res = await fetch(url, init)
    } catch (error) {
      if (attempt === MAX_ATTEMPTS) throw error
    }
    if (res && (attempt === MAX_ATTEMPTS || (res.status !== 429 && res.status < 500))) return res

    let delay = wait
    if (res) {
      const after = retryAfterMs(res.headers.get('retry-after'), now)
      if (after !== undefined && after > delay) delay = after
      await res.body?.cancel()
    }
    await sleep(Math.min(delay, MAX_WAIT_MS))
    wait *= 2
  }
}

/** The response body as JSON, or an error naming the status and the start of the body. */
export const readJson = async (res, url) => {
  const body = await res.text()
  try {
    return JSON.parse(body)
  } catch {
    throw new Error(`${url} returned HTTP ${res.status}: ${body.slice(0, 200)}`)
  }
}

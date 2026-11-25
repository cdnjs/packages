import { gzipSync } from 'node:zlib'

const BLOCK = 512

const header = (name, size, type) => {
  const block = Buffer.alloc(BLOCK)
  block.write(name.slice(0, 100), 0, 'utf8')
  block.write('0000644\0', 100)
  block.write('0000000\0', 108)
  block.write('0000000\0', 116)
  block.write(size.toString(8).padStart(11, '0') + '\0', 124)
  block.write('00000000000\0', 136)
  block.write('        ', 148)
  block.write(type, 156)
  block.write('ustar\0' + '00', 257)
  let sum = 0
  for (const byte of block) sum += byte
  block.write(sum.toString(8).padStart(6, '0') + '\0 ', 148)
  return block
}

const padded = (content) => Buffer.concat([content, Buffer.alloc((BLOCK - (content.length % BLOCK)) % BLOCK)])

/**
 * A gzipped tarball. Entries are `{ name, content = '', type = '0' }`; a name over 100 bytes is
 * written with a pax header, as npm does. `trailing` bytes are appended after the gzip data.
 */
export const tarball = (entries, { trailing = 0 } = {}) => {
  const parts = []
  for (const { name, content = '', type = '0' } of entries) {
    const body = Buffer.from(content)
    if (Buffer.byteLength(name) > 100) {
      const record = ` path=${name}\n`
      // The length prefix counts its own digits.
      let digits = 1
      while (String(record.length + digits).length > digits) digits++
      const pax = Buffer.from(`${record.length + digits}${record}`)
      parts.push(header('PaxHeader', pax.length, 'x'), padded(pax))
    }
    parts.push(header(name, type === '0' ? body.length : 0, type))
    if (type === '0') parts.push(padded(body))
  }
  parts.push(Buffer.alloc(BLOCK * 2))
  return Buffer.concat([gzipSync(Buffer.concat(parts)), Buffer.alloc(trailing)])
}

/**
 * A fetch that answers from `routes`: URL to a Response, or a function returning one. Every call
 * is recorded in `calls`. Unknown URLs answer 404.
 */
export const fakeFetch = (routes) => {
  const calls = []
  // Bodies are read once and served fresh on every call. Response.clone() tees the body, and a
  // cancelled branch of a tee waits for the other branch.
  const bodies = new Map()
  const fetch = async (url, init) => {
    calls.push({ url, init })
    const route = routes[url]
    const res = typeof route === 'function' ? await route(init, calls) : route
    if (!res) return new Response('{"error":"Not found"}', { status: 404 })
    if (!bodies.has(res)) bodies.set(res, await res.arrayBuffer())
    return new Response(bodies.get(res), { status: res.status, headers: res.headers })
  }
  return { fetch, calls }
}

export const json = (body, init) =>
  new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json' }, ...init })

/** A reporter that records annotations and output instead of printing them. */
export const recordingReporter = () => {
  const reporter = {
    errors: 0,
    annotations: [],
    output: '',
    error(file, message) {
      reporter.errors++
      reporter.annotations.push({ type: 'error', file, message })
    },
    warn(file, message) {
      reporter.annotations.push({ type: 'warning', file, message })
    },
    print(text) {
      reporter.output += text
    }
  }
  return reporter
}

export const deps = (routes, extra = {}) => {
  const { fetch, calls } = fakeFetch(routes)
  const logs = []
  return {
    calls,
    logs,
    deps: {
      reporter: recordingReporter(),
      validatePath: false,
      fetch,
      sleep: async () => {},
      token: 'test-token',
      log: (m) => logs.push(m),
      ...extra
    }
  }
}

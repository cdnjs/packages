import { Readable, pipeline } from 'node:stream'
import { createGunzip } from 'node:zlib'
import { StreamingUSTarParser } from 'trotar'

/**
 * Names of the regular files in the gzipped tarball at `url` that `filter` accepts. Entries are
 * read in memory and never written to disk, so a name like `../x` is only a string here.
 * node:zlib, unlike DecompressionStream, accepts the padding some npm tarballs carry after the
 * gzip data, and still fails a truncated or corrupt stream.
 */
export const listTarball = async (url, filter, { fetch }) => {
  const res = await fetch(url)
  if (!res.ok || !res.body) {
    await res.body?.cancel()
    throw new Error(`HTTP ${res.status} downloading ${url}`)
  }

  const names = []
  const parser = new StreamingUSTarParser({ filter })
  parser.on('file', (name) => {
    names.push(name)
  })

  // pipeline, not pipe: a download cut off mid-body must reject the loop below, not crash the
  // process with an unhandled 'error' event. The loop sees the error, so the callback ignores it.
  const gunzip = createGunzip()
  pipeline(Readable.fromWeb(res.body), gunzip, () => {})
  for await (const chunk of gunzip) {
    // Wait for the parser: without it a pax or GNU long name at a chunk boundary is dropped.
    await parser.write(chunk)
  }
  // Throws if the stream ended inside an entry, so a truncated tarball fails.
  parser.close()
  return names
}

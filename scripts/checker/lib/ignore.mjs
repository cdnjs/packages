// `autoupdate.ignoreVersions` entries are globs in the syntax of gobwas/glob v0.2.3 without
// separators, which is what the auto-update has always matched them with. A pattern is matched
// against the whole version: an npm version, or a git tag before its leading `v` is removed.
//
// gobwas matcher bugs are not copied: `{}.` never matches there, `1.*.1` matches `1.1`, `?`
// matches "", and non-ASCII fails `?` or a set next to fixed text (`1.?.0` vs `1.é.0`). None
// occurs in cdnjs/packages.

/**
 * Parses a pattern into nodes. `one` matches a single character, `any` a run of characters,
 * `alt` any of its sequences. Characters are code points. Throws where gobwas does: an unclosed
 * `[`, or an empty or reversed set.
 */
const parse = (pattern) => {
  const chars = [...pattern]
  let i = 0
  let braces = 0

  // `[abc]` and `[a-z]` match one character from the set, `[!abc]` and `[!a-z]` one outside it.
  const parseSet = () => {
    const negate = chars[i] === '!'
    if (negate) i++
    let test
    if (chars[i + 1] === '-' && i + 2 < chars.length) {
      const lo = chars[i].codePointAt(0)
      const hi = chars[i + 2].codePointAt(0)
      if (lo > hi) throw new Error(`reversed range in ${pattern}`)
      test = (c) => {
        const code = c.codePointAt(0)
        return code >= lo && code <= hi
      }
      i += 3
    } else {
      const members = new Set()
      while (i < chars.length && chars[i] !== ']') {
        if (chars[i] === '\\') i++
        if (i < chars.length) members.add(chars[i++])
      }
      if (!members.size) throw new Error(`empty set in ${pattern}`)
      test = (c) => members.has(c)
    }
    if (chars[i] !== ']') throw new Error(`unclosed [ in ${pattern}`)
    i++
    return { type: 'one', test: negate ? (c) => !test(c) : test }
  }

  // `*` and `**` match any run of characters, `?` exactly one. `{a,b}` matches any alternative,
  // which may hold patterns too. `\` makes the next character literal. `,` and `}` are literal
  // outside braces, `]` outside a set.
  const parseSequence = () => {
    const nodes = []
    while (i < chars.length) {
      const c = chars[i]
      if (braces > 0 && (c === ',' || c === '}')) return nodes
      i++
      if (c === '\\') {
        // A trailing backslash is dropped, as gobwas does.
        if (i < chars.length) {
          const literal = chars[i++]
          nodes.push({ type: 'one', test: (v) => v === literal })
        }
      } else if (c === '*') {
        while (chars[i] === '*') i++
        nodes.push({ type: 'any' })
      } else if (c === '?') {
        nodes.push({ type: 'one', test: () => true })
      } else if (c === '[') {
        nodes.push(parseSet())
      } else if (c === '{') {
        braces++
        const options = [parseSequence()]
        while (chars[i] === ',') {
          i++
          options.push(parseSequence())
        }
        // A `{` still open at the end of the pattern closes there, as in gobwas.
        if (chars[i] === '}') i++
        braces--
        nodes.push({ type: 'alt', options })
      } else {
        nodes.push({ type: 'one', test: (v) => v === c })
      }
    }
    return nodes
  }

  return parseSequence()
}

/**
 * Positions in `chars` where a match of `nodes` can end, given where it may begin (`starts`).
 * Tracking position sets instead of backtracking keeps matching linear in pattern size times
 * version length. A RegExp built from a glob like `*a*a*a*a*a*a*a*a*b` takes seconds to reject
 * a long run of `a`, and the pattern comes from the pull request.
 */
const matchEnds = (nodes, chars, starts) => {
  let current = starts
  for (const node of nodes) {
    const next = new Array(chars.length + 1).fill(false)
    if (node.type === 'any') {
      const first = current.indexOf(true)
      if (first !== -1) next.fill(true, first)
    } else if (node.type === 'one') {
      for (let p = 0; p < chars.length; p++) if (current[p] && node.test(chars[p])) next[p + 1] = true
    } else {
      for (const option of node.options) {
        matchEnds(option, chars, current).forEach((end, p) => {
          if (end) next[p] = true
        })
      }
    }
    current = next
  }
  return current
}

/** A function testing a version against `pattern`, or null if the pattern is invalid. */
export const compileIgnoreGlob = (pattern) => {
  let nodes
  try {
    nodes = parse(pattern)
  } catch {
    return null
  }
  return (version) => {
    const chars = [...version]
    const starts = new Array(chars.length + 1).fill(false)
    starts[0] = true
    return matchEnds(nodes, chars, starts)[chars.length]
  }
}

/**
 * Whether `version` matches one of `patterns`. An invalid pattern ignores nothing: treating it as
 * a match could hide every version of the package.
 */
export const isVersionIgnored = (patterns, version) =>
  (patterns ?? []).some((pattern) => compileIgnoreGlob(pattern)?.(version) ?? false)

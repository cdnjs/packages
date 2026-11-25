import { readFile } from 'node:fs/promises'
import Ajv from 'ajv'
import { compileIgnoreGlob } from './ignore.mjs'

const schema = JSON.parse(await readFile(new URL('../schema.json', import.meta.url), 'utf8'))
const validate = new Ajv({ allErrors: true, strict: false, verbose: true }).compile(schema)

const PATH_PATTERN = /^packages\/([a-z0-9])\/([a-zA-Z0-9._-]+)\.json$/

const jsonType = (value) => {
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'array'
  if (Number.isInteger(value)) return 'integer'
  return typeof value
}

/** `/autoupdate/fileMap/0` as `autoupdate.fileMap.0`, the root as `(root)`. */
const fieldName = (instancePath) => instancePath.slice(1).replaceAll('/', '.') || '(root)'

/** One schema error, worded like the messages contributors have seen on PRs since 2020. */
export const formatSchemaError = (error) => {
  const field = fieldName(error.instancePath)
  const { params } = error
  switch (error.keyword) {
    case 'additionalProperties':
      return `${field}: Additional property ${params.additionalProperty} is not allowed`
    case 'required':
      return `${field}: ${params.missingProperty} is required`
    case 'minItems':
      return `${field}: Array must have at least ${params.limit} items`
    case 'uniqueItems':
      return `${field}: array items[${Math.min(params.i, params.j)},${Math.max(params.i, params.j)}] must be unique`
    case 'minLength':
      return `${field}: String length must be greater than or equal to ${params.limit}`
    case 'pattern':
      return `${field}: Does not match pattern '${params.pattern}'`
    case 'type':
      return `${field}: Invalid type. Expected: ${params.type}, given: ${jsonType(error.data)}`
    default:
      return `${field}: ${error.message}`
  }
}

/**
 * Reads and checks the config at `path`. Returns the package, or undefined after reporting why
 * it cannot be used. A missing `filename` is a warning.
 */
export const readPackage = async (path, { reporter, validatePath = true }) => {
  if (validatePath) {
    const match = PATH_PATTERN.exec(path)
    if (!match) {
      reporter.error(path, `package path \`${path}\` does not match ${PATH_PATTERN.source}`)
      return undefined
    }
    const [, dir, name] = match
    const expected = name[0].toLowerCase()
    if (dir !== expected) {
      reporter.error(path, `package \`${name}\` must go into \`${expected}\` dir, not \`${dir}\` dir`)
      return undefined
    }
  }

  let pkg
  try {
    pkg = JSON.parse(await readFile(path, 'utf8'))
  } catch (error) {
    reporter.error(path, `failed to parse ${path}: ${error.message}`)
    return undefined
  }

  if (!validate(pkg)) {
    for (const error of validate.errors) reporter.error(path, formatSchemaError(error))
    return undefined
  }

  const badGlobs = (pkg.autoupdate.ignoreVersions ?? []).filter((pattern) => !compileIgnoreGlob(pattern))
  if (badGlobs.length) {
    for (const pattern of badGlobs) {
      reporter.error(path, `autoupdate.ignoreVersions: \`${pattern}\` is not a valid glob`)
    }
    return undefined
  }

  if (pkg.filename === undefined) reporter.warn(path, 'filename is missing')
  return pkg
}

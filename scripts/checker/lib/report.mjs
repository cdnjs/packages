const escape = (s) => s.replaceAll('%', '%25').replaceAll('\r', '%0D').replaceAll('\n', '%0A')

/**
 * Writes GitHub Actions annotations, which show on the config file in the pull request, and
 * counts errors so the command can fail.
 */
export class Reporter {
  errors = 0

  constructor(out = process.stdout) {
    this.out = out
  }

  error(file, message) {
    this.errors++
    this.#annotate('error', file, message)
  }

  warn(file, message) {
    this.#annotate('warning', file, message)
  }

  print(text) {
    this.out.write(text)
  }

  #annotate(type, file, message) {
    this.out.write(`::${type} file=${file},line=1,col=1::${escape(message)}\n`)
  }
}

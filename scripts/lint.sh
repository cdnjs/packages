set -euo pipefail

for f in "$@"
do
  # The checker's own package and test fixtures are not package configs.
  case "$f" in scripts/*) continue ;; esac
  if [ "${f##*.}" = "json" ]; then
    node scripts/checker/checker.mjs lint "$f"
  fi
done

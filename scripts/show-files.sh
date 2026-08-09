set -euo pipefail

for f in "$@"
do
  if [ "${f##*.}" = "json" ]; then
    ./checker show-files "$f"
  fi
done

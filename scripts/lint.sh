set -euo pipefail

for f in "$@"
do
  if [ "${f##*.}" = "json" ]; then
    ./checker lint "$f"
  fi
done

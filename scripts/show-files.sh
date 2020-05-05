set -e
files="$@"

for f in $files
do
  if [ "${f##*.}" = "json" ]; then
    ./checker show-files $f
  fi
done

files="$@"

for f in $files
do
  if [ "${f##*.}" = "json" ]; then
    ./checker lint $f
  fi
done

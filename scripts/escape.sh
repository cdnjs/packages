txt=$(cat -)
txt="${txt//'%'/'%25'}"
txt="${txt//$'\n'/'%0A'}"
txt="${txt//$'\r'/'%0D'}"
echo $txt

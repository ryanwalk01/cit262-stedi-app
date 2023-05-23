echo "Logging in"
@REM curl -o index.html https://www.google.com/
curl -v -d "@login.json" POST -H "content-Type:application/json" https://dev.stedi.me/login
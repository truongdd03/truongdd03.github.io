#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
cp site-map.xml ./dist/site-map.xml
# navigate into the build output directory
cd dist
cp index.html 404.html
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:truongdd03/truongdd03.github.io.git master:gh-pages
cd -
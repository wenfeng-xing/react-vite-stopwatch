#!/usr/bin/env sh

# abort on errors
set -e

rm -rf dist/

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git remote add origin git@github.com:wenfeng-xing/react-vite-stopwatch.git 

git push -f origin main:gh-pages
cd FolioSpace
pnpm install
pnpm run build
rm -rf ../developer-portfolio/public/foliospace
mkdir -p ../developer-portfolio/public/foliospace
cp -r dist/* ../developer-portfolio/public/foliospace

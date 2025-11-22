cd FolioSpace
pnpm install
pnpm run build
rm -rf ../public/foliospace
mkdir -p ../public/foliospace
cp -r dist/* ../public/foliospace

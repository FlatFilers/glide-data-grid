# vite-gdg

A minimal Vite + React 19 harness that consumes `@glideapps/glide-data-grid`
**as source** through a workspace symlink — the embeddability contract for
using the grid in a source-compiling monorepo (e.g. pnpm + Turborepo + Vite).

## What it verifies

- `exports` in the grid packages' manifests resolve to `./src/index.ts` via
  the `source`/`import` conditions, so no dist build is needed.
- `@wyw-in-js/vite` (the linaria compiler) extracts styles from the grid's
  source — including when it is linked through `node_modules/@glideapps/...`,
  which the plugin's default `node_modules` exclude would normally skip.
- `react` is deduped so the grid source and the app share one React copy.
- The built CSS contains the grid's own classes and `--gdg-*` theme variables.

## Running

```bash
# from the repo root, once:
npm install

cd test-projects
./bootstrap-projects.sh   # installs and builds all three harnesses
```

Or directly:

```bash
cd vite-gdg
npm ci
rm -rf node_modules/@glideapps/glide-data-grid
ln -s ../../../../packages/core/ node_modules/@glideapps/glide-data-grid
npm run build
npm run preview   # then open the printed URL
```

## Notes

- `legacy-peer-deps=true` in `.npmrc` — the published `@glideapps/glide-data-grid`
  on npm has stale peers; the symlinked workspace package is what actually runs.
- The wyw-in-js plugin needs explicit `@babel/preset-typescript` /
  `@babel/preset-react` babelOptions because it evaluates the grid's TS/TSX
  source directly — the dist build pipeline never parses TS with it.

#!/bin/bash

# The published @glideapps/glide-data-grid on npm carries stale peer ranges
# (e.g. marked ^4) that conflict with the harness manifests. The harnesses run
# the symlinked workspace package, not the registry copy, so peers from the
# registry metadata are irrelevant here — install with legacy-peer-deps.
export NPM_CONFIG_LEGACY_PEER_DEPS=true

set -e

for DIR in "next-gdg" "cra5-gdg"
do
    pushd $DIR
    npm ci
    rm -rf node_modules/@glideapps/glide-data-grid
    ln -s ../../../../packages/core/ node_modules/@glideapps/glide-data-grid
    popd
done

# The Vite harness is the embeddability contract: it consumes the grid packages
# as source through the workspace symlink, so its build is verified here.
pushd vite-gdg
npm ci
rm -rf node_modules/@glideapps/glide-data-grid
ln -s ../../../../packages/core/ node_modules/@glideapps/glide-data-grid
npm run build
popd
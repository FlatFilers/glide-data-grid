import react from "@vitejs/plugin-react";
import wyw from "@wyw-in-js/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        react(),
        wyw({
            // The grid package is consumed as source through a workspace symlink,
            // so modules can appear under either the link path or the real path.
            // The plugin's default exclude drops node_modules-style paths; these
            // include patterns re-admit the grid packages on both forms.
            include: [
                "**/node_modules/@glideapps/**",
                "**/packages/core/src/**",
                "**/packages/cells/src/**",
                "**/packages/source/src/**",
                // the harness's own linaria-styled example
                "**/vite-gdg/src/**",
            ],
            // wyw evaluates the grid's imported modules with its own babel, which
            // does not parse TypeScript or JSX by default — the dist build never
            // hits this (it compiles TS first), but source consumption does.
            babelOptions: {
                presets: ["@babel/preset-typescript", "@babel/preset-react"],
            },
        }),
    ],
    resolve: {
        // Pick the packages' "source" export condition so the workspace
        // symlink always resolves to ./src/index.ts, never to dist.
        conditions: ["module", "browser", "import", "source"],
        // Source-consumed grid code resolves react from the repo root's hoisted
        // node_modules; without dedupe the harness bundles a second React copy
        // and hooks throw "Cannot read properties of null (reading 'useMemo')".
        dedupe: ["react", "react-dom"],
    },
});

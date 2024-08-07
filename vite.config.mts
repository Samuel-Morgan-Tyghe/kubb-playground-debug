/* eslint-disable import/no-default-export */
/// <reference types="vite-plugin-svgr/client" />

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig as defineViteConfig, loadEnv } from "vite";
import pluginChecker from "vite-plugin-checker";
import deadFile from "vite-plugin-deadfile";
import dts from "vite-plugin-dts";
import dynamicImport from "vite-plugin-dynamic-import";
import tsconfigPaths from "vite-tsconfig-paths";
// Load environment variables
const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd());
process.env = { ...process.env, ...env }; // Merge loaded variables into process.env

const viteConfig = defineViteConfig({
  assetsInclude: ["**/*.svg"],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "./src/"),
      formats: ["es"],
    },
    minify: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@tanstack/react-query",
        "react-router-dom",
        "react-router",
        "js-cookie",
        "react-gtm-module",
        "msw",
        "msw/node",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    deadFile({
      exclude: ["gen/**", /\.md$/i, /\.stories/i, /\.test/i],
      root: "src",
    }),
    dts({ rollupTypes: false }),
    pluginChecker({ overlay: false, typescript: true }),
    dynamicImport(), // enabled to support dynamic imports (usage => Dynamic Theme Svg)
    react(), // Enables fast-refresh for React and supports JSX.
    tsconfigPaths(), // Automatically resolves TypeScript path aliases.
  ],
});

export default viteConfig;

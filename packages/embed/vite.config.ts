import { resolve } from "node:path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: { embed: resolve(__dirname, "src/main.ts") },
      name: "B2BFeedbackWidget",
      fileName: "embed",
      formats: ["umd"],
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
    minify: "terser",
    target: "es2015",
  },
});

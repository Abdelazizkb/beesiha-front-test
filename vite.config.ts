import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import sass from "sass";
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});

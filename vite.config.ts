/// <reference types="vitest" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: [
        "*.config.{js,ts}",
        ".eslintrc.cjs",
        "src/types/**",
        "src/vite-env.d.ts",
      ],
    },
  },
})

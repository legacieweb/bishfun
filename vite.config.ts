import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@brand": resolve(__dirname, "src/config/brand.ts"),
      "@data": resolve(__dirname, "src/data"),
      "@integrations": resolve(__dirname, "src/integrations"),
      "@lib": resolve(__dirname, "src/lib"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@types": resolve(__dirname, "src/types"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    target: "es2022",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-router-dom")) return "router";
          if (id.includes("node_modules/react-helmet-async")) return "helmet";
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    open: true,
  },
});

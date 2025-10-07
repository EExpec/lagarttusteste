import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/lagarttusteste/", // necessário para GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // sem componentTagger
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
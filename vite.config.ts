import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Bobbygrdn Portfolio',
        short_name: 'Portfolio',
        start_url: '/portfolio/',
        display: 'standalone',
        background_color: '#09090b',
        theme_color: '#38bdf8',
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/portfolio/',
});

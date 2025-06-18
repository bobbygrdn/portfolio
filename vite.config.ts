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
        icons: [
          { src: 'icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
          { src: 'icons/icon-70x70.png', sizes: '70x70', type: 'image/png' },
          { src: 'icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
          { src: 'icons/icon-76x76.png', sizes: '76x76', type: 'image/png' },
          { src: 'icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
          { src: 'icons/icon-120x120.png', sizes: '120x120', type: 'image/png' },
          { src: 'icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icons/icon-150x150.png', sizes: '150x150', type: 'image/png' },
          { src: 'icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
          { src: 'icons/icon-167x167.png', sizes: '167x167', type: 'image/png' },
          { src: 'icons/icon-180x180.png', sizes: '180x180', type: 'image/png' },
          { src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-310x310.png', sizes: '310x310', type: 'image/png' },
          { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
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

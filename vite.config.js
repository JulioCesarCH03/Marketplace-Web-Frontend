// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // ⚠️ ELIMINA ESTO O COMÉNTALO
    // proxy: {
    //   '/api': {
    //     target: 'https://scraper-alquileres-backend.onrender.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
})
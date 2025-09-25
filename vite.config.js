// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puerto típico de Vite (puedes cambiarlo a 3000 si prefieres)
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'https://marketplace-web-backe.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
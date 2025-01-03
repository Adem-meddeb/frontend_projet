import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Dossier de sortie pour Vercel
  },
  server: {
    proxy: {
      '/api':'https://adem-445322.nw.r.appspot.com'
    }
  }
})

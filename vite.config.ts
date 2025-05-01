import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-portifile/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
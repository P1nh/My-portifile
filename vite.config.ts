import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Para GitHub Pages, o mais simples é usar caminhos relativos:
  base: './',
  plugins: [react()],
})
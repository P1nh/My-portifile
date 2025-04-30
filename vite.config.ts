import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',               // caminhos relativos
  plugins: [react()],
})
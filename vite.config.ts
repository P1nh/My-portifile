import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// substitua "meu-portfolio" pelo slug exato do seu repo no GitHub
export default defineConfig({
  base: '/My-portifile/',
  plugins: [react()],
})

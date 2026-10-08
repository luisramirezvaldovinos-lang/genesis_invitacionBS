import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // Relative assets make the build portable on GitHub Pages project URLs.
  base: './',
})

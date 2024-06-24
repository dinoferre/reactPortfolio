import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://dinoferre.github.io/portfolio-react-2024/dist',
  plugins: [react()],
})

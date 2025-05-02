import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@image-assets': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@css': path.resolve(__dirname,'src/assets/css')
    }
  }
})

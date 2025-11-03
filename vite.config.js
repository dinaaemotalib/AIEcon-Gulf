import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),        // ✅ you forgot this earlier
    tailwindcss(),  // ✅ keep Tailwind working
  ],
  base: './',       // ✅ ensures correct paths for Hostinger
  build: {
    outDir: 'dist', // ✅ output folder for build
  },
})

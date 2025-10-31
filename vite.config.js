import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
 defineConfig({
  plugins: [react()],
});

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
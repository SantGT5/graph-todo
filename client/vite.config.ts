/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ babel: { babelrc: true } })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.tsx',
    css: false,
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
    hmr: {
      clientPort: 5173,
      host: '172.22.0.5',
    },
  },
  preview: {
    port: 5173,
  },
})

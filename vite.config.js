import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html',
    },
  },
  server: {
    open: true,
    port: 5173,
  }
});
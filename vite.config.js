import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures correct asset paths on Vercel
  build: {
    outDir: 'dist',
  },
  server: {
    open: true, // Opens browser when running `vite`
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Shorter imports
    },
  },
});

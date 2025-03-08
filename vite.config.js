import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // Import TailwindCSS plugin
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()], // Ensure Tailwind works
    },
  },
  base: './', // Fix asset paths on Vercel
  build: {
    outDir: 'dist',
  },
  server: {
    open: true, // Open browser on dev
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Shorter imports
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Build output goes directly into server/public (commented out for Vercel)
  // build: {
  //   outDir: path.resolve(__dirname, '../server/public'),
  //   emptyOutDir: true,
  // },
  server: {
    port: 5173,
    // Dev proxy — forwards /api calls to Express
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});

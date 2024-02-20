import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    assetsDir: 'assets', 
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
});

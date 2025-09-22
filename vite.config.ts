import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: false,
  },
  server: {
    fs: {
      strict: false,
    },
  },
  define: {
    'process.env.NODE_ENV': '"development"',
  },
  esbuild: {
    sourcemap: false,
  },
  css: {
    devSourcemap: false,
  },
  resolve: {
    alias: {
      'lucide-react': 'lucide-react/dist/esm/icons',
    },
  },
});

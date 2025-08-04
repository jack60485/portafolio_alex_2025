import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      // Esto redirige las llamadas a /api al backend de Django
      '/api': 'http://localhost:8000',
      '/media': 'http://localhost:8000', // para servir imágenes y archivos
    },
  },
});

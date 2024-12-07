import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', 
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://urbansquare-server.onrender.com',
        secure: false,
      },
    },
  },

  plugins: [react()],
});

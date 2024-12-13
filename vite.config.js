import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', 
     rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], 
        },
      },
   },
  },
  server: {
   proxy: {
    '/api': {
      target: 'https://urbansquare-server.onrender.com',
      changeOrigin: true, // Adjust the host header to match the target
      secure: false,      // Disable SSL verification if needed
      rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix if necessary
    },
}

  },

  plugins: [react()],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Or your preferred frontend port
    proxy: {
      // Proxy API requests to the backend
      '/api': {
        target: 'http://localhost:5001', // Your backend server
        changeOrigin: true, // Important for virtual hosted sites
        // rewrite: (path) => path.replace(/^\/api/, '') // Optional: if your backend doesn't have /api prefix
      },
      // Proxy SCORM content requests to the backend
      '/scorm_content': {
        target: 'http://localhost:5001', // Your backend server
        changeOrigin: true,
      }
    }
  }
});
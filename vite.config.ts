import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Specifically inject the API_KEY to satisfy the client-side requirement
    // without breaking the global 'process' object for other libraries.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ""),
  }
});
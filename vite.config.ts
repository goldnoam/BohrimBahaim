import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/BohrimBahaim/', // This is the crucial part!
  plugins: [react()],
})

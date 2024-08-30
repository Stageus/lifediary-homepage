import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: [
      {find: "@app", replacement: path.resolve(__dirname, "src/1_app")},
      {find: "@pages", replacement: path.resolve(__dirname, "src/2_pages")},
      {find: "@widgets", replacement: path.resolve(__dirname, "src/3_widgets")},
      {find: "@features", replacement: path.resolve(__dirname, "src/4_features")},
      {find: "@shared", replacement: path.resolve(__dirname, "src/5_shared")},
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  }
})

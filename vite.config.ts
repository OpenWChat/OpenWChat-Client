import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server:{
    host:true,
    port:3333
  },
  preview: {
    port: 3333,
    strictPort: true,
    host:true
  },
  plugins: [react(),tsconfigPaths()],
})
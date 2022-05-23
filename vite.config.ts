import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

export default defineConfig({
  plugins: [react()],
  base: '/portfolio',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  assetsInclude: ['**/*.gltf', '**/*.woff2'],
})

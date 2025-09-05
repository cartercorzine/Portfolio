import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'   // <-- import the plugin

export default defineConfig({
  base: '/Portfolio/',                      // keep your repo name here
  plugins: [react(), tailwind()],           // <-- call the plugin
})

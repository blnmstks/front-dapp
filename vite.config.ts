import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// чтобы преодолеть зависимость библиотеки ton от Nodejs Buffer, который недоступен в браузере.
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: '/',
})

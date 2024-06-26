import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from "@vitejs/plugin-basic-ssl";


// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
    define: {
        global: {},
    },
    server: {
        https: true,
    },

    plugins: [react(), basicSsl()],
})

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/react-three-carol/",
    test: {
        global: true
    },
    plugins: [react()]
})

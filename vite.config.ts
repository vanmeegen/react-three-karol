import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/react-three-karol/",
    test: {
        global: true
    },
    plugins: [react()]
})

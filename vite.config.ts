/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: "/react-three-karol/",
    test: {
        global: true
    },
    plugins: [react()]
})

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const PxRem = require('postcss-pxtorem')


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [
                require('autoprefixer')(),
                PxRem({
                    rootValue: 75,
                    propList: ['*']
                }),
            ]
        }
    }
})

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import {viteMockServe} from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
    return {
        plugins: [vue(),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]',
            }),
            viteMockServe({
                mockPath: 'mock',
                enable: command === 'serve'  // 保证项目开发阶段可以使用 mock 接口
            })
        ],
        resolve: {
            alias: {
                "@": path.resolve("./src")
            }
        },
        //scss全局变量配置
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "./src/styles/variable.scss";'
                }
            }
        }
    }
})

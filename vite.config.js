import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteImagemin({
    gifsicle: {
      optimizationLevel: 9,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 9.5,
    },
    mozjpeg: {
      quality: 97,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  }),],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './',
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import 'src/style/_var.sass'
        `, // 添加公共样式
      },
    },
  },
});

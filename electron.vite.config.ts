import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import UnoCSS from 'unocss/vite'
// import { VueRouterAutoImports } from 'unplugin-vue-router'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    root: 'src/renderer',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@src': resolve('src')
      }
    },
    plugins: [
      VueRouter({
        extensions: ['.vue'],
        routesFolder: ['src/renderer/src/pages']
      }),
      vue(),
      UnoCSS(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          // VueRouterAutoImports,
          '@vueuse/core',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
          }
        ],
        dirs: ['src/composables', 'src/store'],
        dts: 'src/auto-imports.d.ts'
      }),
      Components({
        dirs: ['src/components'],
        dts: 'src/components.d.ts',
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView']
          }
        ],
        resolvers: [PrimeVueResolver()]
      })
    ]
  }
})

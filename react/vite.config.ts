import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      dts: 'src/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          extension: 'jsx'
        })
      ]
    }),
    Icons({
      compiler: 'jsx' // or 'solid'
    })
  ]
})

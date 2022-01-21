---
layout: left-right
---

### Vue vite config

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Icons()
  ]
})
```

::right::

### React vite config

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/
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
      compiler: 'jsx'
    })
  ]
})
```
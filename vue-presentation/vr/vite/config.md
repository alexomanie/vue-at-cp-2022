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

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

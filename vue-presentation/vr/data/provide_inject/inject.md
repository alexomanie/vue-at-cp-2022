---
layout: left-right
---

### Vue provide/inject
```ts
// Movies.vue
<script lang="ts" setup>
import { inject, ref } from 'vue';

const userContext = inject<any>(UserContext)
</script>
```

::right::

### React context provider api

```ts
// Movies.tsx
export const Movies = () => {
  const userContext = useContext(UserContext)

  return (...)
}

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

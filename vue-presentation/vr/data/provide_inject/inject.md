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
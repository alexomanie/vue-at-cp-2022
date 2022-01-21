---
layout: left-right
---

### Vue events
```vue {10}
// Header.vue
<script setup lang="ts">
const emit = defineEmits<{
    (e: 'onImageClick'): void
}>();
</script>
<template>
    <div class="flex items-center justify-center h-full">
        <img
            @click="emit('onImageClick')"
            class="w-12 h-12"
            src="../assets/logo.png"
            alt="vue logo"
        />
        <span>Welcome to the vue movie app</span>
    </div>
</template>
```

::right::

### React events

```ts {9}
// Header.tsx
import Logo from '../assets/logo.svg'

export const Header = 
  ({ onImageClick }: { onImageClick: () => void }) => {
  return (
    <div className={`flex items-center justify-center`}>
      <img 
        onClick={onImageClick} 
        className={`w-20 h-20`} 
        src={Logo} 
        alt="react logo"
      />
      <span>Welcome to the react movie app</span>
    </div>
  )
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

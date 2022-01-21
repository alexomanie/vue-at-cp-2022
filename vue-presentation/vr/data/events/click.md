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
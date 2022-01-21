<!--
  Usage:

```md
---
layout: left-right
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

-->

<script setup lang="ts">
const props = defineProps({
    class: {
        type: String,
    },
})
</script>

<template>
    <div class="slidev-layout p-2 text-[8px] left-right w-full h-full grid grid-cols-2 gap-5">
        <div class="col-left" :class="props.class">
            <slot />
        </div>
        <div class="col-right" :class="props.class">
            <slot name="right" />
        </div>
    </div>
</template>
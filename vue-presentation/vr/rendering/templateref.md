---
layout: left-right
---

### Vue rendering basics

```vue {3,4,11,18}
// Movies.vue
<script lang="ts" setup>
const searchBox = ref<HTMLInputElement | null>(null)
const focusInput = () => searchBox.value!.select()
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="py-4 flex flex-col gap-3">
            <input
                ref="searchBox"
                v-model="searchText"
                type="text"
                class="p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg"
                placeholder="search movies and tv shows..."
            />
            <button
                @click="focusInput"
                class="bg-gray-600 border-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 border rounded-lg"
            >Focus the search</button>
            ...
        </div>
        ...
    </div>
</template>
```

::right::

### React rendering basics

```jsx {3,4,10,18}
 // Movies.tsx
export const Movies = () => {
  const searchBox = useRef<HTMLInputElement | null>(null)
  const focusInput = () => searchBox.current!.select()

  return (
    <div className={`flex flex-col items-center mt-5`}>
      <div className="py-4 flex flex-col gap-3">
        <input
          ref={searchBox}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg"
          placeholder="search movies and tv shows..."
        />
        <button 
          onClick={focusInput} 
          className="bg-gray-600 border-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 border rounded-lg">
          Focus the search</button>
        ...
      </div>
       ...
    </div>
  )}
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

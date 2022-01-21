---
layout: left-right
---

### Vue props

```vue
// MovieCard.vue
<script lang="ts" setup>
import { TMDB } from '../models/movie'

defineProps<{
    movie: TMDB.Movie
}>()
</script>
<template>...</template>

// Movies.vue
<MovieCard :movie="m" />
```

::right::

### React props

```ts
// MovieCard.tsx
import { TMDB } from '../models/movie'

export const MovieCard = ({ movie }: { movie: TMDB.Movie }) 
 => ( --- JSX --- )





// Movies.tsx
<MovieCard movie={m} />
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

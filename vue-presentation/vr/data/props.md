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

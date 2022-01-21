---
layout: left-right
---

### Vue routing

```vue {8-15}
// Movies.vue
<template>
    <div class="flex flex-col items-center">
        <div class="py-4 flex flex-col gap-3">
          ...
        </div>
        <div class="flex gap-6 mt-5 flex-wrap mx-20">
            <router-link v-for="m in movies"
                :key="m.id"
                :to="{
                    name: 'MovieDetail',
                    params: { movieId: m.id },
                }">
                <MovieCard :movie="m" />
            </router-link>
        </div>
    </div>
</template>
```

```ts
// MovieDetail.vue
<script lang="ts" setup>
import { useRoute } from 'vue-router';

const { params: { movieId } } = useRoute()
</script>
```

::right::

### React routing

```jsx {11-13}
 // Movies.tsx
export const Movies = () => {
  ...
  return (
    <div className={`flex flex-col items-center mt-5`}>
      <div className="py-4 flex flex-col gap-3">
        ...
      </div>
      <div className="flex gap-6 mt-10 flex-wrap px-20">
        {movies.map((m: TMDB.Movie) => (
          <Link key={m.id} to={`/${m.id}`}>
            <MovieCard movie={m} />
          </Link>
        ))}
      </div>
    </div>
  )
}
```

```ts
// MovieDetail.tsx
export const MovieDetail = () => {
  const { movieId } = useParams()

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

---
layout: left-right
---

### Vue rendering basics

```vue {16,17}
// Movies.vue
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
            <span v-if="resultCount === 1">Result: {{ resultCount }}</span>
            <span v-else="resultCount === 1">Results: {{ resultCount }}</span>
        </div>
        <div class="flex gap-6 mt-5 flex-wrap mx-20">
            <router-link v-for="m in movies" :key="m.id"
                :to="{ name: 'MovieDetail', params: { movieId: m.id } }">
                <MovieCard :movie="m" />
            </router-link>
        </div>
    </div>
</template>
```

::right::

### React rendering basics
```jsx {16}
 // Movies.tsx
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
        <button onClick={focusInput} className="bg-gray-600 border-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 border rounded-lg">
          Focus the search
        </button>
        {resultCount === 1 ? <span>Result: {resultCount}</span> : <span>Results: {resultCount}</span>}
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
```
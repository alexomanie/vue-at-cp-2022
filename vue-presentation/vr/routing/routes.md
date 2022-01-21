---
layout: left-right
---

### Vue routing

```vue {5}
// App.vue
<template>
  <div class="app">
    <main>
      <router-view />
    </main>
  </div>
</template>
```

```ts
// routes
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Movies
  },
  {
    name: 'MovieDetail',
    path: '/:movieId',
    component: MovieDetail
  }
]
```

::right::

### React routing

```jsx {12-15}
 // Movies.tsx
export const App = () => {
  const onImageClick = () => alert('you clicked the header image!')

  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <header>
          <Header onImageClick={onImageClick} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path=":movieId" element={<MovieDetail />}></Route>
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
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

---
layout: left-right
---

### Vue state & fetch
```ts {6-8}
// useMovies.ts
export function useMovies() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  const movies = ref<TMDB.Movie[]>([])
  const searchText = ref<string>('')
  const resultCount = computed<number>(
    () => movies.value.length
  )
  const fetchMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchText.value}`)
    const json: TMDB.Movies = await res.json()
    json.results.map((m) => {
      m.backdrop_image = `https://image.tmdb.org/t/p/w300/${m.backdrop_path}`
      m.poster_image = `https://image.tmdb.org/t/p/w300/${m.poster_path}`
    })
    movies.value = json.results
  }
  watch([searchText], () => {
    if (searchText.value !== '') {
      fetchMovies()
    }
  })
  return { movies, searchText, resultCount }
}
```

::right::

### React state & fetch
```ts {6-8}
// useMovies.ts
export function useMovies() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  const [movies, setMovies] = useState<TMDB.Movie[]>([])
  const [searchText, setSearchText] = useState<string>('')
  const resultCount = useMemo<number>(
    () => movies.length, [movies]
  )
  const fetchMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchText}`)
    const json: TMDB.Movies = await res.json()
    json.results.map((m) => {
      m.backdrop_image = `https://image.tmdb.org/t/p/w300/${m.backdrop_path}`
      m.poster_image = `https://image.tmdb.org/t/p/w300/${m.poster_path}`
    })
    setMovies(json.results)
  }
  useEffect(() => {
    if (searchText !== '') {
      fetchMovies()
    }
  }, [searchText])
  return { movies, searchText, setSearchText, resultCount }
}
```
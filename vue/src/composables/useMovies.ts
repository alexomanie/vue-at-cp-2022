import { Ref, ref, watch } from 'vue'
import { TMDB } from '../../models/movie'

export function useMovies() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  const movies: Ref<TMDB.Movie[]> = ref([])
  const searchText: Ref<string> = ref('')

  const fetchMovies = async () => {
    // const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText.value}`)
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

  return { movies, searchText }
}

import { Ref, ref, watch } from 'vue'
import { Movie } from '../../models/movie'

export function useMovies() {
  const movies: Ref<Movie[]> = ref([])
  const searchText: Ref<string> = ref('')

  const fetchMovies = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText.value}`)
    const json = await res.json()
    console.log(json)
    movies.value = json
  }

  watch([searchText], () => {
    fetchMovies()
  })

  return { movies, searchText }
}

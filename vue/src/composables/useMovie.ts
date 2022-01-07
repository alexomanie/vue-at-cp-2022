import { ref } from 'vue'
import { TMDB } from '../models/movie'

export function useMovie() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  const movie = ref<TMDB.MovieDetail | null>(null)

  const fetchMovie = async (movieId: number) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
    const json: TMDB.MovieDetail = await res.json()

    json.backdrop_image = `https://image.tmdb.org/t/p/w300/${json.backdrop_path}`
    json.poster_image = `https://image.tmdb.org/t/p/w300/${json.poster_path}`

    movie.value = json
  }

  return { movie, fetchMovie }
}

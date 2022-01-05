import { useEffect, useMemo, useState } from 'react'
import { TMDB } from '../models/movie'

export function useMovies() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  const [movies, setMovies] = useState<TMDB.Movie[]>([])
  const [searchText, setSearchText] = useState<string>('')
  const resultCount = useMemo<number>(() => movies.length, [movies])

  const fetchMovies = async () => {
    // const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
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

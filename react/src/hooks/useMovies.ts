import { useEffect, useState } from 'react'
import { Movie } from '../models/movie'

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchText, setSearchText] = useState<string>('')

  const fetchMovies = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    const json = await res.json()
    console.log(json)
    setMovies(json)
  }

  useEffect(() => {
    fetchMovies()
  }, [searchText])

  return { movies, searchText, setSearchText }
}

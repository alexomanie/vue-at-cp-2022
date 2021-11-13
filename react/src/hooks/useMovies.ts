import { useEffect, useState } from 'react'

export function useMovies() {
  const [movies, setMovies] = useState<any[]>([])
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
      const json = await res.json()
      console.log(json)
      setMovies(json)
    }

    fetchMovies()
  }, [searchText])

  return { movies, searchText, setSearchText }
}

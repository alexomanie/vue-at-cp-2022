import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useMovies } from '../hooks/useMovies'
import { TMDB } from '../models/movie'
import { UserContext } from '../models/user'
import { MovieCard } from './MovieCard'

export const Movies = () => {
  const searchBox = useRef<HTMLInputElement | null>(null)
  const { movies, searchText, setSearchText, resultCount } = useMovies()

  const focusInput = () => searchBox.current!.select()

  const userContext = useContext(UserContext)

  useEffect(() => {
    console.log('Movies mounted!')
    console.log('UserContext is: ', userContext)
    return () => {
      console.log('Movies unmounted!')
    }
  }, [])

  return (
    <div className={`flex flex-col items-center`}>
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
      <div className="flex gap-6 mt-5 flex-wrap px-20">
        {movies.map((m: TMDB.Movie) => (
          <Link key={m.id} to={`/${m.id}`}>
            <MovieCard movie={m} />
          </Link>
        ))}
      </div>
    </div>
  )
}

import { useMovies } from '../hooks/useMovies'
import { TMDB } from '../models/movie'
import { MovieCard } from './MovieCard'

export const Movies = () => {
  const { movies, searchText, setSearchText, resultCount } = useMovies()

  return (
    <div className={`flex flex-col items-center mt-5`}>
      <div className="py-4 flex flex-col">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg"
          placeholder="search movies and tv shows..."
        />
        <span className="mt-1">{resultCount}</span>
      </div>
      <div className="flex gap-6 mt-10 flex-wrap px-20">
        {movies.map((m: TMDB.Movie) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  )
}

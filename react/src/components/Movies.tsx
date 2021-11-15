import { useMovies } from '../hooks/useMovies'
import { Movie } from '../models/movie'
import { MovieCard } from './MovieCard'

export const Movies = () => {
  const { movies, searchText, setSearchText } = useMovies()

  return (
    <div className={`flex flex-col items-center mt-5`}>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        className={`p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg`}
        placeholder="search movies and tv shows..."
      />
      <div className="flex gap-6 mt-10 flex-wrap mx-20">
        {movies.map((m: Movie) => (
          <MovieCard key={m.show.id} movie={m} />
        ))}
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useMovies } from '../hooks/useMovies'

export const Movies = () => {
  const { movies, searchText, setSearchText } = useMovies()

  return (
    <div className={`flex flex-col items-center justify-center mt-5`}>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        className={`p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg`}
        placeholder="search movies and tv shows..."
      />
      {movies.map((m) => (
        <div key={m.show.id}>
          <span>{m.show.name}</span>
        </div>
      ))}
    </div>
  )
}

import { Movie } from '../models/movie'

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="h-120 w-60 shadow-xl flex flex-col bg-gray-800 rounded-b-xl">
      <img className="w-full h-90" src={movie.show.image?.medium} alt="image" />
      <div className="p-3 text-sm flex-1">
        <div className="flex justify-between h-10 text-gray-300 font-semibold">
          <span>{movie.show.name}</span>
          <span>{movie.show.rating.average}/10</span>
        </div>
        <div className="flex justify-between text-xs mt-3 text-gray-400">
          <span className="uppercase w-[60%]">Premiered</span>
          <span className="uppercase w-[40%]">Running Time</span>
        </div>
        <div className="flex justify-between text-xs mt-2 text-gray-300 font-semibold">
          <span className="uppercase w-[60%]">{movie.show.premiered}</span>
          <span className="uppercase w-[40%]">{movie.show.runtime}</span>
        </div>
      </div>
    </div>
  )
}

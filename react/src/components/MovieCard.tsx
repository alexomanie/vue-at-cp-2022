import { TMDB } from '../models/movie'

export const MovieCard = ({ movie }: { movie: TMDB.Movie }) => (
  <div className="h-120 w-60 shadow-xl flex flex-col bg-gray-800 rounded-b-xl relative group">
    {movie.poster_path ? <img className="w-full h-90" src={movie.poster_image} alt="image" /> : <div className="w-full h-90" />}
    <div className="p-3 text-sm flex-1">
      <div className="flex justify-between h-10 text-gray-300 font-semibold">
        <span>{movie.name ?? movie.title}</span>
        <span>{movie.vote_average}/10</span>
      </div>
      <div className="flex justify-between text-xs mt-3 text-gray-400">
        <span className="uppercase w-[60%]">Premiered</span>
        <span className="uppercase w-[40%]">Type</span>
      </div>
      <div className="flex justify-between text-xs mt-2 text-gray-300 font-semibold">
        <span className="uppercase w-[60%]">{movie.release_date ?? movie.first_air_date}</span>
        <span className="uppercase w-[40%]">{movie.media_type}</span>
      </div>
    </div>
    <div className="absolute bottom-0 bg-gray-700 left-0 h-0 rounded-b-xl group-hover:h-[50%] max-h-[50%] transition-all duration-500 box-border">
      <div className="pt-4 px-7 h-full overflow-hidden">{movie.overview}</div>
    </div>
  </div>
)

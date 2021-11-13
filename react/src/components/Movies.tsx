import { Link } from 'react-router-dom'

export const Movies = () => {
  return (
    <div className={`flex items-center justify-center mt-5`}>
      <input type="text" className={`p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg`} placeholder="search movies and tv shows..." />
      <Link to={'/movie4711'}>Go to movie detail</Link>
    </div>
  )
}

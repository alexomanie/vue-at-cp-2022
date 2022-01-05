import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMovie } from '../hooks/useMovie'

export const MovieDetail = () => {
  const { movieId } = useParams()
  const { movie, fetchMovie } = useMovie()

  useEffect(() => {
    fetchMovie(+movieId!)
  }, [])

  return (
    <>
      <div>{movie?.id}</div>
      <div>{movie?.title}</div>
      <div>{movie?.release_date}</div>
    </>
  )
}

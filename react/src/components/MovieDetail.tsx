import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
  const { movieId } = useParams()
  return <div>{movieId}</div>
}

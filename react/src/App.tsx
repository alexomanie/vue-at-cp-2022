import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { MovieDetail } from './components/MovieDetail'
import { Movies } from './components/Movies'
import { user, UserContext } from './models/user'

export const App = () => {
  const onImageClick = () => alert('you clicked the header image!')

  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <header>
          <Header onImageClick={onImageClick} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path=":movieId" element={<MovieDetail />}></Route>
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
  )
}

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { MovieDetail } from './components/MovieDetail'
import { Movies } from './components/Movies'

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path=":movieId" element={<MovieDetail />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App

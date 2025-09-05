import { useEffect } from 'react'
import './App.css'
import { fetchMovies } from './Api/api';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './Pages/MovieDetails';
import Home from './Pages/Home';

function App() {
  useEffect(() => {
    fetchMovies('batman').then((res) => {
      console.log(res);
    })
  },[])
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App

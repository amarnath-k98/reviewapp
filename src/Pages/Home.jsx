import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../Components/SearchBar";
import FilterPanel from "../Components/FilterPanel";
import MovieCard from "../Components/MovieCard";
import { fetchMovies } from "../Store/movieSlices";




const Home = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies.list);

  return (
    <div className="w-full min-h-screen p-6  mx-auto flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl text-gray-400 font-bold mb-4">
        🎬 Movie Searching
      </h1>
      <SearchBar />
      <FilterPanel />
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p className="text-gray-500">
            No movies found matching your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;

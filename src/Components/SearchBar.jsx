import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setFilters } from "../Store/movieSlices"; 
import { useState, useEffect } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.movies.filters);
  const [term, setTerm] = useState("");

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const trimmed = term.trim();

      if (trimmed.length >= 2) {
        dispatch(fetchMovies(trimmed)).then(() => {
          dispatch(setFilters(filters));
        });
      } else if (trimmed.length === 0) {
        dispatch(fetchMovies()).then(() => {
          dispatch(setFilters(filters)); 
        });
      }
    }, 500); 

    return () => clearTimeout(timeout);
  }, [term, dispatch, filters]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="flex w-full gap-2 mb-4">
      <input
        aria-label="Search movies by title"
        value={term}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        placeholder="Search movies..."
      />
    </div>
  );
};

export default SearchBar;

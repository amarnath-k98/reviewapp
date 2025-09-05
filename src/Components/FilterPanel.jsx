import { useDispatch } from "react-redux";
import { useState } from "react";
import { setFilters } from "../Store/movieSlices";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(0);

  const handleApplyFilters = () => {
    dispatch(setFilters({ genre, year, rating }));
  };
  

  return (
    <div className="flex flex-col w-full sm:flex-row gap-4 items-center mt-4">
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-full sm:w-1/3"
      >
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Horror">Horror</option>
      </select>

      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year (e.g. 2020)"
        className="border p-2 rounded w-full sm:w-1/3"
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-full sm:w-1/3"
      >
        <option value={0}>All Ratings</option>
        <option value={1}>1+</option>
        <option value={2}>2+</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
        <option value={5}>5</option>
      </select>

      <button
        aria-label="Apply selected filters"
        onClick={handleApplyFilters}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;

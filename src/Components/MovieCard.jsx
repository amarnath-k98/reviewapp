import { useNavigate } from "react-router-dom";
import RatingStars from "./RatingStars";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-800 shadow-lg shadow-cyan-700 rounded p-4 hover:scale-105 transition cursor-pointer"
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "./src/assets/movie poster.jpg"
        }
        alt={movie.Title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "./src/assets/movie poster.jpg";
        }}
        className="w-full h-64 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{movie.Title}</h3>
      <p className="text-sm text-gray-600">{movie.Year}</p>
      <RatingStars rating={movie.imdbRating} />
    </div>
  );
};

export default MovieCard;

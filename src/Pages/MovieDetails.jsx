import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RatingStars from "../Components/RatingStars";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "b486026c";

    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        setMovie(res.data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-black p-6 text-center text-gray-500">
        Loading movie details...
      </div>
    );
  if (!movie || movie.Response === "False")
    return <div className="p-6 bg-black text-center text-red-500">Movie not found.</div>;

  return (
    <div className="min-h-screen bg-black text-gray-500">
      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={
              movie.Poster !== "N/A" ? movie.Poster : "/assets/movie poster.jpg"
            }
            alt={movie.Title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/movie poster.jpg";
            }}
            className="w-full md:w-1/3 rounded shadow"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 text-blue-400">
              {movie.Title}
            </h1>
            <p className="text-gray-500 text-md mb-2">
              {movie.Year} • {movie.Genre} • {movie.Runtime}
            </p>
            <p className="text-gray-400 text-lg mb-4">{movie.Plot}</p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Cast:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Released:</strong> {movie.Released}
            </p>
            <p>
              <strong>Language:</strong> {movie.Language}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </p>
            <div className="mt-4">
              <RatingStars rating={movie.imdbRating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

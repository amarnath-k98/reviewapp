import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "b486026c";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm = "iron man") => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
    );
    const basicList = res.data.Search || [];

    const detailedList = await Promise.all(
      basicList.map(async (movie) => {
        const detailRes = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
        );
        return detailRes.data;
      })
    );

    return detailedList;
  }
);


const movieSlices = createSlice({
  name: "movies",
  initialState: {
    list: [],
    originalList: [],
    selectedMovie: null,
    filters: { genre: "", year: "", rating: 0 },
  },
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;

      const { genre, year, rating } = action.payload;

      state.list = state.originalList.filter((movie) => {
        const genreMatch = genre
          ? movie.Genre?.toLowerCase().includes(genre.toLowerCase())
          : true;

        const yearMatch = year ? movie.Year === year : true;

        const ratingMatch = rating
          ? (() => {
              const normalizedRating = parseFloat(movie.imdbRating);
              return (
                !isNaN(normalizedRating) &&
                normalizedRating >= rating &&
                normalizedRating <= 5
              );
            })()
          : true;

        return genreMatch && yearMatch && ratingMatch;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.originalList = action.payload; 
      state.list = action.payload; 
    });
  },
});

export const { setSelectedMovie, setFilters } = movieSlices.actions;
const moviesReducer = movieSlices.reducer;
export default moviesReducer;

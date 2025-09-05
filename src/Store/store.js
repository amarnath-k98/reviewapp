import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlices";
import ratingsReducer from "./userRatingsSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    rating: ratingsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
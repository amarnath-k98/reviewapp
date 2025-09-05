import { createSlice } from "@reduxjs/toolkit";

const ratingsSlice = createSlice({
  name: "ratings",
  initialState: {},
  reducers: {
    setUserRating: (state, action) => {
      const { movieId, rating } = action.payload;
      state[movieId] = rating;
    },
  },
});

export const { setUserRating } = ratingsSlice.actions;
const ratingsReducer = ratingsSlice.reducer;
export default ratingsReducer;

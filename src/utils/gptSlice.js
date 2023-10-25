// import { createSlice } from "@reduxjs/toolkit";

// const gptSlice = createSlice({
//     name: "gpt",
//     initialState: {
//         showGptSearch: false,
//         gptMovies: null,
//         movieNames: null,
//         movieResult: null,

//     },
//     reducers: {
//         toggleGptSearchView: (state) => {
//             state.showGptSearch = !state.showGptSearch;
//         },
//          addGptMoviesResult: (state,action) => {
//             const {movieNames, movieResult} = action.payload
//             state.movieNames = movieNames;
//             state.movieResult = movieResult;
//          },
//     },

// });

// export const {toggleGptSearchView, addGptMoviesResult} = gptSlice.actions;

// export default gptSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResult } = gptSlice.actions;

export default gptSlice.reducer;
import { combineReducers } from "redux";
import { genreReducer } from "./genreReducer";
import { movieReducer, selectedMovieReducer } from "./movieReducer";

const reducers = combineReducers({
  allGenres: genreReducer,
  allMovies: movieReducer,
  movie: selectedMovieReducer,
});

export default reducers;

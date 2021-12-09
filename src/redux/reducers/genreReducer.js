import { ActionTypes } from "../constants/action-types";

const initialState = {
  genre: [],
};
export const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_GENRES:
      return { ...state, genre: payload };

    default:
      return state;
  }
};

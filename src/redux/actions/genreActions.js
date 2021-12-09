import { ActionTypes } from "../constants/action-types";

export const setGenres = (genres) => {
  return {
    type: ActionTypes.SET_GENRES,
    payload: genres,
  };
};

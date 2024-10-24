import { ADD_FAVOURITE, REMOVE_FAVOURITE, SET_FAVOURITES } from "../types";

export const addFavourite = (product) => {
  return {
    type: ADD_FAVOURITE,
    payload: product,
  };
};

export const removeFavourite = (product) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: product,
  };
};

export const setFavourites = (favourites) => {
  return {
    type: SET_FAVOURITES,
    payload: favourites,
  };
};

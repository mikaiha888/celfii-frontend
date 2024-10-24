import { ADD_FAVOURITE, REMOVE_FAVOURITE, SET_FAVOURITES } from "../types";

const initialState = [];

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, action.payload];
    case REMOVE_FAVOURITE:
      return state.filter((product) => product.id !== action.payload.id);
    case SET_FAVOURITES:
      return action.payload;
    default:
      return state;
  }
};

export default favouritesReducer;

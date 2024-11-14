import {
  CART_FAVS_REQUEST,
  CART_FAVS_SUCCESS,
  CART_FAVS_FAILURE,
  UPDATE_CART_FAV
} from "../types";

const initialState = {
  cart: [],
  favourites: [],
  loading: false,
  error: null,
};

const cartFavsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_FAVS_REQUEST:
      return { ...state, loading: true, error: null };

    case CART_FAVS_SUCCESS:
      return {
        ...state,
        cart: action.payload.cart,
        favourites: action.payload.favourites,
        loading: false,
        error: null,
      };

    case CART_FAVS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_CART_FAV:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default cartFavsReducer;

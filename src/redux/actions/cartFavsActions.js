import { CART_FAVS_REQUEST, CART_FAVS_SUCCESS, CART_FAVS_FAILURE, UPDATE_CART_FAV } from "../types";

import {
  loadFromLocalStorage,
  addToArrayInLocalStorage,
  removeFromArrayInLocalStorage,
  updateArrayInLocalStorage,
  removeFromLocalStorage,
} from "../../helpers";

export const addCartFavs = (key, product) => (dispatch) => {
  try {
    dispatch({ type: CART_FAVS_REQUEST });
    const updatedKey = addToArrayInLocalStorage(key, product);

    if (updatedKey) {
      dispatch({
        type: UPDATE_CART_FAV,
        payload: { [key]: updatedKey },
      });
    }
  } catch (error) {
    dispatch({
      type: CART_FAVS_FAILURE,
      payload: error.message,
    });
  }
};

export const removeCartFavs = (key, product) => (dispatch) => {
  try {
    dispatch({ type: CART_FAVS_REQUEST });
    const updatedKey = removeFromArrayInLocalStorage(key, product);
    if (updatedKey) {
      dispatch({
        type: UPDATE_CART_FAV,
        payload: { [key]: updatedKey },
      });
    }
  } catch (error) {
    dispatch({
      type: CART_FAVS_FAILURE,
      payload: error.message,
    });
  }
};

export const clearCartFavs = (key) => (dispatch) => {
  try {
    dispatch({ type: CART_FAVS_REQUEST });
    removeFromLocalStorage(key);
    dispatch({
      type: UPDATE_CART_FAV,
      payload: { [key]: [] },
    });
  } catch (error) {
    dispatch({
      type: CART_FAVS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadCartFavs = () => (dispatch) => {
  try {
    dispatch({ type: CART_FAVS_REQUEST });
    const cart = loadFromLocalStorage("cart");
    const favourites = loadFromLocalStorage("favourites");
    dispatch({
      type: CART_FAVS_SUCCESS,
      payload: { cart, favourites },
    });
  } catch (error) {
    dispatch({
      type: CART_FAVS_FAILURE,
      payload: error.message,
    });
  }
};

export const updateCart = (key, product) => (dispatch) => {
  try {
    dispatch({ type: CART_FAVS_REQUEST });
    const updatedKey = updateArrayInLocalStorage(key, product);
    if (updatedKey) {
      dispatch({
        type: UPDATE_CART_FAV,
        payload: { cart: updatedKey },
      });
    }
  } catch (error) {
    dispatch({
      type: CART_FAVS_FAILURE,
      payload: error.message,
    });
  }
};

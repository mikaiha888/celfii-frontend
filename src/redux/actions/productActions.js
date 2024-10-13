import axios from "axios";

import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE } from "../types";

export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const { data } = await axios.post("/products", productData);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAILURE,
      payload: error.message,
    });
  }
};

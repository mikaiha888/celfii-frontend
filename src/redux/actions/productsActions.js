import axios from "axios";

import { PRODUCTS_REQUEST, PRODUCT_SUCCESS, PRODUCTS_FAILURE } from "../types";
import { uploadImages } from "./imageActions";

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await axios.post("/products", productData);
    dispatch(uploadImages(productData));
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

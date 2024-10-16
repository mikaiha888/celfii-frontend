import axios from "axios";

import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE } from "../types";
import { uploadImages } from "./imageActions";

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const { data } = await axios.post("/products", productData);
    dispatch(uploadImages(productData));
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAILURE,
      payload: error.message,
    });
  }
};

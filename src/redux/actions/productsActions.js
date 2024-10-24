import { uploadImages } from "./imagesActions";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../helpers/apiHelper";
import { PRODUCTS_REQUEST, PRODUCT_SUCCESS, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from "../types";

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await postRequest("/products", productData);
    dispatch(uploadImages(productData));
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await getRequest(`/products/${id}`);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadProducts =
  (queries = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCTS_REQUEST });
      const { data } = await getRequest("/products", queries);
      dispatch({ type: PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };

export const saveProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await putRequest(`/products/${productData.id}`, productData);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await deleteRequest(`/products/${id}`);
    dispatch(loadProducts());
    return data;
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

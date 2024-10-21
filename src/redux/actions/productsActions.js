import axios from "axios";

import { PRODUCTS_REQUEST, PRODUCT_SUCCESS, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from "../types";
import { uploadImages } from "./imagesActions";

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

export const loadProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await axios.get(`/products/${id}`);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadProducts = (data) => {
  const { page, pagination, name, category, sort } = data;
  const params = new URLSearchParams();

  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCTS_REQUEST });
      if (page) params.append("page", page);
      if (pagination) params.append("perPage", pagination);
      if (name) params.append("name", name);
      if (category) params.append("category", category);
      if (sort) params.append("sort", sort);
      const { data } = await axios.get(`/products?${params.toString()}`);
      console.log(data);

      dispatch({
        type: PRODUCTS_SUCCESS,
        payload: {
          products: data.products,
          totalItems: data.totalItems,
        }
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const saveProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await axios.put(`/products/${productData.id}`, productData);
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
    const { data } = await axios.delete(`/products/${id}`);
    dispatch(loadProducts());
    return data;
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

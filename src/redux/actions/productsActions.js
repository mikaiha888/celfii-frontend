import axios from 'axios';

import { PRODUCTS_REQUEST, PRODUCT_SUCCESS, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from '../types';
import { uploadImages } from './imagesActions';

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await axios.post('/products', productData);
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

export const loadProducts =
  (searchQuery = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCTS_REQUEST });
      const { data } = await axios.get('/products', {
        params: { name: searchQuery },
      });

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

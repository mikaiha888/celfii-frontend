import {
  LOAD_PRODUCT,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
} from '../types/productsTypes';
import axios from 'axios';

export const loadProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const response = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS });
  try {
    const response = await axios.get('http://localhost:3001/products');
    dispatch({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const saveProduct = (productData) => async (dispatch) => {
  try {
    const response = productData.id
      ? await axios.put(`http://localhost:3001/products/${productData.id}`, productData)
      : await axios.post('http://localhost:3001/products', productData);
    dispatch({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/products/${id}`);
    dispatch(loadProducts());
  } catch (error) {
    dispatch({
      type: LOAD_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

import axios from 'axios';
import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAILURE } from '../types/categoryTypes';

export const loadCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_REQUEST });
    const { data } = await axios.get('/categories');
    dispatch({ type: CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};


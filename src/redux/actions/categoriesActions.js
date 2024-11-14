import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from "../types";
import { getRequest, postRequest } from "../../helpers/apiHelper";

export const createCategory = (categoryName) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORIES_REQUEST });
    const { data } = await postRequest("/categories", categoryName);
    dispatch({ type: CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAILURE,
      payload: error.message,
    });
  }
};

export const loadCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORIES_REQUEST });
    const { data } = await getRequest("/categories");
    dispatch({ type: CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORIES_FAILURE, payload: error.message });
  }
};
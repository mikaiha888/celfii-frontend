import axios from "axios";

import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from "../types";

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORIES_REQUEST });
    const { data } = await axios.get("/categories");
    dispatch({ type: CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORIES_FAILURE, payload: error.message });
  }
};
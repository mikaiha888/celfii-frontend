import axios from "axios";

import { AUTH_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_FAILURE } from "../types";

import { saveToLocalStorage, removeFromLocalStorage } from "../../helpers";

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    const { data } = await axios.post("/auth/login", userData);
    saveToLocalStorage("token", data.token);
    saveToLocalStorage("userData", data.user);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: error.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    removeFromLocalStorage("token");
    removeFromLocalStorage("userData");
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: error.message,
    });
  }
};

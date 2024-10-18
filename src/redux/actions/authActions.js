import axios from "axios";

import { AUTH_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_FAILURE } from "../types";

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    const { data } = await axios.post("/auth/login", userData);
    localStorage.setItem("token", data.token);
    localStorage.setItem("userData", JSON.stringify(data.user));
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
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: error.message,
    });
  }
};

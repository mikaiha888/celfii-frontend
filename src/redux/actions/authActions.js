import { AUTH_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_FAILURE } from "../types";
import { postRequest } from "../../helpers/apiHelper";

import { saveToSessionStorage, removeFromSessionStorage } from "../../helpers";

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    const { data } = await postRequest("/auth/login", userData);

    saveToSessionStorage("token", data.token);
    saveToSessionStorage("userData", data.user);

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    return true;
  } catch (error) {
    console.error("Login error:", error);
    dispatch({
      type: AUTH_FAILURE,
      payload: error.message,
    });
    return false;
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    removeFromSessionStorage("token");
    removeFromSessionStorage("userData");
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: error.message,
    });
  }
};

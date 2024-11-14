import { getRequest, postRequest, putRequest, deleteRequest } from "../../helpers/apiHelper";
import { USERS_REQUEST, USER_SUCCESS, USERS_SUCCESS, USERS_FAILURE } from "../types";

export const createUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await postRequest("/users", userData);
    dispatch({ type: USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await getRequest(`/users/${id}`);
    dispatch({ type: USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await getRequest("/users");
    dispatch({ type: USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

export const saveUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await putRequest(`/users/${userData.id}`, userData);
    dispatch({ type: USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await deleteRequest(`/users/${id}`);
    dispatch(loadUsers());
    return data;
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

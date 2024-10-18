import axios from "axios";

import { USERS_REQUEST, USER_SUCCESS, USERS_SUCCESS, USERS_FAILURE } from "../types";

export const createUser = (userData, token) => async (dispatch) => {
  try {
    console.log(token);
    
    dispatch({ type: USERS_REQUEST });
    const { data } = await axios.post("/users", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadUser = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await axios.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

export const loadUsers = (token) => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await axios.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

export const saveUser = (userData, token) => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await axios.put(`/users/${userData.id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteUser = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await axios.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(loadUsers());
    return data;
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      payload: error.message,
    });
  }
};

import { AUTH_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_FAILURE } from "../types";

const initialState = {
  token: null,
  userData: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        userData: action.payload.user,
        error: null,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        token: null,
        userData: null,
        error: null,
      };

    case AUTH_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;

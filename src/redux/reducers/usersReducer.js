import { USERS_REQUEST, USER_SUCCESS, USERS_SUCCESS, USERS_FAILURE } from "../types";

const initialState = {
  user: {},
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return { ...state, loading: true, error: null };

    case USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };

    case USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: null };

    case USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default usersReducer;

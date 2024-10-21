import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAILURE } from '../types/categoryTypes';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return { ...state, loading: true, error: null };

    case CATEGORY_SUCCESS:
      return { ...state, loading: false, categories: action.payload, error: null };

    case CATEGORY_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default categoriesReducer;

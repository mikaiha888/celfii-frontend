import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from '../types/categoriesTypes';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { ...state, loading: true, error: null };

    case CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload, error: null };

    case CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default categoriesReducer;

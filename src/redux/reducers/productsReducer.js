import {
  LOAD_PRODUCT,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
} from '../types/productsTypes';

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
    case LOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: Array.isArray(action.payload) ? action.payload : state.products,
        product: !Array.isArray(action.payload) ? action.payload : state.product,
        loading: false,
      };
    case LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;

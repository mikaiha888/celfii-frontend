import { PRODUCTS_REQUEST, PRODUCT_SUCCESS, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from "../types";

const initialState = {
  products: [],
  product: {},
  totalItems: 0,
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };

    case PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload, error: null };

    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        totalItems: action.payload.totalItems,
        error: null,
      };

    case PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productsReducer;

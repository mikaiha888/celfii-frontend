import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCTS_SUCCESS, PRODUCT_FAILURE } from "../types";

const initialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    case PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload, error: null };

    case PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload, error: null };

    case PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;

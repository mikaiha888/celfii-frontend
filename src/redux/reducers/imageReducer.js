import { IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAILURE } from "../types";

const initialState = {
  images: [],
  loading: false,
  error: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_REQUEST:
      return { ...state, loading: true, error: null };

    case IMAGE_SUCCESS:
      return { ...state, loading: false, images: action.payload, error: null };

    case IMAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default imageReducer;

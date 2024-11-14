import { IMAGES_REQUEST, IMAGES_SUCCESS, IMAGES_FAILURE } from "../types";

const initialState = {
  images: [],
  loading: false,
  error: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_REQUEST:
      return { ...state, loading: true, error: null };

    case IMAGES_SUCCESS:
      return { ...state, loading: false, images: action.payload, error: null };

    case IMAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default imagesReducer;

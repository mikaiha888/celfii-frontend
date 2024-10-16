import { combineReducers } from "redux";

import imageReducer from "./imageReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  images: imageReducer,
  products: productReducer,
});

export default rootReducer;

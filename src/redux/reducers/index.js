import { combineReducers } from 'redux';

import authReducer from "./authReducer";
import imagesReducer from "./imagesReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  images: imagesReducer,
  products: productsReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import imagesReducer from "./imagesReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  images: imagesReducer,
  products: productsReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoryReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

export default rootReducer;

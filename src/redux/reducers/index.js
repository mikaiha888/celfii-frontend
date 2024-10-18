import { combineReducers } from "redux";

import imagesReducer from './imagesReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoryReducer';
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  images: imagesReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

export default rootReducer;

import { combineReducers } from "redux";

import imagesReducer from './imagesReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import cartFavsReducer from "./cartFavsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  images: imagesReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cartFavsReducer: cartFavsReducer,
});

export default rootReducer;

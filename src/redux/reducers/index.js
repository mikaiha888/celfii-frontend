import { combineReducers } from "redux";

import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import imagesReducer from "./imagesReducer";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  images: imagesReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

export default rootReducer;

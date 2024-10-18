import { combineReducers } from "redux";

import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import imagesReducer from "./imagesReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  images: imagesReducer,
  products: productsReducer,
});

export default rootReducer;

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const loadFavoritesFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("favourites");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("No se pudieron cargar los favoritos", e);
    return [];
  }
};

const preloadedState = {
  favourites: loadFavoritesFromLocalStorage(),
};
const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("favourites", JSON.stringify(state.favourites));
});

export default store;

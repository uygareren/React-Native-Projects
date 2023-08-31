import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Slice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
});

export default store;

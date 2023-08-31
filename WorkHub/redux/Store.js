import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer, submittedReducer } from "./Slice"; // Import named exports

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,   // Use the correct key "favorites"
    submitteds: submittedReducer, // Use the correct key "submittedJobs"
  },
});

export default store;

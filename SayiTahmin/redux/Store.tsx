import { configureStore } from "@reduxjs/toolkit";
import numberPredictionReducer from "./Slice"; // Corrected path to your Slice file

const store = configureStore({
  reducer: {
    numberPrediction: numberPredictionReducer,
  },
});

export default store;

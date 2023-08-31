import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites_id: [],
  },
  reducers: {
    addFavoriteId(state, action) {
      const newId = action.payload.id;
      if (!state.favorites_id.includes(newId)) {
        state.favorites_id.push(newId);
      }
    },

    removeFavoriteId(state, action) {
      const idToRemove = action.payload.id;
      state.favorites_id = state.favorites_id.filter(id => id !== idToRemove);
    },
  },
});

const submittedSlice = createSlice({
  name: "submittedJobs",
  initialState: {
    submitted_job_id: [],
  },
  reducers: {
    addSubmittedJobId(state, action) {
      const newId = action.payload.id;
      if (!state.submitted_job_id.includes(newId)) {
        state.submitted_job_id.push(newId);
      }
    },
    removeSubmittedId(state, action) {
      const idToRemove = action.payload.id;
      state.submitted_job_id = state.submitted_job_id.filter(id => id !== idToRemove);
    },
  },
});

export const {
  addFavoriteId,
  removeFavoriteId,
} = favoritesSlice.actions;

export const {
  addSubmittedJobId,
  removeSubmittedId,
} = submittedSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
export const submittedReducer = submittedSlice.reducer;

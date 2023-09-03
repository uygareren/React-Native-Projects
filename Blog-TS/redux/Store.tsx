import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./Slice"; 

interface Post {
  id: string;
  title: string;
  content: string;
}

interface BlogState {
  posts: Post[];
}

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;

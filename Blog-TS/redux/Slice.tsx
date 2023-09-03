import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string;
  title: string;
  content: string;
}

interface BlogState {
  posts: Post[];
}

const initialState: BlogState = {
  posts: [
    { id: "1", title: 'React Native', content: 'React native description' },
  ],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {

    addPost: (state, action: PayloadAction<{ title: string; content: string }>) => {
      const id = (state.posts.length + 1).toString();
      const { title, content } = action.payload;

      state.posts.push({
        id: id,
        title: title,
        content: content,
      });
    },
    removePost: (state, action: PayloadAction<{ id: string }>) => {
      const removeId = action.payload.id;

      // Filter the posts array to remove the post with the matching id
      state.posts = state.posts.filter((post) => post.id !== removeId);
    },
  },
});

export const { addPost, removePost } = blogSlice.actions;
export default blogSlice.reducer;

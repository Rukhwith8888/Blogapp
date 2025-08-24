import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "High School",content: "Oxford High School. I studied 8th, 9th and 10th here." },
  { id: 2, title: "Intermediate",content: "Sri Chaitanya Jr College.I have Chosen M.P.C course here" }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const post = state.find(p => p.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
    deletePost: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    }
  }
});

export const { addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;


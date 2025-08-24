import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "High School", name: "Oxford High School.", content: "Hey, I studied 8th, 9th and 10th here." },
  { id: 2, title: "Intermediate", name: "Sri Chaitanya Jr College.", content: "I have Chosen M.P.C course here" }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}});
export default postsSlice.reducer;

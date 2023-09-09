import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.arr.push({
        id: new Date().toLocaleTimeString(),
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;

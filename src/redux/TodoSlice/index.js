import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload) {
        state.arr.push({
          id: new Date().toISOString(),
          text: action.payload,
          completed: false,
        });
      }
    },
    removeTodo: (state, action) => {
      state.arr = state.arr.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const toggleTodo = state.arr.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
      console.log(toggleTodo.completed);
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;

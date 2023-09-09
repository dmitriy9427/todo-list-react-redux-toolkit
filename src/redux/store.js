import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

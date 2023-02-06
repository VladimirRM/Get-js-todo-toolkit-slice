import { configureStore } from "@reduxjs/toolkit";
import TodoSlice, { todoSlice } from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});


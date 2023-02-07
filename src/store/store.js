import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "../componets/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        toggleCompleteTodo:(state,action)=>{
           const toggleTodo = state.todos.find(todo=>todo.id ===action.payload) 
           toggleTodo.completed = !toggleTodo.completed
        }
    }
})

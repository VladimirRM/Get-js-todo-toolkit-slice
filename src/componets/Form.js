import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const Form = () => {
const dispatch = useDispatch( )

const addTodoHandler =()=>{
    const todo ={
        id: '',
        text:'',
        completed: 
    }
}

  return <form onSubmit={(e) => e.preventDefault()}>
    <input type="text"
    placeholder="Type something"
    
    />
    <button type="submit">Submit</button>
  </form>;
};

export default Form;

import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
const dispatch = useDispatch( )
const [todoValue,setTodoValue]=useState('')

const addTodoHandler =()=>{
    const todo ={
        id: uuidv4(),
        text:todoValue,
        completed: false,
    }
    dispatch(addTodo(todo))
}

  return <form onSubmit={(e) => e.preventDefault()}>
    <input type="text"
    placeholder="Type something"
    onChange={(e)=>setTodoValue(e.target.value)}
    value={todoValue}
    />
    <button type="submit" onClick={addTodoHandler}>Submit</button>
  </form>;
};

export default Form;

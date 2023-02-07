import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { uuid } from 'uuidv4'

const Form = () => {
const dispatch = useDispatch( )
const [todoValue,setTodoValue]=useState('')

const addTodoHandler =()=>{
    const todo ={
        id: uuidv4(),
        text:'',
        completed: false,
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

import React from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  return <form onSubmit={(e) => e.preventDefault()}>
    <input type="text"
    placeholder="Type something"
    
    />
    <button type="submit">Submit</button>
  </form>;
};

export default Form;

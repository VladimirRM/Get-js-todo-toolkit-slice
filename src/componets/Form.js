import React from "react";

const Form = () => {
  return <form onSubmit={(e) => e.preventDefault()}>
    <input type="text"
    placeholder="Type something"
    
    />
    <button type="submit"></button>
  </form>;
};

export default Form;

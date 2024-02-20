import React from 'react';

function Form() {
  return (
    <form className="form">
        <label for="add-todo"></label>
        <input type="text" id="add-todo" placeholder="Today I am going to do..."></input><br></br>
        <button type="submit">Add to my list</button>
    </form>
  );
}

export default Form;
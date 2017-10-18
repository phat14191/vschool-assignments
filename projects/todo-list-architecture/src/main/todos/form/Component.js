import React from "react";

function FormComponent(props) {
  return (
    <div>
      <h1>Add Todos</h1>
      <form>
           <input placeholder = "Title"/>
           <input placeholder = "Description"/>
           <button type = "submit"> + </button>
      </form>
    </div>
  )
}

export default FormComponent;

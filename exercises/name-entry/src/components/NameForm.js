import React from "react";

function NameForm(props) {
  return (
    <div>
      <input onChange = {props.handleChange}
             type="text"
             value= {props.name}
      />
      <h1>{props.name}</h1>
      <button onClick = {props.handleClick}>Add names</button>
    </div>
  )
}

export default NameForm;

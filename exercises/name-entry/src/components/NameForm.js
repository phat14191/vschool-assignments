import React from "react";

function NameForm(props) {
  return (
    <div>
      <input onChange = {props.handleChange}
             type="text"
      />
      <h1>{props.name}</h1>
    </div>
  )
}

export default NameForm;

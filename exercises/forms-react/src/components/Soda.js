import React from "react";

function Soda(props) {
  return (
    <div>
      <input placeholder="Type your Soda"
             value={props.value}
             onChange={props.handleChange}
             type = "text"/>
      <h1>{props.label}</h1>
      <button onClick={props.handleClick}>Display Text</button>
    </div>
  )
}

export default Soda;


//

import React from "react";

function ColorComponent(props) {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Refresh the page to have</h2>
      <h1 style ={props.styles}>New Color</h1>
    </div>
  )
}

export default ColorComponent;

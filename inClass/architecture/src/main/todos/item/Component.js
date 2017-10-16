import React from "react";

function ItemComponent(props) {
  return (
    <div>
      <span>Title:</span>
      <h3>test</h3>
      <span>Description: </span>
      <p>{props.todo.description}</p>
    </div>
  )
}

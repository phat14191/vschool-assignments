import React from "react";

function TodoComponent(props) {
  return (
    <div key={props.spot.i} className="card">
      <h1>{props.spot.name}</h1>
      <img src={props.spot.image}/>
    </div>
  )
}

export default TodoComponent;

import React from "react";

function FruitComponent(props) {
  return (
    <div>
      <h1> {props.fruit} </h1>
      <h2> {props.region} </h2>
    </div>
  )
}

export default FruitComponent;

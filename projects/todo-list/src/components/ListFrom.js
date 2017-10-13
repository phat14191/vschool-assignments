import React from "react";

function ListFrom(props) {
  return (
    <div>
      <h1>{props.name.title}</h1>
      <h2>{props.name.description}</h2>
    </div>
  )
}

export default ListFrom;

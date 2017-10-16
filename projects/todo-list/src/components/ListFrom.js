import React from "react";

function ListFrom(props) {
  return (
    <div>
      <h1>{props.name.title}</h1>
      <h2>{props.name.description}</h2>
                                                {/* //mangoDB */}
      <button onClick = {() => props.delete(props.name._id)}>Delete</button>
      <hr/>
    </div>
  )
}

export default ListFrom;

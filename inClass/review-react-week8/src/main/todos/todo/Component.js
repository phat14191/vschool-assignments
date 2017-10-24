import React from "react";

function TodoComponent(props) {
  return (
    <div>
      {props.genList()}
    </div>
  )
}

export default TodoComponent;

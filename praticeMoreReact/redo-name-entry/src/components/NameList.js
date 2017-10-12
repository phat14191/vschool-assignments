import React from "react";

function NameList(props) {
  return (
    <div>
      <input
        onChange = {props.handleChange}
      />
      <h1>{props.name}</h1>
    </div>
  )
}

export default NameList;

import React from "react";

function Repeat(props) {
  return (
    <div>
      <h1 className="vang"> {`${props.ten}`} - {`${props.ten}`}</h1>
      <p>{`${props.ten.children}`}</p>
    </div>
  )
}

export default Repeat;

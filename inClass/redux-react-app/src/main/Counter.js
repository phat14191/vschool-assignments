import React from "react";

function Counter(props) {
  const styles = {
    width: "15%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    top: "50%",
    transform : "translateY(-50%)",
    fontSize: "120px",
    marginTop: "400px"
  }
  return (
    <div style = {styles}>
      <button>+</button>
      <span>0</span>
      <button>-</button>
    </div>
  )
}

export default Counter;

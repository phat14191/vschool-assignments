import React from "react";

function Country(props) {
  const style = {
    backgroundImage: `url(${props.country.imgUrl})`,
    backgroundSize: "cover",
    width: "300px",
    height: "500px"
  }
  return (
    <div style={style}>
      <h4>{props.country.name}</h4>
    </div>
  )
}

export default Country;

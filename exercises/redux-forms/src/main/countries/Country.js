import React from "react";

function Country(props) {
  console.log(props)
  const style = {
    backgroundImage: `url(${props.country.imgUrl})`,
    backgroundSize: "cover"
  }
  return (
    <div style = {style}>
      {props.country.name}
    </div>
  )
}

export default Country;

import React from "react";

function SuperHero(props) {
  function handleClick() {
    alert("Name: " +  props.spot.title +
          "!!!  Detailed: " + props.spot.details2)
  }
  return (
    <div>
      <h1>Characters: {props.spot.title}</h1>
      <h3 onClick={handleClick}>Description: {props.spot.details}</h3>
      <img src={props.spot.photo}/>
    </div>
  )
}
export default SuperHero;

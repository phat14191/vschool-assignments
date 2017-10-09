import React from "react";

function SuperHero(props) {
  function handleClick() {
    alert("Name: " +  props.spot.title +
          "!!!  Detailed: " + props.spot.details2)
  }
  return (
    <div onClick = { () => {props.handleClick(props.spot.details2)}}>
      <h1>Characters: {props.spot.title}</h1>
      <h3>Description: {props.spot.details}</h3>
      <img src={props.spot.photo}/>
    </div>
  )
}
export default SuperHero;

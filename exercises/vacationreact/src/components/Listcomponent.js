import React from "react";

function Listcomponent(props) {
  return (
    <div className="container">
      <h1>Place: {props.place}</h1>
      <h1>Lacation: {props.region}</h1>
      <h1>TimeToGo: {props.timeToGo}</h1>
      <img src={props.img}></img>
    </div>
  )
}

export default Listcomponent;

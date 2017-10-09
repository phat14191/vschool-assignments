import React from "react";

function Data(props) {
  return (
    <div className="whole-detail">
      <h1 className="title">{props.spot.title}</h1>
      <p className="teaser">{props.spot.teaser}</p>
      <h4 className="postDetails">{props.spot.title}</h4>


    </div>
  )
}

export default Data;

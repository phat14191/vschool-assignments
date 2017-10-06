import React from "react";

function VacationSpot(props) {

  const price = Number(props.spot.price.substr(1));
  console.log(price);
  const styles = {
    backgroundImage: `url(${props.spot.photo})`,
  }

  if (price <= 500) {
    styles.color = "green";
  } else if (price > 500 && price < 1000) {
    styles.color = "red";
  } else if (price > 1000) {
    styles.color = "blue";
  }

  return (
    <div style = {styles} className="card">
      <h1>{props.spot.place}</h1>
      <h2>Price: {props.spot.price}</h2>
      <h2>Good time: {props.spot.timeToGo}</h2>
      <img src={props.spot.photo}></img>
    </div>
  )
}
export default VacationSpot;

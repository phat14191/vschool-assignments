import React from "react";

function FruitComponent(props) {
const styles = { };
const price = Number(props.spot.price.substr(1));
console.log(price);

if (price < 20) {
  styles.color = "red";
} else if (price > 80 && price < 90) {
  styles.color = "blue";
} else if (price > 90) {
  styles.color = "purple";
}

  return (
    <div style={styles}>
      <h1> {props.spot.fruit} </h1>
      <h2> {props.spot.region} </h2>
      <h2> {props.spot.price} </h2>
    </div>
  )
}

export default FruitComponent;

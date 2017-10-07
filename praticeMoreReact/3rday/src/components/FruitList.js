import React from "react";
import FruitComponent from "./FruitComponent";
import data from "../fruit.json";

function FruitList(){
  return (
    <div>
      {data.map(function(spot) {
        return <FruitComponent
                spot={spot}
                />
      })}
    </div>
  )}

export default FruitList;

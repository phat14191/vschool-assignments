import React from "react";
import FruitComponent from "./FruitComponent";

function FruitList(){
  let fruitList = [
    {
    fruit: "dragon fruit",
    region: "Asian"
    },
    {
    fruit: "Bean fruit",
    region: "Asian"
    },
    {
    fruit: "Coconut fruit",
    region: "Asian"
    }
  ]
  let mappedFruitList = fruitList.map(function(lists)  {
    return <FruitComponent
      fruit = {lists.fruit}
      region = {lists.region}
    />
  })
  return (
    mappedFruitList
  )
}

export default FruitList;

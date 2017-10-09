import React from "react";
import data from "../json/body.json";
import Data from "./Data"

function Body() {
  return (
    <div>
      {data.map(function(spot) {
        return <Data
              spot={spot}
                />
      })}
    </div>
  )
}

export default Body;

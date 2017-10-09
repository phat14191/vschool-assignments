import React from "react";
import Tapadder from "./Tapadder";
import data from "../json/tap.json"

function Tapheader(spot) {
  return (
    <div>
      <Tapadder
      spot={spot} />
    </div>
  )
}

export default Tapheader;

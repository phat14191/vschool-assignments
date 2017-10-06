import React from "react";
import data from "./data.json";
import VacationSpot from "./VacationSpot";

function Vacationlist() {
  return (
    <div className="container">
      {data.map(function(spot) {
        return <VacationSpot spot={spot}/>
      })}
    </div>
  )
}
export default Vacationlist;

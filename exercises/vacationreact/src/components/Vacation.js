import React from "react";
import Listcomponent from "./Listcomponent";
import data from "./listVacation.json";
function Vacation() {
  var vacationLists = data.map(function(list) {
  return <Listcomponent className="card"
          place = {list.place}
          region = {list.price}
          timeToGo = {list.timeToGo}
          img = {list.img}
         />
  })
  return (
    vacationLists
  )
}

export default Vacation;

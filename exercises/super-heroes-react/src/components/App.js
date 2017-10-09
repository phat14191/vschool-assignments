import React from "react";
import SuperHero from "./SuperHero"
import data from "./data.json"
function App() {
  return (
    <div>
      {data.map((spot) => {
        return <SuperHero
                spot={spot}
               />
      })}
    </div>
  )
}
export default App;

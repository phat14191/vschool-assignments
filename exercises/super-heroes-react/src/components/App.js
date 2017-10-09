import React from "react";
import SuperHero from "./SuperHero"
import data from "./data.json"

function genHeroes() {
  return data.map((spot) => {
    return <SuperHero
            spot = {spot}
            handleClick = {handleClick}
           />
  })
}

function handleClick(str) {
  alert(str);
}

function App() {
  return (
    <div>
      {genHeroes(data)}
    </div>
  )
}

export default App;

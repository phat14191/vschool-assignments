import React from "react";
import SuperHero from "./SuperHero"
import data from "./data.json"

function genHeroes() {
  return data.map((spot, i) => {
    return <SuperHero
            key = {i}
            spot = {spot}
            handleClick = {handleClick}
           />
  })
}

function handleClick() {
  alert();
}

function App(props) {
  return (
    <div key={props.i}>
      {genHeroes(data)}
    </div>
  )
}

export default App;

// export default App;
//
// function genHeroes() {
//   return data.map((spot) => {
//     return <SuperHero
//             spot = {spot}
//             handleClick = {handleClick}
//            />
//   })
// }
//
// function handleClick(str) {
//   alert(str);
// }
//
// function App() {
//   return (
//     <div>
//       {genHeroes(data)}
//     </div>
//   )
// }

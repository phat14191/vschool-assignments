import React from "react";
import Contact from "./Contact";
import data from "../contacts.json"

function App() {
  return (
    <div className="container">
      {data.map(obj => <Contact />)}
    </div>
  )
}

export default App;

import React from "react";
import Contact from "./Contact";
import data from "../contacts.json"

function App() {
  return (
    <div className="container">
      {data.map(function(obj) {
        return <Contact
                firstName={obj.firstName}
                lastName={obj.lastName}
                img={obj.img}
                phone={obj.phone}
               />
       })
      }
    </div>
  )
}

export default App;























//

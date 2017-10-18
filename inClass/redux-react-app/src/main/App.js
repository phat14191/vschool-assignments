import React from "react";
import Counter from "./Counter";
import ContactList from "./contacts/ContactList";

function App(props) {
    return (
      <div>
        <Counter />
        <ContactList />
      </div>
    )
}

export default App;

//Make a list component
  //get contact list from redux//
  //map through list, and render item component for each one

//make an item component
  //display item info

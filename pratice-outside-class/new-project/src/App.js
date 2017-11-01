import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="18"/>
        <Person name="Manu" age="22"> My hobbies: Racing </Person>
        <Person name="Nad" age="25"/>
      </div>
    );
    // return React.createElement("div", null, React.createElement("h1", null, "alosdas"))
  }
}

export default App;

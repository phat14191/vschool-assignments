import React, { Component } from 'react';
import './App.css';
import Radium from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: "q21", name: "Max", age: 28},
      {id: "q22", name: "Manu", age: 22},
      {id: "q23", name: "Phat", age: 26}
    ],
    otherState: "other things here",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons= [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // console.log(person);

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.person[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
              )
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "lightred",
        color: "black"
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push("red"); //classes = ["red"]
    } 
    if(this.state.persons.length <= 1) {
      classes.push("bold"); //classes =["red", "bold"]
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button
         style ={style}
         onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement("div", null, React.createElement("h1", null, "alosdas"))
  }
}

export default Radium(App);

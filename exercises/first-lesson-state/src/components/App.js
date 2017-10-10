import React from "react";

//use class because of state
//state do 3 thing: super() MEMORIES to allow get stuff from React.Component //Component is class
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lemmeingsKilled: 0
    }
    //bind dont foget where you com from so bind

    this.killALemming = this.killALemming.bind(this);
    this.saveALeming = this.saveALeming.bind(this);
  }

  killALemming() {
    //this scope this function

    this.setState(prevState => {
      return {
        lemmeingsKilled: prevState.lemmeingsKilled + 1
      }
    });
  }

  saveALeming() {
    //this scope this function

    this.setState(prevState => {
      return {
        lemmeingsKilled: prevState.lemmeingsKilled - 1
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Lemmeings Killed: {this.state.lemmeingsKilled}</h1>
        <button onClick={this.killALemming}>Kill a Lemming</button>
        <button onClick={this.saveALeming}>Save a Lemming</button>
      </div>
    )
  }
}
export default App;

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lemmeingsKilled: 0
    }
    this.killALemming = this.killALemming.blind()
  }

  killALemming() {
    //this scope this function
    this.setState = ({
      lemmeingsKilled: this.state.lemmeingsKilled + 1;
    })
  }

  render() {
    return (
      <div>
        <h1>Lemmeings Killed: {this.state.lemmeingsKilled}</h1>
        <button onClick={this.killALemming}>Kill a Lemming</button>
      </div>
    )
  }
}

export default App;

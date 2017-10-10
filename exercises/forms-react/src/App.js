import React from "react";
import Soda from "./components/Soda";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favorireSoda: ""
    }
    this.sodaParty = this.sodaParty.bind(this);
  }

  sodaParty () {

  }

  sodaPartyChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Soda lable = {this.state.favorireSoda}
              handleClick = {this.sodaParty}
              handleChange = {this.sodaPartyChange}
        />
      </div>
    )
  }
}

export default App;

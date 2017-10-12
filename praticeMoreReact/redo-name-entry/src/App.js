import React from "react";
import NameList from "./components/NameList";

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        name: ""
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <NameList
          handleChange = {this.handleChange}
          name = {this.state.name}
        />
      </div>
    )
  }

}

export default App;

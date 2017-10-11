import React from "react";
import NameForm from "./components/NameForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

 render () {
   return (
     <div>
       <NameForm
         handleChange = {this.handleChange}
         name = {this.state.name}
       />
     </div>
   )
 }

}

export default App;

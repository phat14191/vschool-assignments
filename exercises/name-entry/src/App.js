import React from "react";
import NameForm from "./components/NameForm";
import NameList from "./components/NameList"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nameList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleClick(event) {
    this.setState(prevState => {
      return {
        nameList: [...prevState.nameList, prevState.name]
        // prevState.nameList.push(this.state.name) = 1
      }
    })
    // console.log("inside handleClick")
  }

 render () {
   return (
     <div>
       <NameForm
         handleChange = {this.handleChange}
         handleClick = {this.handleClick}
         name = {this.state.name}
       />

      <NameList
        names = {this.state.nameList}
      />
     </div>
   )
 }

}

export default App;

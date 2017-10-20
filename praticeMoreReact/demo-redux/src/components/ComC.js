import React from "react";

class ComC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black"
    }
  }

  changeColorC(){
    this.setState({
      color:"yellow"
    })
  }

  render() {
    return (

      <div style={{width:100, height:100, backgroundColor:this.state.color, justifyContent:"center", alignItems:"center"}}>
        <button onClick = {() => {this.changeColorC()}}>Click me</button>
      </div>
    )
  }
}

export default ComC;

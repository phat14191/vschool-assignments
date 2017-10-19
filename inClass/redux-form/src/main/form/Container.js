import React from "react";
import FormComponent from "./Component";

import {connect} from "react-redux";
import {countries} from "../../redux/actions";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        name: "",
        imgUrl: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//update state with current input
  handleChange(event) {
    event.persist();
    this.setState((prevState) => {
      return ({
        inputs: {
          ...prevState.inputs,
          [event.target.name]: event.target.value
        }
      })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCountry(this.state.inputs);
    alert(JSON.stringify(this.state.inputs));
     //add Country function gets called here
     this.setState({
       inputs: {
         name: "",
         imgUrl: ""
       }
     });
  }

  render(){
    // console.log(this.state.inputs);
    return (
      <div>
        <FormComponent
            handleChange = {this.handleChange}
            inputs = {this.state.inputs}
            handleSubmit = {this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(null, countries)(FormContainer);

//handle changes in the input
//handle submission of info

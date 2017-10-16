import React from "react";
import FromComponent from "./Component";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        title: "",
        description: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo();
    this.setState({
      inputs: {
        title: "",
        description: ""
      }
    });
    this.props.addTodo(this.state.inputs);
  }

  render(){
    return (
      <FormComponent
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        inputs = {this.state.inputs}
      />
    )
  }
}

export default FormContainer;

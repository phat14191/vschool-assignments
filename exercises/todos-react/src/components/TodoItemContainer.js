import React from "react";
import TodoItem from "./TodoItem";

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTodo: {
          title: props.todo.title,
          description: props.todo.description,
          completed: props.todo.completed
      }
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEdit(event) {
    console.log(event.target)
    event.persist();
    this.setState((prevState) => {
      return {
        editTodo: {
          //need to store object so
          ...prevState.editTodo,
          [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }
      }
    })
  }
  //handle edit function
  //handle submit function
  handleSubmit(event) {
    event.preventDefault();
    //call edit Todo here
    this.props.editTodo(this.props.to._id, this.state.editTodo)
  }

  render() {
    console.log(this.state.editTodo)
    return (
      <TodoItem
        //dont need to call props because class pass down//
        todo = {this.props.todo}
        deleteTodo = {this.props.deleteTodo}
        editedTodo = {this.state.editedTodo}
        handleEdit = {this.handleEdit}
        handleSubmit = {this.handleSubmit}
      />
    )
  }
}

export default ItemContainer;

import React from "react";
import TodoItem from "./TodoItem";

class ItemContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <TodoItem
        //dont need to call props because class pass down//
        todo = {this.props.todo}
        deleteTodo = {this.props.deleteTodo}
      />
    )
  }
}

export default ItemContainer;

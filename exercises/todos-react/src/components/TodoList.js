import React from "react";
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        {this.state.todos.map(function(item, i) {
          return (
            <TodoItem
              todo = {item}
              key = {item.title + i}
            />
          )
        })}
      </div>
    )
  }
}

export default TodoList;

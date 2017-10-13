import React from "react";
import ListFrom from "./ListFrom";
import axios from "axios";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get("https://api.vschool.io/phat/todo").then((response) => {
      console.log(response.data)
      this.setState({
        todos: response.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map(function(item, i) {
          return (
            <ListFrom
              name = {item}
              key = {item.title + i}
            />
          )
        })}
      </div>
    )
  }
}

export default TodoList;

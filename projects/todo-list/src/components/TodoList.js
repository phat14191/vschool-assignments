import React from "react";
import ListFrom from "./ListFrom";
import axios from "axios";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.vschool.io/phat/todo").then((response) => {
      console.log(response.data)
      this.setState({
        todos: response.data
      });
    });
  }

  deleteTodo(id) {
    axios.delete(`https://api.vschool.io/phat/todo/${id}`).then((response) => {
      this.setState(prevState => {
        const newArray = prevState.todos.filter(item => item._id !== id)
        return {
          todos: newArray
        }
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.todos.map((item, i) => {
          return (
            <ListFrom
              name = {item}
              key = {item.title + i}
              delete = {this.deleteTodo}
            />
          )
        })}
      </div>
    )
  }
}

export default TodoList;

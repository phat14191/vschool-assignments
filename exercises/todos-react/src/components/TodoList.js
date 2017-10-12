import React from "react";
import TodoItem from "./TodoItem"
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
      console.log(response)
      this.setState({
        todos: response.data
      });
    });
  }

  deleteTodo(id) {
    axios.delete(`https://api.vschool.io/phat/todo/${id}`).then(response => {
      console.log(response.data);
      this.setState(prevState => {
        const newArr = prevState.todos.filter(item => item._id !== id)
        return {
          todos: newArr
        }
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map((item, i) => {
          return (
              <TodoItem
                todo = {item}
                key = {item.title + i}
                deleteTodo = {this.deleteTodo}
              />
          )
        })}
      </div>
    )
  }
}

export default TodoList;

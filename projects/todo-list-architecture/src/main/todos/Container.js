import React from "react";
import TodosComponent from "./Component";
import axios from "axios";
import ItemContainer from "./item/Container";

let url = "https://api.vschool.io/phat/todo"

class TodosContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.genTodos = this.genTodos.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    axios.get(url).then((response) => {
      console.log(response.data)
      this.setState({
        todos: response.data
      });
    });
  }

  genTodos() {
    return this.state.todos.map((todo) => {
      return (
        <ItemContainer
          key = {todo._id}
          todo = {todo}
        />
      )
    })
  }

  render() {
    return (
      <TodosComponent
        genTodos = {this.genTodos}
      />
    )
  }
}

export default TodosContainer;

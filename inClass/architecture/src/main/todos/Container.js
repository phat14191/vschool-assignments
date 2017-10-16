import React from "react";
import TodosComponent from "./Conponent";
import ItemContainer from "./item/Container";

import axios from "axios";
const url = "https://api.vschool.is/phat/todo/";

class TodosContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
    this.genTodos = this.genTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    axios.get(url).then((response) => {
      this.setState({
        todos: response.data
      });
    });
  }

  genTodos() {
    return this.state.todos.map((todo) => {
      return(
        <ItemContainer
        key = {todo._id}
        todo = {todo}
      />
      )
    })
  }

  addTodo() {
    axios.post(url, todo).then((response) => {
      this.loadData();
    })
  }

  render() {
    // console.log(this.state.todos);
    return(
      <TodosComponent
        genTodos = {this.genTodos}
        addTodos = {this.addTodo}
      />
    )
  }
}
export default TodosContainer;

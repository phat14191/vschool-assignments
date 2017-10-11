import React from "react";
import TodoComponent from "./TodoComponent";

import axios from "axios";

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: []
    }
  }

  componentDidMount() {
    axios.get("http://api.vschool.io:6543/hitlist.json").then((response) => {
      console.log(response);
      this.setState({
        todoList: response.data
      })
    })
  }

  render() {
    return this.state.todoList.map((spot, i) => {
      return (
            <div className="container">
             <TodoComponent
               spot = {spot}
               key = {i}
             />
           </div>
           )
    })
  }
}

export default TodoList;

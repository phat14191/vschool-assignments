import React from "react";
import ListFrom from "./ListFrom";
import axios from "axios";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      //give them starting point
      newTodo: {
        title: "",
        description: ""
      }
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.vschool.io/phat/todo").then((response) => {
      console.log(response.data)
      this.setState({
        todos: response.data
      });
    });
  }

  //need id ti pass so
  deleteTodo(id) {
    axios.delete(`https://api.vschool.io/phat/todo/${id}`).then(response => {
      this.setState(prevState => {
        //look at todos before and filter anything does not match require before
          const newArray = prevState.todos.filter(e => e._id !== id)
        return {
          todos: newArray
        }
      })
    })
  }

  handleChange(event) {
    console.dir(event.target);
    this.setState({
      newTodo: {
        event.target.name: event.target.vavlue
      }
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Title"
          //need value is object
          value={this.state.newTodo.title}
          name="title"
          onChange={this.handleChange}
        />

        <button>Add todo</button>

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

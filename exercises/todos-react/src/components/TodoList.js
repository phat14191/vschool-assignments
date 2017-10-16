import React from "react";
import TodoItem from "./TodoItem"
import axios from "axios";
import { Button, FromGroup, FromControl } from "react-bootstrap";
import { Row, Col} from "react-bootstrap";
import TodoItemContainer from "./TodoItemContainer";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: {
        title: "",
        description: ""
      }
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.vschool.io/phat/todo").then((response) => {
      console.log(response)
      this.setState({
        todos: response.data.reverse()
      });
    });
  }

  postTodo() {
    // first para is url, 2nd is body wanna send,
    axios.post(`https://api.vschool.io/phat/todo/`, this.state.newTodo).then(response => {
      // console.log(response.data);
      this.setState(prevState => {
        return {
          todos: [response.data, ...prevState.todos,]
        }
      })
    });
  }

  deleteTodo(id) {
    axios.delete(`https://api.vschool.io/phat/todo/${id}`).then(response => {
      // console.log(response.data);
      this.setState(prevState => {
        const newArr = prevState.todos.filter(item => item._id !== id)
        return {
          todos: newArr
        }
      });
    });
  }

  editTodo(id, editedTodo) {
    axios.put(`https://api.vschool.io/phat/todo/${id}`, editedTodo).then((response) => {
      //edit the todo in our current state
      let newEdit = response.data;
      this.setState((prevState) => {
          //newTodos match id simply return editedTodo looping enties that array
        const newTodos = prevState.todos.map((todo) => {
          if(todo._id === id) {
            return newEdit
          } else {
            return todo;
          }
        })
        return {
          ...prevState,
          todos: newTodos
        }
      })
    })
  }

  handleChange(event) {
    // console.log(this.state);
    this.setState({
        newTodo: {
          //copy all prev over and then
          ...this.state.newTodo,
          [event.target.name]: event.target.value
        }
    })
  }


  render() {
    return (
      <div>
        <input
          type = "text"
          placeholeder = "Title"
          value = {this.state.newTodo.title}
          name = "title"
          onChange = {this.handleChange}/>

        <input
          type = "text"
          placeholeder = "Description"
          value = {this.state.newTodo.description}
          name = "description"
          onChange = {this.handleChange}/>

        <Button onClick = {this.postTodo}>Add todo</Button>
        {this.state.todos.map((item, i) => {
          return (
              <TodoItem
                todo = {item}
                key = {item.title + i}
                deleteTodo = {this.deleteTodo}
                editTodo = {this.editTodo}
              />
          )
        })}
      </div>
    )
  }
}

export default TodoList;

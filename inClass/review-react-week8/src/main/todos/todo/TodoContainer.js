// connecnt load todos and todos
//map throgh todos and render individual todo compoents

import React from "react";
import {connect} from "react-redux";
import {todos} from "../../../redux/actions";
import TodoComponent from "./Component";
import TodoDisplay from "./View";


class TodoContainer extends React.Component {
  constructor() {
    super();
    this.genList = this.genList.bind(this)
  }

  conponentDidMount() {
    this.props.loadTodos();
    console.log(this.props.todos)
  }

  genList() {
    return this.props.todos.map((todo, i) => {
      return <TodoDisplay
        key = {todo.title + i}
        todo = {todo} />
    })
  }

  render(props) {
    return (
      <TodoComponent
      genList = {this.genList}
      />
    )
  }

}
  const mapStatetoProps = state => {
    return {
      todos: state.todos
    };
  };

export default connect(mapStatetoProps, todos)(TodoContainer);

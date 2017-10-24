import React from "react";
import {connect} from "react-redux";
import {todos} from "../../../redux/actions";

function TodoDisplay(props) {
  return (
    <div>
      <h1>{props.todo.title}</h1>
      <h3>{props.todo.description}</h3>
    </div>
  );
}

export default connect(null, todos)(TodoDisplay);

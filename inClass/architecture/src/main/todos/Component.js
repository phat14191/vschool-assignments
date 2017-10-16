import React from "react";
import FormContainer from "./form/Container";

function TodosComponent(props) {
  return(
    <div>
      <FormContainer
        addTodo = {props.addTodo}
      />
      {props.genTodos()}
    </div>
  )
}

export default TodosComponent;

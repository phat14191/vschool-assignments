import React from "react";

function TodoItem(props) {
  return(
    <div >
      <h1>{props.todo.title}</h1>
      <h2>{props.todo.description}</h2>
      <button onClick= {() => props.deleteTodo(props.todo._id)}> Delete </button>
      <div>
        <form action="">
          <input type="text" placeholder = "Edit Title"/>
          <input type="text" placeholder = "Edit Description"/>
          <button>Save</button>
        </form>
      </div>
      <hr/>
    </div>
  )
}

export default TodoItem;

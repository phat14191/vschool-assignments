import React from "react";

function TodoItem(props) {
  return(
    <div >
      <h1>{props.todo.title}</h1>
      <h2>{props.todo.description}</h2>
      <button onClick= {() => props.deleteTodo(props.todo._id)}> Delete </button>
      <div>
        <form onSubmit = {props.handleSubmit}>
          <input onChange = {props.handleEdit} name="title" value ={props.editedTodo.title} type="text" placeholder = "Edit Title"/>

          <input onChange = {props.handleEdit} name ="description" value ={props.editedTodo.description} type="text" placeholder = "Edit Description"/>
          <button type="submit">Save</button>
        </form>
      </div>
      <hr/>
    </div>
  )
}

export default TodoItem;

import React form "react";

function FormComponent(props) {
  return (
    <div>
        <h1>Add Todos</h1>
        <form>
        <input value = {props.inputs.title} onChange = {props
        type = "text"
        placeholder = "Title" />
        <input value = {props.inputs.title} onChange = {props
        type = "text"
        placeholder = "Description" />
        <button type="submit">+</button>
      </form>
    </div>
  )
}

export default FormComponent;

import axios from "axios";
const todosUrl = "https://api.vschool.io/phat/todo";

export function loadTodos() {
  return (dispatch) => {
    axios.get(todosUrl).then((response) => {
      dispatch({type: "LOAD_TODOS", todos: response.data})
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export function addTodo(todo) {
  return (dispatch) => {
    axios.post(todosUrl, todo).then((response) => {
      dispatch({
        type: "ADD_TODO",
        todo
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export function deleteTodo(id) {
  return (dispatch) => {
    axios.delete(todosUrl + id).then((response) => {
      dispatch({
        type: "DELETE_TODO",
        id
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

// export function edit(Todo(id, editedTodo) {
//   return (dispatch) => {
//     axios.put(todosUrl + id, editedTodo).then((response) => {
//       dispatch ({
//         type: "EDIT_TODO",
//         editedTodo
//       })
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//   }
// })

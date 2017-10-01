// document.getElementById("add-todo").addEventListener("click", function() {
//   // get the text from the input box
//   var newTodoText = document.getElementById("new-todo-text").value;
//   console.log(newTodoText);
//   // add a new li//
//   var newLi = document.createElement("li");
//   document.getElementById("todo-list").appendChild(newLi);
//   var todoTextNode = document.createTextNode(newTodoText);
//   newLi.appendChild(todoTextNode);
//   event.preventDefault();
//   // put text inside li//
//
//
//
// });


document.getElementById("add-todo").addEventListener("click", function() {
    var newTodo = document.getElementById("new-todo-text");

    // Easier way
    var list = document.getElementById("todo-list");
    list.innerHTML = "<li>" + newTodo.value + "</li>" + list.innerHTML;

    newTodo.value = "";
    event.preventDefault();
    // Low level way of creating elements
    //    var newLi = document.createElement("li");
    //    document.getElementById("todo-list").appendChild(newLi);
    //    var todoTextNode = document.createTextNode(newTodoText);
    //    newLi.appendChild(todoTextNode);
});
// console.dir(document.getElementById("todo-list"));
// });

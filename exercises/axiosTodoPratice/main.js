document.getElementById("button").addEventListener("click", function (){
    var title = document.right.toDoText.value;
    var price = document.right.price.value;
    var description = document.right.description.value;
    var newList = document.getElementById("todoDisplay");
    var newItem = new TodoListItem(title, price, description);
    axios.post("https://api.vschool.io/phat/todo", newList).then(function(response){
      console.log(newItem);
    });
});

document.getElementById("listButton").addEventListener("click", function() {
  axios.get("https://api.vschool.io/phat/todo").then(function(response){
    var newList = document.getElementById("todoDisplay")
      for (var i = 0; i < response.data.length; i++){
        newList.innerHTML +=
        `<div> <li> Title: ${response.data[i].title} </li> </div>
         <div>  Price: ${response.data[i].price} </div>
         <div>  Description: ${response.data[i].description} </div>`
      }
  })
});

function TodoListItem(title, price, description) {
  this.title = title;
  this.price = price;
  this.description = description;
};

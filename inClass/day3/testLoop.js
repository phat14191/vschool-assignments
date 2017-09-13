// var fruit = ["banana", "kiwi", "apple", "orange"]
// for (var i = 0; i < fruit.length; i++) {
//   console.log(fruit[i])
// }


for (var i = 0; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("pingpong")
  }
  else if (i % 5 === 0) {
    console.log("pong")
  }
  else if (i % 3 === 0) {
    console.log("ping")
  }
  else {
    console.log(i)
  }
}

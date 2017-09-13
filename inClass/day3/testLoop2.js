var fruit = [
  {
    name: "banana",
    isFuzzy: false
  },
  {
    name: "kiwi",
    isFuzzy: true
  }
]

for (var i = 0; i < fruit.length; i++) {
  if (fruit[i].isFuzzy === true){
       console.log("a " + fruit[i].name + " is fuzzy");
   }
}

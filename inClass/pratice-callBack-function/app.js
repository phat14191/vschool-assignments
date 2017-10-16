function every(arr, f){
  //return true or false wheter each element in the arr 'passed'
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if(!f(current)) {
    }
  }
  return true;
}

function some(arr, f){
  //return true or false whether at least one element in the arr 'passes'
  for (let i =0; i < arr.length; i++) {
    let current = arr[i];
    if(f(current)) {
      return true;
    }
  }
  return false;
}

//axample
let test = [1,2,3,4]
function functioncallback(num){
return typeof num === "number";
}

function callback2(num) {
  return num%2 === 0
}

console.log(every(test, callback2));


//// review
function map(arr, f) {
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    let newElement = f(arr[i], i);
    output.push(newElement);
    // output.push(f(arr[i], i));
  }
  return output;
}

let todoz = [
{
  title: "something",
  description: "whatever"
},
{
  title: "blah blah",
  description: "derp a derp"
}
  ];

  function(todo, index) {
    return "<li>" + tido.title + ", " + todo.description + "</li>"
  }

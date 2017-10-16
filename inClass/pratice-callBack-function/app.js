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
functioncallback(num){
return typeof num === "number";
}

function callback2(num) {
  return num%2 === 0
}

console.log(every([1,"2,3,4"], callback));

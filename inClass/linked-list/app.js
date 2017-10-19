// let c = {
//   next: null,
//   value: "Samantha"
// }
//
// let b = {
//   next: c,
//   value: "Tom"
// }

let linkedList = {
  next: {
    next: {
      next: null,
      value: "Samantha"
    },
    value: "Tom"
  },
  value: "Ben"
}



//x is start
function genlinkedList(n, x = 0) {
  if (n === 1) return {
      next: null,
      value: x
  }
  return {
    next: genlinkedList(n -1, x + 1),
    value: x
  }
}
console.log(JSON.stringify(genlinkedList(3)));

// console.log(linkedList.next.next.value);
//
// function find(n){
//   for(let i = 0; i < n; i++) {
//
//   }
// }
//
// function remove(n) {
//
// }
//
// function add(n, value) {
//
// }

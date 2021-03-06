const redux = require("redux");

// console.log(redux);

const state = {
  counter: 0
}

//tell this patcher add one
function addOne() {
  return {
    type: "ADD_ONE",
  };
}

//function subtract - 1
function subOne() {
  return {
    type: "SUB_ONE",
  };
}
//reset
function reset() {
  return {
    type: "RESET",
  };
}
//take action take prevState also take action
function reducer(prevState = state, action) { //prevState = state get it know what is the initial state is
  switch(action.type) {
    case "ADD_ONE":
      return {
        counter: prevState.counter + 1
      }
    case "SUB_ONE":
      return {
        counter: prevState.counter - 1
        // < 0 ? 0 : prevState.counter -1
      }
    case "RESET":
      return {
        counter: prevState.counter = 0
      }
    default:
      return prevState;
  }
}
// store take couple argument
const store = redux.createStore(reducer);
// subtract one
// console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
//action ==> dispatch ==> reducer ==> state ==> react view change


// thispatch is method on store
store.dispatch(addOne());
store.dispatch(addOne());

store.dispatch(subOne());
store.dispatch(subOne());
store.dispatch(subOne());

store.dispatch(reset());

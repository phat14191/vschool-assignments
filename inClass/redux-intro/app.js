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

//take action take prevState also take action
function reducer(prevState = state, action) { //prevState = state get it know what is the initial state is
  switch(action.type) {
    case "ADD_ONE":
      return {
        counter: prevState.counter + 1
      }
    default:
      return prevState;
  }
}


// store take couple argument
const store = redux.createStore(reducer);

// console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

// thispatch is method on store
store.dispatch(addOne());
store.dispatch(addOne());

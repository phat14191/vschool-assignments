const redux = require("redux");

// console.log(redux);

const state = {
  counter: 0
}

//tell this patcher add one
function custom(num) {
  return {
    type: "CUSTOM",
    value: num,
  };
}

//take action take prevState also take action
function reducer(prevState = state, action) { //prevState = state get it know what is the initial state is
  switch(action.type) {
    case "CUSTOM":
      return {
        counter: prevState.counter + action.value
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

store.dispatch(custom(20));

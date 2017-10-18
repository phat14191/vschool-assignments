const redux = require("redux");
// console.log(redux);
const state = {
  counter: 0,
  contactList: [],
}
function addName(name) {
  return {
    type: "ADD_NAME",
    value: name,
  }
}
//remove first name
function removeName(name) {
  return {
    type: "REMOVE_NAME",
    value: name,
  }
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
        contactList: prevState.contactList,
        counter: prevState.counter + action.value
      }
    case "ADD_NAME":
      return {             //array                  string
        contactList: [...prevState.contactList, action.value],
        counter: prevState.counter
      }
    case "REMOVE_NAME":
        //make a copy of prevState.contactList
        let newList = [...prevState.contactList];
        //remove the first item from the copy
        newList.shift();
        //set the new copy into state
        return {
          counter: prevState.count,
          contactList: newList
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
store.dispatch(addName("hello"));
store.dispatch(addName("Hi"));
store.dispatch(addName("Bob"));
store.dispatch(addName("Eric"));
store.dispatch(removeName());
store.dispatch(removeName());

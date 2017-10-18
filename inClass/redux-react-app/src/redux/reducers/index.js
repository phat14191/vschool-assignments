const state = {
  counter: 0
}

const reducer = function(prevState = state, action) {
  switch (action.type) {
    case "ADD_ONE":
      return {
        counter: prevState.counter + 1
      }
    case "MINUS_ONE":
      return {
        counter: prevState.counter - 1
      }
    default:
      return prevState
  }
}

export default reducer;

const state = {
  counter: 0,
  contactList: [
    {
      firstName: "Phat",
      lastName: "Nguyen",
      phone: "503-333-4444"
    },
    {
      firstName: "Ben",
      lastName: "Martin",
      phone: "503-222-1111"
    },
    {
      firstName: "Hello",
      lastName: "Hi",
      phone: "123-456-9999"
    }
  ]
}

const reducer = function(prevState = state, action) {
  switch (action.type) {
    case "ADD_ONE":
      return {
        ...prevState,
        counter: prevState.counter + 1
        // contactList: prevState.contactList
      }
    case "MINUS_ONE":
      return {
        ...prevState,
        counter: prevState.counter - 1
      }
    default:
      return prevState
  }
}

export default reducer;

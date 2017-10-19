//goal is to create a state containin a countries array
//make an action which allows us to add a country to the array
//make and action which alows us to delete a particular country from the array

import {countries} from "./countries";

const state = {
  countries: []
}

const reducer = function(prevState = state, action) {

  return {
  //    countries
  // }
  // let newCountries = [...prevState.countries]
  // switch(action.type) {
  //   case "ADD_COUNTRY":
  //     newCountries.push(action.countries)
  //     return {
  //       countries: newCountries
  //     }
  //   case "DELETE_COUNTRY":
  //     newCountries.splice(action.index, 1);
  //     return {
  //       countries: newCountries
  //     }
  //   default:
  //     return prevState
    countries: countries(prevState.countries, action)
    // ...prevState
  }
}


export default reducer;

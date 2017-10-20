import React from "react";
import CountriesComponent from "./Component";
import Country from "./Country";

import {connect} from "react-redux";

//get list of countries from redux state
//write a function that maps through the list and generates a new country component
//render list component and pass mapping function down, where it will be called

//add delete function to each country component

class CountriesContainer extends React.Component {
  constructor() {
    super();
    this.genList = this.genList.bind(this);
  }

  genList() {
    return this.props.countries.map((country, index) => {
      return <Country
              key = {country.name + index}
              country = {country}
            />
    })
  }

  render() {
    // console.log(this.props)
    return (
      <CountriesComponent genList = {this.genList}/>
    )
  }
}

//this function need to return an object
const mapStateToProps = (state) => {
  return {
    countries: state.countries
  }
}
                 //connect(callback)
export default connect(mapStateToProps, {})(CountriesContainer);

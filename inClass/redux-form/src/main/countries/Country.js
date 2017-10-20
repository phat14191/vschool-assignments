import React from "react";
import {connect} from "react-redux";
import {countries} from "../../redux/actions/"

function Country(props) {
  console.log(props);
  const style = {
    backgroundImage: `url(${props.country.imgUrl})`,
    backgroundSize: "cover",
    width: "50%",
    height: "100%"
  }
  return (
    <div style={style}>
      <h4>{props.country.name}</h4>
      <button onClick = {() => {props.deleteCountry(props.index)}}>Remove</button>
    </div>
  )
}

export default connect(null, countries)(Country);
//this countries here connect to actions index

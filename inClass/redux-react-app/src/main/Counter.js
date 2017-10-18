import React from "react";

import {connect} from "react-redux";
import {dispatch} from "redux";
import {addOne, minusOne} from "../redux/actions/index.js";


function Counter(props) {
  console.log(props);
  const styles = {
    width: "15%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    top: "50%",
    transform : "translateY(-50%)",
    fontSize: "120px",
    marginTop: "400px"
  }
  return (
    <div style = {styles}>
      <button onClick = {props.addOne}>+</button>
      <span>{props.counter}</span>
      <button onClick = {props.minusOne}>-</button>
    </div>
  )
}


//connect the dispatch with our action creator
//connect takes action(s) it passes them down to the component via props
//automaticaly cals the dispatch when thos actions get called

//connectvtakes two arguments, first is what we want from state as props,
//second is the set of action creators we want to dispatch from this component

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {addOne, minusOne})(Counter);
                                        //{addOne: addOne}

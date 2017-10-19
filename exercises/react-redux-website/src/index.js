import React from "react";
import reactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore} from "redux";
// import redux from "redux";
import reducer from "./redux/reducers/index.js";

import "./index.css";

import App from "./main/App";

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
})
// console.log(store.getState());

reactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById("root"));

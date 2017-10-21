import React from "react";
import reactDOM from "react-dom";
// import {Provider} from "react-redux";
// import {createStore} from "redux";
// import reducer from "./redux/reducers/"

import App from "./main/App";

// const store = createStore(reducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

reactDOM.render(<App/>, document.getElementById("root"));
// reactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById("root"));

import React from "react";
import Navbar from "./Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";

import {Switch, Route} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <div className = "app-wrapper">
        <Navbar />
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contact" component = {Contact}/>
          <Route path = "/services" component = {Services}/>
        </Switch>
      </div>
    )
  }
}

export default App;
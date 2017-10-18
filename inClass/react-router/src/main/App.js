import React from "react";
import Navbar from "./Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ServicesContainer from "./views/services/Container";

import {Switch, Route} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <div className = "app-wrapper">
        <Navbar />
        <Switch>
          {/* exact checking the patch name url exact string, let them know they working the same */}
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contact" component = {Contact}/>
          <Route path = "/services" component = {ServicesContainer}/>
        </Switch>
      </div>
    )
  }
}

export default App;

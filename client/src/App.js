import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavTabs from "./NavTabs";
import Map from "./components/Map"

class App extends Component {
  render() {
    return (
      <Router>
        <NavTabs />
          <Route exact path="/gyms" component={Map} />
      </Router>
    );
  }
}

export default App;

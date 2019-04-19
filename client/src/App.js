import React, { Component } from "react";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./NavTabs";
import Login from "./login/renderer";
import Calendar from "./calendar/calrenderer";


class App extends Component {
  render() {
    return (
      <Router>
        <NavTabs />

        <Route path = "/login" component = {Login} />
        <Route path = "/calendar" component = {Calendar} />
          <Route exact path="/gyms" component={Map} />

      </Router>
    );
  }
}

export default App;

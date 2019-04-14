import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./NavTabs";

class App extends Component {
  render() {
    return (
      <Router>
        <NavTabs />
      </Router>
    );
  }
}

export default App;

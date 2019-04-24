import React, { Component } from "react";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./NavTabs";
import Map from "./components/Map"
import CompetitorCard from "./components/CompetitorCard";
import Profile from "./components/Pages/Profile"
import Login from "./login/renderer";
import Calendar from "./calendar/calrenderer";


import Form from "./components/Form"

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/gyms" component={Map} />
        <Route exact path="/competitors" component={CompetitorCard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route path = "/calendar" component = {Calendar} />
        
      </div>
    </Router>
  );

}

export default App;

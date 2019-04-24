import React, { Component } from "react";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./NavTabs";
import Map from "./components/Map";
import CompetitorCard from "./components/CompetitorCard";
import Profile from "./components/Pages/Profile";
//import NoMatch from "./pages/NoMatch";
import Form from "./components/Form";
import CompetitorList from "./components/competitorlist"
//import Detail from "./components/Detail"i
import Login from "./login/renderer";
import Calendar from "./calendar/calrenderer";


// const Title = styled.h1`
//   color: #fff;
//   font-size: 18px;
//   opacity: 0.5;
//   text-transform: uppercase;
//   font-weight: 900;
//   text-align: center;
// `;

// export const SubmitButton = styled.button`
//   width: 325px;
//   height: 51px;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   color: #fff;
//   font-weight: 600;
//   background: linear-gradient(123.43deg, #d74cee 7.72%, #4925bf 90.97%);
//   border-radius: 50px;
//   transition: 0.2s ease;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
// `;




function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/gyms" component={Map} />
        <Route exact path="/competitors" component={CompetitorCard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/form" component={Form} />
      </div>
    </Router>
  );
}

export default App;

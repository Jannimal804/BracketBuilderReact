import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/">
        <img src={process.env.PUBLIC_URL + '/favicon.ico'} width="40" height="30" hspace="5" class="d-inline-block align-top" alt=""></img>
        Bracket Builder
      </a>
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Competitors
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
          Upcoming Events
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/gyms"
          className={window.location.pathname === "/gyms" ? "nav-link active" : "nav-link"}>
          Find a Gym
        </Link>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;
import React, { Component } from 'react';
import "./style.css";

function CompetitorCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Belt:</strong> {props.belt} 
            </li>
            <li>
              <strong>Weight Class:</strong> {props.weight}
            </li>
          </ul>
        </div>
        <span onClick={() => props.removeCompetitor(props.id)} className="remove">
          𝘅
        </span>
      </div>
    );
  }
  
  export default CompetitorCard;
  
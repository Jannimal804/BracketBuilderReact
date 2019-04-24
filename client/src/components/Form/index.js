import React, { Component } from "react";
import "./style.css";
import { DropdownButton } from 'react-bootstrap';
import {Dropdown, Col, Form as FormComponent } from 'react-bootstrap';
//import {DropdownItem} from 'react-bootstrap'


class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    beltLevel: "",
    weightClass: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleDropdownSubmit = event => {
    
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
      beltLevel: "", 
      weightClass: ""
    });
  };


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />

          <FormComponent.Group as={Col} controlId="formGridState">
          <FormComponent.Label>Belt Level</FormComponent.Label>
          <FormComponent.Control as="select" name="beltLevel" onChange={this.handleInputChange}>
          <option>White</option>
          <option>Blue</option>
          <option>Purple</option>
          <option>Brown</option>
          <option>Black</option>
          </FormComponent.Control>
          </FormComponent.Group>

          <FormComponent.Group as={Col} controlId="formGridState">
          <FormComponent.Label>Weight Level</FormComponent.Label>
          <FormComponent.Control as="select" name="weightClass" onChange={this.handleInputChange}>
          <option>Light Feather – 53.5 kg (118 lbs)</option>
          <option>Feather – 58.5 kg (129 lbs</option>
          <option>Light – 64 kg (141 lbs)</option>
          <option>Middle – 69 kg (152 lbs)</option>
          <option>Medium Heavy – 74 kg (163 lbs)</option>
          <option>Heavy – No Maximum Weight</option>
          </FormComponent.Control>
          </FormComponent.Group>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
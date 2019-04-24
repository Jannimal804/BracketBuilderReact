import React from "react";
import reactDom from "react-dom";

import "./loginSty.css";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="root-container">

                <div className="box-controller">
                    <div className="controller">
                        Login
                    </div>
                    <div className="controller">
                        Register
                    </div>
                </div>

                <div className="box-container">

                </div>

            </div>

        );
    }
}

class LoginBox extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {

    }

    render() {
        return (
        <div className="innner-container">
            <div className="header">
                Register
            </div>
            <div className="box">
                <div className="input-group">
                    <label htmlFor="username">Username</label>  
                    <input type="text" name="username" className="login-input" placeholder="Username"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>  
                    <input type="password" name="password" className="login-input" placeholder="Password"/>
                </div>
                <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>            
            </div>        
        
        </div>
        );  

    }
}
class RegisterBox extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {

    }

    render() {
        return (
        <div className="innner-container">
            <div className="header">
                Register
            </div>
            <div className="box">
                <div className="input-group">
                    <label htmlFor="username">Username</label>  
                    <input type="text" name="username" className="login-input" placeholder="Username"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>  
                    <input type="password" name="password" className="login-input" placeholder="Password"/>
                </div>
                <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>
            
            </div>        
        
        </div>
        ); 

    }
}

 reactDom.render(<Login />, document.getElementById("root"));

import React from "react";
import reactDom from "react-dom";

import "./loginSty.css";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoginOpen: true, isRegisterOpen: false};
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }
    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }
    render() {
        return (
            <div className="root-container">

                <div className="box-controller">
                <div id="login" className={(this.state.isLoginOpen ? "selected-controller" : "")} 
                    onClick={this.showLoginBox.bind(this)}>
                    Login
                    </div>
                    
                    <div id="Register" className={(this.state.isRegisterOpen ? "selected-controller" : "")} 
                    onClick={this.showRegisterBox.bind(this)}>
                    Register
                    </div>
                </div>

                <div className="box-container">
                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isRegisterOpen && <RegisterBox />}

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
                Login
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

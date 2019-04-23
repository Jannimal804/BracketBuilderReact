import React from "react";
import reactDom from "react-dom";


export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <div> Hello World</div>

    }
}

reactDom.render(<Login />, document.getElementById("root"));
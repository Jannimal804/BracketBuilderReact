import React from "react";
import reactDom from "react-dom";


export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <iframe name="cw_frame" width="100%" height="1200" src="https://www.calendarwiz.com/calendars/calendar.php?crd=bracketbuilder&nolog=1&cid[]=all">Your browser does not support inline frames or is currently configured not to display inline frames.</iframe>

    }
}

reactDom.render(<Calendar />, document.getElementById("root"));
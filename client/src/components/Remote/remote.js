    
import React from "react"
import API from "../../utils/API";

class Remote extends React.Component {
    state = {
        competitors: []
    }


    loadCompetitors = () => {
        API.getRemote().then(res => this.setState({ competitors: res.data }))
            .catch(err => console.log(err))

    }
    componentDidMount = () => {
        this.loadCompetitors();

    }


    render() {
        return (
            <div>
                CompetitorList 
            </div>
        )
    }
}

export default Remote;
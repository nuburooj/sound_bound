import React from "react"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(e){
    //     e.preventDefault();
    //     this.props.logout
    // }

    render(){
        return(
            <div className="dashboard-main">
                <p>this is the dashboard Page</p>
                <button className="logout-btn" onClick={this.props.logout}>
                    logout
                </button>
            </div>
        )
    }
}
export default Dashboard;
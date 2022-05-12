import React from "react"
import { Link } from "react-router-dom";
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
                <Link className="redirect-stocks-page" to="/stocks">
                    Stocks
                </Link>
            </div>
        )
    }
}
export default Dashboard;
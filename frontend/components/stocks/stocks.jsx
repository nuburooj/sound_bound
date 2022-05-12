import React from "react"
import { Link } from "react-router-dom";
class Stocks extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     stocks: this.props.stocks
        // }
        // this.renderStocks = this.renderStocks.bind(this)
    }

    componentDidMount(){
        this.props.getAllStocks()
        const stocks = Object.values(this.props.stocks);
        if (stocks.length > 0) {
            this.setState({
                stocks: this.props.stocks
            })
        }
    }

    // renderStocks() {
    //     // debugger
    //     const stocks = Object.values(this.props.stocks);
    //     if (stocks.length > 0) {
    //         return (
    //             <ul>
    //               {stocks.map((stock, i) => (
                    // <li key={i}>
                    //   {stock.tikr}
                    // </li>
    //               ))}
    //               {/* <li>Stocks will go here</li> */}
    //             </ul>
    //         )
    //     } else {
    //         return (
    //             <div>No stocks :(</div>
    //         )
    //     }
    // }

    renderStocks() {
        const stocks = Object.values(this.props.stocks);
        return(
            <ul>
                {stocks.map((stock, i) => (
                    <li key={i}>
                        {stock.tikr}
                        <p>Stocks ^^^</p>
                  </li>
                ))}
            </ul>
        )
    }


    render() {
        // debuggers
        const stocks = Object.values(this.props.stocks)
        // debugger
        return(
            <div className="stocks-main">
                <p>this is the Stocks Page</p>
                <Link className="redirect-dashboard-page" to="/dashboard">
                    Dashboard
                </Link>
                {stocks.length > 0 ? this.renderStocks() : <p>No Stocks :(</p>}
            </div>
        )
    }
}
export default Stocks;
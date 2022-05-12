import React from "react";
import { connect } from "react-redux";
import { getAllStocks, getStock } from "../../actions/stock_actions";
import Stocks from "./stocks";

const mapStateToProps = ({stocks}) => {
  return {
    stocks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStocks: () => dispatch(getAllStocks()),
    getStock: (id) => dispatch(getStock(id)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
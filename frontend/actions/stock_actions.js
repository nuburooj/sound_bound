import * as APIUtil from "../utils/stock/stock_api_util";

export const RECEIVE_ALL_STOCKS = "RECEIVE_ALL_STOCKS";
export const RECEIVE_STOCK = "RECEIVE_STOCK";

export const receiveAllStocks = (stocks) => {
    return {
        type: RECEIVE_ALL_STOCKS,
        stocks
    }
}

export const receiveStock = (stock) => {
    return {
        type: RECEIVE_STOCK,
        stock
    }
}

export const getAllStocks = () => (dispatch) => {
    // debugger
    return APIUtil.getAllStocksApi().then(
      (stocks) => dispatch(receiveAllStocks(stocks)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const getStock = () => (dispatch) => {
    return APIUtil.getStockApi(id).then(
      (stock) => dispatch(receiveStock(stock)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};
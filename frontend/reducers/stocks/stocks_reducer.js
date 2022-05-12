import {
    RECEIVE_ALL_STOCKS,
    RECEIVE_STOCK,
} from "../../actions/stock_actions";

const stocksReducer = (initialState = {}, action) => {
    Object.freeze(initialState);
    switch (action.type) {
      case RECEIVE_ALL_STOCKS:
        return { stocks: action.stocks };
      case RECEIVE_STOCK:
        return {stock: action.stock};
      default:
        return initialState;
    }
  };
  
  export default stocksReducer;
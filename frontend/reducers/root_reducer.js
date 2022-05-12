import { combineReducers } from 'redux';
// import entitiesReducer from './entities_reducer';
import sessionReducer from './sessions/sessions_reducer';
import errorsReducer from './errors/errors_reducer'; 
import stocksReducer from './stocks/stocks_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    stocks: stocksReducer
})

export default rootReducer;
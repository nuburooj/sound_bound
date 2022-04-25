import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer'
// import stockErrorsReducer from '../reducers/stock_errors_reducer';
// import assetErrorReducer from './asset_error_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
})

export default errorsReducer;
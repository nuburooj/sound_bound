import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store';

// Testing
import { getAllStocks } from './actions/stock_actions';
// import {logout} from './utils/session/session_api_util'
// Testing


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded ;;;;;;")
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root)
})

// Testing
window.getAllStocks = getAllStocks 
// window.logout = logout;
// Testing
import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root'
import configureStore from './store';

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded")
    // const root = document.getElementById('root');
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = {
    //         entities: {
    //         users: { [window.currentUser.id]: window.currentUser }
    //         },
    //         session: { id: window.currentUser.id }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore()
    // }
    
    // // Testing 
    // // window.getState = store.getState;
    // // window.dispatch = store.dispatch;
    // // Testing 

    // ReactDOM.render(<Root store={store} />, root)
})
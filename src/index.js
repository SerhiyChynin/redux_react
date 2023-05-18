import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// action = {type: '', payload: '?'}  //action - JS обьект с обязательным полем type

const defaultState = {
    cash: 0
}

const reducer = (state = defaultState, action) => {    //reducer это обычная функция JS принимает state, action
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload } // изначально состояние в редаксе неизменно, мы каждый раз должны возвращать новый обьект 
        case "GET_CASH":    
            return {...state, cash: state.cash - action.payload }
        default:
            return state;
    }
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

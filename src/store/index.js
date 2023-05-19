import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducers';
import { countReducer } from './countReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk'; 

const rootReducer = combineReducers({    //создали два отдельных редюсера и создали один обьединяющий редюсер и передали его в стор и передали в провайдер

    cash: cashReducer,
    customers: customerReducer,
    count: countReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducers';
import { countReducer } from './countReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk'; 
import { userReducer } from './userReducer';
import createSagaMiddleware from 'redux-saga';
import { countWatcher } from '../saga/countSaga';
import { rootWatcher } from '../saga/index';

const sagaMiddleware = createSagaMiddleware(); 

const rootReducer = combineReducers({    //создали два отдельных редюсера и создали один обьединяющий редюсер и передали его в стор и передали в провайдер

    cash: cashReducer,
    customers: customerReducer,
    count: countReducer,
    users: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)
// , composeWithDevTools(applyMiddleware(thunk))

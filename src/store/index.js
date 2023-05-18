import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({    //создали два отдельных редюсера и создали один обьединяющий редюсер и передали его в стор и передали в провайдер

    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());

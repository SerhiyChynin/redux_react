

const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {    //reducer это обычная функция JS принимает state, action
    switch (action.type) {
        case "ADD_CUSTOMER":
            return {...state, cash: state.cash + action.payload } // изначально состояние в редаксе неизменно, мы каждый раз должны возвращать новый обьект 
        case "GET_CUSTOMERS":    
            return {...state, cash: state.cash - action.payload }
        default:
            return state;
    }
}
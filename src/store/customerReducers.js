

const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"; //типам создаем константы и подставляем,, так меньшая вероятность ошибиться, среда подскажет при ошибке
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"; 
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {    //reducer это обычная функция JS принимает state, action
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] } // изначально состояние в редаксе неизменно, мы каждый раз должны возвращать новый обьект 
        case REMOVE_CUSTOMERS:    
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
        case "REMOVE_CUSTOMERS_BTN":  
            return {...state, customers: state.customers.filter(customer => customer.name !== action.payload) }
        default:
            return state;
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})
export const manyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
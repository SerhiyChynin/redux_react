

const initialState = {
    count: 0
} 
export const INCREMENT = "INCREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";


export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
    
        case DECREMENT:
            return {...state, count: state.count - 1};
     
        default:
            return state;
    }
}

export const incrementAction = (payload) => ({type: INCREMENT, payload}) //action функция которая возвращает обьект
export const asyncIncrementAction = (payload) => ({type: ASYNC_INCREMENT, payload}) 
export const decrementAction = (payload) => ({type: DECREMENT, payload}) 
export const asyncDecrementAction = (payload) => ({type: ASYNC_DECREMENT, payload}) 
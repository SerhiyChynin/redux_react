

const initialState = {
    count: 0
} 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + action.payload};
        case DECREMENT:
            return {...state, count: state.count - action.payload};
     
        default:
            return state;
    }
}

export const incrementAction = (payload) => ({type: INCREMENT, payload}) 
export const decrementAction = (payload) => ({type: DECREMENT, payload}) 
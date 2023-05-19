

const initialState = {
    users: []
}
export const GET_USERS = "GET_USERS";
export const ASYNC_GET_USERS = "ASYNC_GET_USERS";

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
         default:
            return state;
    }
}

export const userAction = (payload) => ({ type: GET_USERS, payload });
export const asyncUserAction = () => ({ type: ASYNC_GET_USERS});

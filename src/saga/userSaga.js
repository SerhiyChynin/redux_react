import { put, takeEvery, call } from 'redux-saga/effects';
import { asyncUserAction, userReducer } from '../store/userReducer';
import { ASYNC_GET_USERS } from '../store/userReducer';

const fetchUser = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

function* fetchUserWorker() {
    const data = yield call(fetchUser);
    const json = yield call(()=> new Promise(res => res(data.json())))
    console.log(json);
    yield put(asyncUserAction(json))
}

export function* userWatcher() {
    yield takeEvery(ASYNC_GET_USERS, fetchUserWorker)
}
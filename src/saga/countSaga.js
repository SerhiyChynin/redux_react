import { put, takeEvery} from 'redux-saga/effects';
import {ASYNC_INCREMENT, INCREMENT, DECREMENT, incrementAction } from '../store/countReducer';
// import {}


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementAction())
}

function* decrementWorker() {
    
}

export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker ) //первый парам тип экшена за которым следить, вторым парам worker будет работать когда экшен с таким типом(1парам) будет задиспатчен
}
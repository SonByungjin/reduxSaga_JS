import axios from 'axios';
import {delay, put, takeEvery} from 'redux-saga/effects';
import {fetch, getData, error} from '../store/actions';
import {ADDNUMBER, GETDATA, ERROR} from '../constants';

function* addSaga(){
    const data = yield axios.get(`http://0.0.0.0:9002/api/v2/applogic/private/withdraws`)
    yield put(fetch());
    yield delay(1000);
    yield put(getData(Number(data.data.limit)));
};

export function* CntSage(){
    yield takeEvery(ADDNUMBER,addSaga);
};
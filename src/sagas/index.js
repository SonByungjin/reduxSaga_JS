import { all } from 'redux-saga/effects';
import {CntSage} from './saga';

export function* rootSaga(){
    yield all ([CntSage()]);
};
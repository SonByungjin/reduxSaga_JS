import {ADDNUMBER, GETDATA, ERROR, FETCH} from '../../constants';

export const fetch = ()=>{
    return {
        type: FETCH,
    }
}

export const plus = (item) => {
    return {
        type: ADDNUMBER,
        coin: item,
    };
};

export const getData = (val) => {
    return {
        type: GETDATA,
        value:val,
    };
};

export const error = () => {
    return {
        type: ERROR,
    };
};
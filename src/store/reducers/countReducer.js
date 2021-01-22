import {ADDNUMBER, GETDATA, ERROR, FETCH} from '../../constants';

const InitialValue = {
    loading: false,
    number : 0,
};

export function countReducer (state = InitialValue, action) {
    switch(action.type){
        case FETCH:
            return {
                ...state,
                loading: true,
            }
        case ADDNUMBER:
            return {
                ...state,
                number: state.number + action.coin,
            }
        case GETDATA:
            return {
                ...state,
                loading:false,
                number: state.number + action.value,
            }
        case ERROR:
            return;
        default:
            return state;
    }
};

import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {plus} from '../../store/actions';

const Limit = () => {
    const dispatch = useDispatch();
    const reduxCnt = useSelector((store)=>store.countReducer);

    const addNumber = () =>{
        dispatch(plus(1));
    };

    return (
        <div>
            <button onClick={addNumber}>+</button>
            <button>-</button>
            <h2>{reduxCnt.number}</h2>
            <h2>{reduxCnt.loading?'로딩중':'완료'}</h2>
        </div>
    );
};

export default Limit;
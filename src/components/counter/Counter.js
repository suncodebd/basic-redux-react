import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/action/Action';

function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncremet = () => {
        dispatch(incrementCounter());
    };
    const handleDecremet = () => {
        dispatch(decrementCounter());
    };
    const handleReset = () => {
        dispatch(resetCounter());
    };

    return (
        <div>
            <h1>React Redux</h1>
            <h2>Count: {count}</h2>
            <button type="button" onClick={handleIncremet}>
                incress
            </button>
            <button type="button" onClick={handleDecremet}>
                Dcress
            </button>
            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}

export default Counter;

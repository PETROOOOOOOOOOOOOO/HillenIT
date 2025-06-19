import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(decrement())} style={{ fontSize: '20px' }}>−</button>
            <button onClick={() => dispatch(increment())} style={{ fontSize: '20px', marginLeft: '10px' }}>+</button>
        </div>
    );
}

import React from "react";

// useState
// 1. Init state: 0
// 2. Action: increase, decrease

// useReducer
// 1. Init state: 0
// 2. Action: increase, decrease
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0;

// Actions
const INCREASE_ACTION = 'INCREASE';
const DECREASE_ACTION = 'DECREASE';

// Reducer
const reducer = (state, action) => {
    switch (action) {
        case INCREASE_ACTION:
            return state + 1;
        case DECREASE_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action');
    }
}

function AppReducer() {
    const [count, dispatch] = React.useReducer(reducer, initState);

    return (
        <div className="container">
            <h1>AppReducer</h1>
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={() => dispatch(INCREASE_ACTION)}>Increase</button>
            <button className="btn btn-danger" onClick={() => dispatch(DECREASE_ACTION)}>Decrease</button>
        </div>
    )
}

export default AppReducer;
import React from "react";

// useReducer
// 1. Init state:
const initState = {
    job: '',
    jobs: JSON.parse(localStorage.getItem('jobs')) ?? []
}

// 2. Action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// 3. Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter((_, index) => index !== action.payload)
            }
        default:
            throw new Error('Invalid action');
    }
}

// 4. Dispatch

function ToDoAppReducer() {
    const [state, dispatch] = React.useReducer(reducer, initState);

    const {job, jobs} = state;
    const inputRef = React.useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="container">
            <h1>ToDo App</h1>
            <input
                className="w-full block flex-1 border-2 rounded-b bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                ref={inputRef}
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value))
                }}
                onKeyDown={handleKeyDown}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
                Add
            </button>
            <h1>List</h1>
            <ol className="list-none">
                {jobs.map((job, index) => (
                    <li className="flex my-2" key={index}>
                        <div className="ms-2 me-auto">
                            {job}
                        </div>
                        <button className="badge text-bg-danger rounded-pill"
                                onClick={() => dispatch(deleteJob(index))}>Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoAppReducer;
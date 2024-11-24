import React from "react";
import reducer, {initState} from "./reducer";
import {addJob, setJob, deleteJob} from "./actions";
import logger from "./logger";

function TodoApp() {
    const [state, dispatch] = React.useReducer(logger(reducer), initState);

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

export default TodoApp;
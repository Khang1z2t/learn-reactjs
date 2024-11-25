import {useStore, todoInputRef, actions} from './store';
import React from "react";

function AppGlobalState() {
    const [state, dispatch] = useStore();
    const {todoInput, todos} = state;


    const handleSubmit = () => {
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''));
        todoInputRef.current.focus();
        localStorage.setItem('jobs', JSON.stringify(todos));
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
                ref={todoInputRef}
                value={todoInput}
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
                onKeyDown={handleKeyDown}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
                Add
            </button>
            <h1>List</h1>
            <ol className="list-none">
                {todos.map((todo, index) => (
                    <li className="flex my-2" key={index}>
                        <div className="ms-2 me-auto">
                            {todo}
                        </div>
                        <button className="badge text-bg-danger rounded-pill"
                                onClick={() => dispatch(actions.deleteTodo(index))}>Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default AppGlobalState;
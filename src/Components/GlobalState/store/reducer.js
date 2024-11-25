import {ADD_TODO, DELETE_TODO, SET_TODO_INPUT} from "./constants";

const initState = {
    todoInput: '',
    todos: JSON.parse(localStorage.getItem('jobs')) ?? [],
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)

            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action');
    }
}

export {initState};
export default reducer;
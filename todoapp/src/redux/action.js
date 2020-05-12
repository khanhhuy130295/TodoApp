import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from "./actionType";

let nextTodoId = 0;

export const addTodo = (content) => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content
        }
    }
}

export const toggleTodo = (id)=>{
    return {
        type: TOGGLE_TODO,
        payload: {id}
    }
}

export const setFilter = (filter)=>{
    return {
        type: SET_FILTER,
        payload: {filter}
    }
}
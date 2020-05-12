import {VISIBILITY_FILTERS} from '../constants';

export const getTodoState = (store)=>{
    return store.todo;
}

export const getTodoList = (store)=>{
    return getTodoState(store) ? getTodoState(store).allIds : [];
}

export const getTodoById = (store, id)=>{
    return getTodoState(store) ? {...getTodoState(store).byIds[id],id} : {};
}


/**
 * select from store  combining information form multiple reducer 
 */
export const getTodo = (store)=>{
    return getTodoList(store).map((id)=>{
        return getTodoById(store, id);
    });
}

export const getTodoByVisibilityFilter = (store, visibilityFilter)=>{
    const allTodo = getTodo(store);
    switch(visibilityFilter){
        case VISIBILITY_FILTERS.COMPLETED: {
            return allTodo.filter((todo)=>{
                return todo.completed;
            });
        }
        case VISIBILITY_FILTERS.INCOMPLETE: {
            return allTodo.filter((todo)=>{
                return !todo.completed;
            })
        }
        case VISIBILITY_FILTERS.ALL:
        default: return allTodo;
    }
};
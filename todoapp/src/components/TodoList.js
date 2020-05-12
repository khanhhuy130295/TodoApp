import React from 'react';
import {connect} from 'react-redux';
import {VISIBILITY_FILTERS} from '../constants';
import {getTodoByVisibilityFilter} from '../redux/selector';
import Todo from './Todo';
const TodoList = ({todo})=>{
    return (
        <ul className="todo-list">
            {todo && todo.length ? todo.map((value, idx)=>{
               return <Todo todo={value} key={`todo-${value.id}`}/>
            }): "No todo, yay!"}
        </ul>
    )
};

const mapStateToProp = (state)=>{
    const {visibilityFilter} = state;
    const todo = getTodoByVisibilityFilter(state, visibilityFilter);
    return {todo};
}

export default connect(mapStateToProp)(TodoList)
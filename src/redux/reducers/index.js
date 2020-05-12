import {combineReducers}  from 'redux';
import visibilityFilter from './visibilityFilter';
import todo from './todo';

export default combineReducers({todo, visibilityFilter});
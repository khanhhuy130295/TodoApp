import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './container/AddTodo';
import TodoList from './components/TodoList';
import Visibility from './components/VisibilityFilters';
function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      <Visibility/>
    </div>
  );
}

export default App;

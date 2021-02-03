import React from 'react'
import './App.css';

// Import Constans
import TodoList from './Components/TodoList/TodoList'

const App = () => {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  )
}

export default App;

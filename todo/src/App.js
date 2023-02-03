import './App.css';
import ToDoList from './todos/ToDoList';

import React from 'react'

const App = () => {
  return (
    <div>
      <div className='Main'>
        <ToDoList />
      </div>
    </div>
  )
}

export default App
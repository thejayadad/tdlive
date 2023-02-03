import React from 'react'
import "./ToDoListItem.css"

const ToDoListItem = ({todo}) => {
  return (
    <div className='todo-item'>
      <div className='box'>
      <h3>{todo.text}</h3>
      </div>
      <div className='btn-container'>
        <button className='complete'><i class="fas fa-check"></i></button>
        <button className='remove'><i id='minus' class="fas fa-minus-circle"></i></button>
      </div>
    </div>
  )
}

export default ToDoListItem
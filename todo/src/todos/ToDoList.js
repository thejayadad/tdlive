import React from 'react'
import ToDoListItem from './ToDoListItem'
import "./ToDoList.css";
import NewToDoForm from "./NewToDoForm";

const ToDoList = ({todos = [{text: "hi"}]}) => {
  return (
    <div className='list-wrapper'>
      <NewToDoForm />
      {todos.map(todo=> <ToDoListItem todo = {todo} />)}

    </div>

  )
}

export default ToDoList
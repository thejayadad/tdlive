import React, {useState} from 'react'
import "./NewToDoForm.css"


const NewToDoForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='new-todo-form'>
      <input
      className='new-todo-input'
      type="text"
      placeholder='New ToDos'
      />
      <button className='btn'><i class="fas fa-plus-circle"></i></button>


    </div>
  )
}

export default NewToDoForm
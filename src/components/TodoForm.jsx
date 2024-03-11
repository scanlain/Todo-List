import React, { useState } from 'react';

function TodoForm({addTodo}) {

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(value);
        addTodo(value);
        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input' 
        placeholder='What is the task today?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        />
        <button
        type="submit"
        className='todo-btn'
        >
            Add Task
        </button>
    </form>
  )
}

export default TodoForm
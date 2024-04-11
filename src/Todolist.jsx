import React, { useState } from 'react';

function Todolist() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container ">
      <h1 className='todo-list-header'>To-Do List</h1>
      <form className="todo-list-form" onSubmit={handleSubmit}>
        <input className="todo-list-input"
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="todo-list-item" type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="todo-list">
            {task}
            <button className="todo-list-delete" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;

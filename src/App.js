
import './App.css';
import React, { useState } from 'react';

const App=() => {
  // Declare a state variable for the to-do list items
  const [todos, setTodos] = useState([]);
  // Declare a state variable for the input text
  const [inputText, setInputText] = useState('');

  // Function to handle input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  // Function to handle to-do item removal
  const handleTodoRemove = (todo) => {
    const updatedTodos = todos.filter(item => item !== todo);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className='headings'>To-Do List</h1>
      <div className='fbody'>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className='input'
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button className='b1' type="submit">Add</button>
      </form>
      </div>
      <br/>
      <h2 className='headings'>Here is your Added List :)</h2><br/>
      <div className='foot'>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='b1' onClick={() => handleTodoRemove(todo)}>Remove</button><br/>
          </li> 
        ))}
      </ul>
      </div>
    </div>
  );
};

export default App;

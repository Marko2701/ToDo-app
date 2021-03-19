import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({
  edit,
  onSubmit
}) => {
  const [input, setInput] = useState(edit ? edit.value : '');
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-form__input todo-form__input-edit'
          />
          <button 
            onClick={handleSubmit} 
            className='todo-form__button todo-form__button-edit'
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-form__input'
            ref={inputRef}
          />
          <button 
            onClick={handleSubmit} 
            className='todo-form__button'
          >
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

TodoForm.propTypes = {
  edit: PropTypes.object,
  onSubmit: PropTypes.func
};

export default TodoForm;


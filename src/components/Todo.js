import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ 
  todos, 
  completeTodo, 
  removeTodo, 
  updateTodo
 }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo todo__complete' : 'todo'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='todo__icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='todo__delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='todo__edit-icon'
        />
      </div>
    </div>
  ));
};

Todo.propTypes = {
  todos: PropTypes.array,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func
};

export default Todo;
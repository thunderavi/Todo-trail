import React from 'react';

export const TodoItem = () => {
  return (
    <li className='todo-item'>
      <span>
        <input type='checkbox' />
        <span className='todo-item-text'>Eat</span>
      </span>
      <p>...</p>
    </li>
  );
};

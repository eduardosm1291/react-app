import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../../TodoContext'
const estylos = {
  color: 'red',
  backgroundColor: 'yellow',
};


function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
      <h2 className ="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOS</h2>
    );
  }

export  {TodoCounter};

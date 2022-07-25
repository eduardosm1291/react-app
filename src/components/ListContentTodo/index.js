import React from 'react';
import {TodoProvider} from '../../TodoContext'
function ListContentTodo () {
    return  (
        <TodoProvider>
          <p>componente list</p>
        </TodoProvider>
    
      );
}

export {ListContentTodo}
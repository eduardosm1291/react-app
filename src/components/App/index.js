import React from 'react';
import {AppUi} from './AppUi';
import {TodoProvider} from '../../TodoContext';
const defaultTodo = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];



function App() {

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>

  );
}

export default App;

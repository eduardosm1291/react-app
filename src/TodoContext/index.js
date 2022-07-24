import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider (props) {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const {item: groupTodos, saveItem: saveGroupTodos, loading: loadinGroup, error: errorGroup} = useLocalStorage('GroupTodos_V1', []);
  const [openModal, setOpenModal] = React.useState(false);
  const [groupSelect, setGroupSelect] = React.useState(false);
  const [searchValue, setSearchValue]  =  React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
 
  let searchTodos = [];
  if (!searchValue.length >=1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  // Función para añadir un nuevo Grupo de Todos
  const addGroupTodo= (groupTodo) => {
    const newGroupTodos = [...groupTodos];
    newGroupTodos.push(
      groupTodo
    )
    saveGroupTodos(newGroupTodos);
  }
  const completeTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos =[...todos];
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos =[...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  }
  return (
    <TodoContext.Provider value= {{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        completeTodo,
        searchTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        addGroupTodo,
        addTodo,
        groupTodos
      }}>
      {props.children}
    </TodoContext.Provider>
  )
}


export {TodoContext, TodoProvider};



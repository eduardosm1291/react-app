import React from 'react';
import {TodoCounter} from '../TodoCounter'
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import{TodoSearch} from '../TodoSearch';
import {TodoContext} from '../../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {Loader} from '../Loader';
import {GroupTodo} from '../GroupTodo';
import {GroupTodoForm} from '../GroupTodoForm';
import {GroupTodoList} from '../GroupTodoList';
import {GroupTodoItem} from '../GroupTodoItem';
import {Header} from '../header';
import { Routes, Route, useParams } from 'react-router-dom';
const border = {
  margin: '0 24px',
  marginTop: '24px'
}




function AppUi() {

    return (
      

    <React.Fragment>
    
      

        {/* <TodoCounter/>
        <div style={border}>
          
        <TodoSearch/>
       
        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && (
            <Loader></Loader>
          )}
          {(!loading && !searchTodos.length) && <p>¡Crea tu primer TODO!</p>}
          
          {searchTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
         {openModal && (
          <Modal>
              <TodoForm></TodoForm>
            </Modal>)
          }

                <CreateTodoButton
                setOpenModal = {setOpenModal}
                ></CreateTodoButton>
        </div> */}
      </React.Fragment>);
}

export {AppUi};

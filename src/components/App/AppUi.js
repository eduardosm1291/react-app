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
const border = {
  margin: '0 24px',
  marginTop: '24px'
}




function AppUi() {
  const {
    groupTodos,
    openModal,
    setOpenModal
    } = React.useContext(TodoContext);
    return (

    <React.Fragment>
      <Header></Header>
       <GroupTodoList>
            {
            
            groupTodos.map(groupTodo => {
              console.log(groupTodo)
              return (
                
            <GroupTodoItem
              key={groupTodo.titulo}
              text={groupTodo.titulo}
              icon = {groupTodo.icon}
             
            />
            
          )
        })
        
          }
            </GroupTodoList>
        {openModal && (
            <Modal>
                <GroupTodoForm></GroupTodoForm>
              </Modal>)
            }
  
                  <CreateTodoButton
                  setOpenModal = {setOpenModal}
                  ></CreateTodoButton>
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

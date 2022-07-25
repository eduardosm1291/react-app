import React from 'react';
import {Modal} from '../Modal';
import {GroupTodoForm} from '../GroupTodoForm';
import {TodoContext} from '../../TodoContext';
import {CreateTodoButton} from '../CreateTodoButton';
import {GroupTodoList} from '../GroupTodoList';
import {GroupTodoItem} from '../GroupTodoItem';
function GroupTodo(props) {
    const {
        groupTodos,
        openModal,
        setOpenModal
        } = React.useContext(TodoContext);
    return (
        <div>
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
        </div>
    );
   
}

export {GroupTodo}
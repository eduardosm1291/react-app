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
        <React.Fragment>
            <GroupTodoList>
            {
            groupTodos.map(groupTodo => (
                
            <GroupTodoItem
              key={groupTodo.titulo}
              titulo={groupTodo.titulo}
             
            />
            
          ))
        
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
        </React.Fragment>
    );
   
}

export {GroupTodo}
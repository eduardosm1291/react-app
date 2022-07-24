import React from 'react';
import { TodoContext } from '../../TodoContext';

function GroupTodoForm() {
  // Creamos un estado para nuestro nuevo TODO
  const [newGroupTodo, setNewGroupTodo] = React.useState('');
  const [newGroupTodoIcon, setNewGroupTodoIcon] = React.useState('');
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const {
    addGroupTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const setTitulo = (event) => {
    setNewGroupTodo(event.target.value);
  };
  const setIcon = (event) => {
    setNewGroupTodoIcon(event.target.value);
  };
  
  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };
  
  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    const newGroup = {
        titulo: newGroupTodo,
        icon: newGroupTodoIcon
    }
    // Utilizamos nuestra función para añadir nuestro TODO
    addGroupTodo(newGroup);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewGroupTodo('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Nuevo Grupo</label>
      <input
        value={newGroupTodo}
        onChange={setTitulo}
        placeholder="Nombre del grupo"
      />
       <input
        value={newGroupTodoIcon}
        onChange={setIcon}
        placeholder="Nombre del icon"
      />
        
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { GroupTodoForm };
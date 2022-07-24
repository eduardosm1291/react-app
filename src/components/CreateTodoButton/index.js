import React from 'react'; 
import { TodoContext } from '../../TodoContext';
import './CreateTodoButton.css';
function CreateTodoButton(props) {
  const clickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button className="CreateTodoButton"
      onClick= { () => clickButton()} 
    >
      +
    </button> 

  );
}
export {CreateTodoButton};

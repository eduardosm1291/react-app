import React from 'react';
import './GroupTodoItem.css';

function GroupTodoItem(props) {
   
    return (
    <div className="TodoGroupItem">
        
      
        
        <div>
        <span>{props.icon}</span>
        <h3>
            {props.text}
        </h3>  
        </div>
       
        <div className="footerGroupItem">20 items </div>          
       
    </div>
    );
   
}

export {GroupTodoItem}
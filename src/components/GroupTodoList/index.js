import React from 'react';
import './GroupTodoList.css'
function GroupTodoList(props) {
    return (
        <section>
            <div key={props} className="sectionGroup">
                {props.children }
            </div>
        </section>
    );
}

export  {GroupTodoList};

import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';
function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    return [
        <input type="text" 
            plahceholder="busqueda"
            className="TodoSearch"
            value = {searchValue}
            onChange={onSearchChange}

        ></input>,
       
    ];
}
export {TodoSearch}

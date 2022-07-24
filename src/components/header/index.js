import React from 'react';
import './Header.css';
const estylos = {
  color: 'red',
  backgroundColor: 'yellow',
};


function Header() {

    return (
        <header>
        <div class="headline">
          <div class="inner">
            <h1>Mi lista</h1>
            <p>React App</p>
          </div>
        </div>
      </header>
    );
  }

export  {Header};
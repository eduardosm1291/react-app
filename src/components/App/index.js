import React from 'react';
import {AppUi} from './AppUi';
import {TodoProvider} from '../../TodoContext';
import {GroupTodo} from '../GroupTodo';
import { Header } from '../header';
import {ListContentTodo} from '../ListContentTodo';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link
} from "react-router-dom";
const defaultTodo = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];



function App() {

  return (
    <Router >
    <Header />
    <div>


    <Link to="/"></Link>
    <Link to="/about"></Link>
    <Link to="/quiz/12"></Link>
    <Link to="/gloop"></Link>
    <Routes>
     
      <Route exact path="/about" element={<ListContentTodo />} />
      <Route path="/users/*" element={<ListContentTodo />} />
      <Route path="/users" element={<ListContentTodo />} />
      <Route path="/myusers/" element={<Navigate replace to="/users" />} />
      <Route path="/list/:groupId" element={<ListContentTodo />} />
      
      <Route path="/" element={
        <TodoProvider>
          <GroupTodo />

        </TodoProvider>
      } />
      <Route path="*" element={<p>NotFound!</p>} />
    </Routes>
    </div>
  </Router>

  );
}

export default App;

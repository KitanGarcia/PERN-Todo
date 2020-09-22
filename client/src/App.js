import React, {Fragment} from 'react';
import './App.css';

//components
import InputTodo from './components/InputTodo.js';
import ListTodos from './components/ListTodos.js';
import EditTodo from './components/EditTodo.js';

function App() {
  return (
    <Fragment>
      <div className = "container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;

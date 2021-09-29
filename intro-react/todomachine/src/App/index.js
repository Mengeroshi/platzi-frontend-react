import './App.css';
import React from "react";
import AppUI from './AppUI';
import {TodoProvider} from '../TodoContext/index.jsx';

//  const defaultTodos =[
//    {text:'Cortar Cebolla', completed:true},
//    {text:'Take a course', completed:false},
//    {text:'aprender react', completed:true},
//  ];

function App() {

  return (
    <TodoProvider>
        <AppUI/>
    </TodoProvider>
  );
}

export default App;

import React from 'react'
import './App.css';
import {Header} from './components/Header.jsx';
import {Characters} from './components/Characters.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;

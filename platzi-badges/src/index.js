// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
//import Badge from './components/Badge.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'

//const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');



// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badges />,container);
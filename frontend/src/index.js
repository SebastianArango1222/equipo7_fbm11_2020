import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './pages/Inicio';
import Login from './components/Login'


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
  <Login />
  </React.StrictMode>,
  document.getElementById('root')
);




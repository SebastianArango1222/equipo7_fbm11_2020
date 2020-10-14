import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './pages/Inicio';
<<<<<<< HEAD
import Paginaprincipal from './pages/Paginaprincipal';
import App from './routes/App';
=======
import Login from './components/Login'
import Signin from './components/Signin';
>>>>>>> 6994d9bd183b41a9075f29f8c4d7df660f29087a


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
   {/* <App/>  */}
    <Paginaprincipal />
=======
  <Login />
  <Signin />
>>>>>>> 6994d9bd183b41a9075f29f8c4d7df660f29087a
  </React.StrictMode>,
  document.getElementById('root')
);




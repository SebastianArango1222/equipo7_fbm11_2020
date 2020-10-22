import React, { Component } from 'react';
import '../styles/styles.css';



class Login extends Component {

  render() {
    return (
      <div className="container align-items-center mt-5 text-center">
        <div className="container">
        <form className="form-signin text-center align-items-center col-6">
          <h1 className="h1a">Registro Admin</h1>
          <input type="text" id="Nombre" className="bt" placeholder="Ingrese su nombre completo" required="" autofocus="" />
        
          <input type="email" id="inputEmail" className="bt" placeholder="Ingrese su email" required="" autofocus="" />
         
          <input type="password" id="inputPassword" className="bt2 " placeholder="Ingrese su contraseña/Codigo" required="" />
          <div className="boton3">
          </div>
          <button className="boton3" type="submit"><a href ="inicio">Registrarse</a></button>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
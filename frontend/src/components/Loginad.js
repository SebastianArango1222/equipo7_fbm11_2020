import React, { Component } from 'react';
import '../styles/styles.css';



class Login extends Component {

  render() {
    return (
      <div className="container align-items-center mt-5 text-center">
        <div className="container">
        <form className="form-signin text-center align-items-center col-6">
          <h1 className="boton2">Inicie Sesión</h1>
        
          <input type="email" id="inputEmail" className="botonn" placeholder="Ingrese su email" required="" autofocus="" />
          <label for="inputPassword" className="sr-only">a</label>
          <input type="password" id="inputPassword" className="botonn " placeholder="Ingrese su código" required="" />
          <div className="checkbox mb-3">
          </div>
          <button className="boton3" type="submit"><a href = "inicio">Iniciar Sesión</a></button>
          <button  className="boton3" type="submit"><a href ="signad">Registrarse</a></button>
      
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
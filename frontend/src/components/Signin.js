import React, { Component } from 'react';
import '../styles/styles.css';



class Login extends Component {

  render() {
    return (
      <div className="container align-items-center mt-5 text-center">
        <div className="container">
        <form className="form-signin text-center align-items-center col-6">
          <h1 className="h3 mb-5 font-weight-normal text-center text-primary">Registro</h1>
          <input type="text" id="Nombre" className="form-control mb-3" placeholder="Ingrese su nombre completo" required="" autofocus="" />
          <label for="inputEmail" className="sr-only mb-3">Ingrese su email</label>
          <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Ingrese su email" required="" autofocus="" />
          <label for="inputPassword" className="sr-only">Ingrese su contraseña</label>
          <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Ingrese su contraseña" required="" />
          <div className="checkbox mb-3">
          </div>
          <button className="btn btn-lg btn-primary btn-flex mb-3 col-6 text-decoration-none" type="submit">Registrarse</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
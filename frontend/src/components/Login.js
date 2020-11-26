import React, { Component } from 'react';
import '../styles/styles.css';



class Login extends Component {

  render() {
    return (
      <div className="container align-items-center mt-5 text-center">
        <div className="container">
        <form className="a">
          <h1 className="boton2">Inicie Sesión</h1>
        
          <input type="email" id="inputEmail" className="botonn" placeholder ="Ingrese su email"  required="" autofocus="" />
          <label for="inputPassword" className="sr-only">Ingrese su contraseña</label>
          <input type="password" id="inputPassword" className="botonn " placeholder="Ingrese su contraseña" required="" />
          <div className="checkbox mb-3">
          </div>
          <button className="boton3" type="submit"><a className="colorin"href="/Elegir">Iniciar Sesión</a></button>
          <button  className="boton3" type="submit" ><a className="colorin" href ="sign">Registrarse</a></button>
          <a className="adm" href="loginad">Ingresar como candidato
</a>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
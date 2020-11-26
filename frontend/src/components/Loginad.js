import React, { Component } from 'react';
import '../styles/styles.css';
import Atras from '../Images/Atras.png'


class Login extends Component {

  render() {
    return (
      <div className="container align-items-center mt-5 text-center">
        <div className="container">
        <form className="a">
          <h1 className="boton2">Inicie Sesión</h1>
          <a  className="linkec"href="login"  ><img className ="as"src= {Atras}/></a>
          <input type="email" id="inputEmail" className="botonn" placeholder="Ingrese su email" required="" autofocus="" />
          <label for="inputPassword" className="sr-only">a</label>
          <input type="password" id="inputPassword" className="botonn " placeholder="Ingrese su código" required="" />
          <div className="checkbox mb-3">
          </div>
          <button className="boton3" type="submit"><a className="colorin" href = "epad">Iniciar Sesión</a></button>
          <button  className="boton3" type="submit"><a className="colorin"  href ="signad">Registrarse</a></button>
      
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
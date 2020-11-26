import React, { Component } from 'react';
import '../styles/styles.css';
import Atras from '../Images/Atras.png'


class Login extends Component {

  render() {
    return (
      <div className="container align-items-center mt-5 text-center">
        <div className="container">
        <form className="a">
          <h1 className="h1a">Registro Candidato</h1>
          <a  className="linkec"href="loginad"  ><img className ="as"src= {Atras}/></a>
          <input type="text" id="Nombre" className="bt" placeholder="Ingrese su nombre completo" required="" autofocus="" />
        
          <input type="email" id="inputEmail" className="bt" placeholder="Ingrese su email" required="" autofocus="" />
         
          <input type="password" id="inputPassword" className="bt2 " placeholder="Ingrese su contraseña/Codigo" required="" />
          <div className="boton3">
          </div>
          <button className="boton3" type="submit"><a className="colorin" href  ="epad">Registrarse</a></button>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
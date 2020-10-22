import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
           <header>
               <input type="checkbox" id="btn-menu"/>
               <label for="btn-menu" className="icon-menu" ></label>    
                 <nav className="menu">
                
                    <ul>
                        <h5 className="h5">Voz de la elección al gobierno escolar</h5>
                        
                        <li> <a className="inicio" href="/">inicio</a></li>
                        <li> <a className="asas" href="Elegir">Candidatos</a></li>
                        <li> <a className="asas" href="">Quiénes somos</a></li>
                        <li> <a className="asas" href="AcercaDe">Acerca de </a></li> 
                        <li> <a className="login" href="Login">Iniciar sesión </a></li>   
                        

                    </ul>
                </nav>

           </header>
        )
    }
}
export default Header;
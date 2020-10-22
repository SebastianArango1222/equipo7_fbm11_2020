import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
           <header>
               <input type="checkbox" id="btn-menu"/>
               <label for="btn-menu" className="icon-menu" ></label>    
                 <nav className="menu">
                
                    <ul>
                         <h5 className="h5" >Voz de la eleción al gobierno escolar</h5>
                        <li> <a className="inicio" href="inicio">inicio</a></li>
                        <li> <a className="asas" href="epad">Propuestas</a></li>
                        <li> <a className="asas" href="#">Quiénes somos</a></li>
                        <li> <a className="asas" href="AcercaDe">Acerca de </a></li> 
                      



                    </ul>
                </nav>

           </header>
        )
    }
}
export default Header;
import React from 'react';
import Header from './Header'
import Atras from '../Images/Atras.png'
class Zp3 extends React.Component{
    render(){
       return(
       
        <main role="main" className="inner cover">
        <h1  className="awa">Propuestas de Sebastián Suárez:</h1>
       
        <ul>
        <li className="Zp">- Piscina en el patio</li>
        <br/>
        <li className="Zp">- Clases presenciales</li>
        <br/>
        <li className="Zp">- No se que poner</li>

        </ul>
        <br/>
       
       
       <a  className="linkec"href="CandidatosP"  ><img className ="as"src= {Atras}/></a>
      </main>
      
    
       )
    }
    
}
export default Zp3;
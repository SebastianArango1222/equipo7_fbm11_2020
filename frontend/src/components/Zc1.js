import React from 'react';
import Header from './Header'
import Atras from '../Images/Atras.png'
class Zc1 extends React.Component{
    render(){
       return(
       
        <main role="main" className="inner cover">
        <h1  className="awa">Propuestas de Juliana Martinez:</h1>
        
        <ul>
          
        <li className="Zp">- Piscina en el patio <i class="icon-thumbs-down-alt"> </i></li>
        
        <br/>
        <li className="Zp">- Clases presenciales</li>
        <br/>
        <li className="Zp">- No se que poner</li>

        </ul>
        <br/>
       
       
       <a  className="linkec"href="CandidatosC"  ><img className ="as"src= {Atras}/></a>
        
      </main>
    
       )
    }
    
}
export default Zc1;
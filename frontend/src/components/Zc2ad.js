import React from 'react';
import Header from './Header'
import Atras from '../Images/Atras.png'
import mas from '../Images/mas.png'
class Zc2 extends React.Component{
    render(){
       return(
       
        <main role="main" className="inner cover">
        <h1  className="awa">Propuestas de Karla Holguin:</h1>
        
        <ul>
          
        <li className="Zp">- Agregar Propuestas <img className ="w"src= {mas} /> <i class="icon-thumbs-down-alt"> </i></li>
        <button  className="botonsin" type="submit">Guardar</button>

        </ul>
        <br/>
       
       
       <a  className="linkec"href="CandidatosCad"  ><img className ="as"src= {Atras}/></a>
      </main>
    
       )
    }
    
}
export default Zc2;
import React from 'react';
import awa from '../Images/awa.png'
import Atras from '../Images/Atras.png'
class Card extends React.Component{
    render(){
        return(
          <main role="main" className="body">
               <a  className="linkec"href="Epad"  ><img className ="as"src= {Atras}/></a>
            <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Osman Vargaz</h4>
      </div>
      <div className="card-body">
        
        <ul className="list-unstyled mt-3 mb-4">
         
        <img className ="Silueta"src= {awa}/>
          
          
        </ul>
        <a className="p-2 text-dark" href="P1ad">Observar/agregar propuestas</a>     
         </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Sebastián Arango</h4>
      </div>
      <div className="card-body">
        
        <ul className="list-unstyled mt-3 mb-4">
        <img className ="Silueta"src= {awa}/>
        </ul>
        <a className="p-2 text-dark" href="P2ad">Observar/agregar propuestas</a>
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Sebastián Suárez</h4>
      </div>
      <div className="card-body">
       
        <ul className="list-unstyled mt-3 mb-4">
        <img className ="Silueta"src= {awa}/>
        </ul>
        
        <a className="p-2 text-dark" href="P3ad">Observar/agregar propuestas</a>
        
      </div>
   
    </div>
  </div>
  </main>
        )
    }
}
export default Card;
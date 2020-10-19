import React from 'react';
import awa from '../Images/awa.png'
import Atras from '../Images/Atras.png'
class Card2 extends React.Component{
    render(){
        return(
            <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Juliana Martinez</h4>
      </div>
      <div className="card-body">
        
        <ul className="list-unstyled mt-3 mb-4">
         
          <img className ="Silueta"src= {awa}/>
          
          
          
        </ul>
        <a className="p-2 text-dark" href="C1ad">Observar/agregar propuestas</a>     
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Karla Holguin</h4>
      </div>
      <div className="card-body">
        
        <ul className="list-unstyled mt-3 mb-4">
        <img className ="Silueta"src= {awa}/>
        </ul>
        <a className="p-2 text-dark" href="C2ad">Observar/agregar propuestas</a>     
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Sofia Henao</h4>
      </div>
      <div className="card-body">
       
        <ul className="list-unstyled mt-3 mb-4">
        <img className ="Silueta"src= {awa}/>
        </ul>
        <a className="p-2 text-dark" href="C3ad">Observar/agregar propuestas</a>             
      </div>
    </div>
    <a  className="linkec"href="Epad"  ><img className ="as"src= {Atras}/></a>
  </div>
        )
    }
}
export default Card2;
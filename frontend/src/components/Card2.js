import React from 'react';
import awa from '../Images/awa.png'
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
        <a className="p-2 text-dark" href="C1">Observar propuestas</a>     
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
        <a className="p-2 text-dark" href="C2">Observar propuestas</a>     
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
        <a className="p-2 text-dark" href="C3">Observar propuestas</a>             
      </div>
    </div>
  </div>
        )
    }
}
export default Card2;
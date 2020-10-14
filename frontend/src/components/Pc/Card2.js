import React from 'react';

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
         
          <img src="../components/Images/awa.jpg"/>
          
          
          
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Observar propuestas</button>
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Karla Holguin</h4>
      </div>
      <div className="card-body">
        
        <ul className="list-unstyled mt-3 mb-4">
        <img src="../components/Images/awa.jpg"/>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">Observar propuestas</button>
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Sofia Henao</h4>
      </div>
      <div className="card-body">
       
        <ul className="list-unstyled mt-3 mb-4">
        <img src="../components/Images/awa.jpg"/>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">Observar propuestas</button>
        
      </div>
    </div>
  </div>
        )
    }
}
export default Card2;
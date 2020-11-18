import React from 'react';
import awa from '../Images/awa.png'
import Atras from '../Images/Atras.png'
import Arango from '../Images/arango.jpg'
import Miguel from '../Images/Miguel.jpg'
import Lemus from '../Images/Lemus.jpg'
import Luisa from '../Images/Luisa.jpg'
class Card extends React.Component {
  render() {
    return (
      <main role="main" className="body">
        <a className="linkec" href="/"  ><img className="as" src={Atras} /></a>
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Sebastian Arango Diaz</h4>
            </div>
            <div className="card-body">

              <ul className="list-unstyled mt-3 mb-4">

                <img className="Silueta2" src={Arango} />


              </ul>
              <li className="p-2 text-dark" >Programador y diseñador</li>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Miguel Angel Pérez Rojas</h4>
            </div>
            <div className="card-body">

              <ul className="list-unstyled mt-3 mb-4">
                <img className="Silueta2" src={Miguel} />
              </ul>
              <li className="p-2 text-dark" >Programador y diseñador</li>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Juan Sebastián Suárez Lemus</h4>
            </div>
            <div className="card-body">

              <ul className="list-unstyled mt-3 mb-4">
                <img className="Silueta2" src={Lemus} />

              </ul>

              <li className="p-2 text-dark" >Programador y diseñador</li>



            </div>

            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Luisa Fernanda Alvarez Diaz</h4>
            </div>
            <div className="card-body">

              <ul className="list-unstyled mt-3 mb-4">
                <img className="Silueta2" src={Luisa} />

              </ul>

              <li className="p-2 text-dark" >Programador y diseñador</li>




            </div>


          </div>
        </div>
      </main>


    )
  }
}
export default Card;
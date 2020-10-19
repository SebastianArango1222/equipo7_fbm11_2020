import React from 'react';
import Header from './Header';
import Personeria from '../Images/Personeria.jpg'
import Contraloria from '../Images/Contraloria.jpg'
const Epad = () => {
  return(
<div className="container pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="h1a">Elige que tipo de candidato eres <br/>(Personería <br/>/Contraloría)</h1>
<a  className="linkec"href="CandidatosPad"  ><img className ="w"src= {Personeria}/></a>

<br/>
<a className="linkec" href="CandidatosCad"> <img className ="w"src= {Contraloria}/></a>
</div>

  )
}

export default Epad;
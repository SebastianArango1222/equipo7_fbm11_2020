import React from 'react';
import logofx from '../Images/logofx.png'
class Inicio extends React.Component{
    render(){
       return(
        <main role="main" className="body">
 
        <h1 className="awa">Inicio</h1>
          
        <div className="card mb-4 shadow-sm">
        <div className="card-body">
        
        <ul className="list-unstyled mt-3 mb-4">
         
        <img className ="logofx"src= {logofx}/>
          
          
        </ul>
        </div>
          <div className="card-header">
           
            <h5 className="my-0 font-weight-normal">La Institución Educativa Félix de Bedout Moreno, desde el año 2005 ofrece a la comunidad del sector,
 la educación en media técnica en informática con énfasis en diseño y desarrollo de software </h5>
          </div>

          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h5 className="my-0 font-weight-normal"> en convenido con el Politécnico Jaime Isaza Cadavid, implementando la estrategia de proyectos para el desarrollo de las competencias por parte de los estudiantes. </h5>
            </div>
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h5 className="my-0 font-weight-normal">Teniendo en cuenta esta experiencia para el año 2018 laInstitución Educativa le apuesta al desarrollo de la metodología por proyectos para todos los estudiantes</h5>

              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h5 className="my-0 font-weight-normal">desde el grado de transición hasta el grado undécimo, teniendo comoreferencia este proceso; convencidos de que es el medio para desarrollar competenciasobligatorias, competencias del siglo XXI y competencias trasversales a cualquier área delconocimiento.</h5>
                </div>
                
              </div>
            </div>



          </div>





    
        </div>


      </main>
       )
    }
    
}
export default Inicio;
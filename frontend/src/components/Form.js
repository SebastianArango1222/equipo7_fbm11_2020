import React from 'react';
import '../styles/styles.css';

class Form extends React.Component{
    render(){
        return (
        <section className="form-register">
        <h4>Formulario Registro</h4>
        <input className="controls" type="text" name="nombres" id=  "nombres" placeholder="Ingrese su nombre"/>
        <input className="controls" type="text" name= "apellidos" id= "apellidos" placeholder="Ingrese sus apellidos"/>
        <input className="controls" type="email" name="correo" id= "correo" placeholder="Ingrese su correo"/>
        <input className="controls" type="password" name="contraseña" id= "contraseña" placeholder="Ingrese su contras"/>
        </section>
        )
        
    }
}

export default Form;
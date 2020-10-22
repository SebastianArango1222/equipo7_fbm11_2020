import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Paginaprincipal from '../pages/Paginaprincipal';
import Paginaprincipalad from '../pages/Paginaprincipalad';
import P1 from '../pages/Propuestas/P1'
import P2 from '../pages/Propuestas/P2'
import P3 from '../pages/Propuestas/P3'
import P1ad from '../pages/Propuestas/P1ad'
import P2ad from '../pages/Propuestas/P2ad'
import P3ad from '../pages/Propuestas/P3ad'
import C1 from '../pages/Propuestas/C1'
import C2 from '../pages/Propuestas/C2'
import C3 from '../pages/Propuestas/C3'
import C1ad from '../pages/Propuestas/C1ad'
import C2ad from '../pages/Propuestas/C2ad'
import C3ad from '../pages/Propuestas/C3ad'
import Acerca from '../pages/Acerca'
import Acercaad from '../pages/Acercaad'
import CandidatosP from '../pages/CandidatosP'
import CandidatosC from '../pages/CandidatosC'
import CandidatosPad from '../pages/CandidatosPad'
import CandidatosCad from '../pages/CandidatosCad'
// import CandidatosP from '../pages/CandidatosP'
import ElegirC from '../pages/ElegirC'
import Login from '../pages/Loginp'
import Sign from '../pages/Sign'
import Signad from '../pages/Signad'
import Loginad from '../pages/Loginad'
import Epad from '../pages/Epad'
import Quienesomos from '../pages/Quienesomos'
import Quienesomosad from '../pages/Quienesomosad'

const App = () => {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component = {Paginaprincipal} />
                <Route  path="/inicio" component = {Paginaprincipalad} />
                <Route  path="/P1" component = {P1} />
                <Route  path="/P2" component = {P2} />
                <Route  path="/P3" component = {P3} />
                <Route  path="/P1ad" component = {P1ad} />
                <Route  path="/P2ad" component = {P2ad} />
                <Route  path="/P3ad" component = {P3ad} />
                <Route  path="/Acercade" component = {Acerca} />
                <Route  path="/Acercadead" component = {Acercaad} />
                <Route  path="/CandidatosP" component = {CandidatosP} />
                <Route  path="/CandidatosCad" component = {CandidatosCad} />
                <Route  path="/CandidatosPad" component = {CandidatosPad} />
                <Route  path="/CandidatosC" component = {CandidatosC} />
                {/* <Route exact path="/" component = {} /> */}
                <Route  path="/C1" component = {C1} />
                <Route  path="/C2" component = {C2} />
                <Route  path="/C3" component = {C3} />
                <Route  path="/C1ad" component = {C1ad} />
                <Route  path="/C2ad" component = {C2ad} />
                <Route  path="/C3ad" component = {C3ad} />
                <Route  path="/Elegir" component = {ElegirC} />
                <Route  path="/Login" component = {Login} />
                <Route  path="/Sign" component = {Sign} />
                <Route  path="/Signad" component = {Signad} />
                <Route  path="/loginad" component = {Loginad} />
                <Route  path="/Epad" component = {Epad} />
                <Route  path="/Quienessomos" component = {Quienesomos} />
                <Route  path="/Quienessomosad" component = {Quienesomosad} />
            </Switch>

        </BrowserRouter>
    )
}
export default App;

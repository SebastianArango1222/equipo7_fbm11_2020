import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Paginaprincipal from '../pages/Paginaprincipal';
import P1 from '../pages/Propuestas/P1'
import P2 from '../pages/Propuestas/P2'
import P3 from '../pages/Propuestas/P3'
import C1 from '../pages/Propuestas/C1'
import C2 from '../pages/Propuestas/C2'
import C3 from '../pages/Propuestas/C3'
import Acerca from '../pages/Acerca'
import CandidatosP from '../pages/CandidatosP'
import CandidatosC from '../pages/CandidatosC'
// import CandidatosP from '../pages/CandidatosP'
import ElegirC from '../pages/ElegirC'
import Login from '../pages/Loginp'
import Sign from '../pages/Sign'
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Paginaprincipal} />
                <Route  path="/P1" component = {P1} />
                <Route  path="/P2" component = {P2} />
                <Route  path="/P3" component = {P3} />
                <Route  path="/Acercade" component = {Acerca} />
                <Route  path="/CandidatosP" component = {CandidatosP} />
                <Route  path="/CandidatosC" component = {CandidatosC} />
                {/* <Route exact path="/" component = {} /> */}
                <Route  path="/C1" component = {C1} />
                <Route  path="/C2" component = {C2} />
                <Route  path="/C3" component = {C3} />
                <Route  path="/Elegir" component = {ElegirC} />
                <Route  path="/Login" component = {Login} />
                <Route  path="/Sign" component = {Sign} />
               
            </Switch>

        </BrowserRouter>
    )
}
export default App;

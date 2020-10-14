import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import Nose from '../components/Nose';
// import Card from '../components/Card'
import Paginaprincipal from '../pages/Paginaprincipal';
import Inicio from '../pages/Inicio'
import Acercade from '../pages/Acerca'
const App = () =>{
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path ="/a" component={Paginaprincipal} />
        <Route path="/awa" component={Inicio}/>
        <Route path="/as" component={Acercade}/>
        </Switch>
        </BrowserRouter>
    )
}
export default App;
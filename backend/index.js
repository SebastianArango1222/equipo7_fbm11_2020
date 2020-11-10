const express= require('express');
const app = express();

// definir todos los componentes, modulos app
const candidatos= require('./routes/candidatos');// crud
const estudiantes = require('./routes/estudiantes');// crud
const propuestas = require('./routes/propuestas');// crud


//ajustes
app.set('port',3000)



// Middleware
app.use(express.json());


// ajustess
app.use('/api/candidatos',candidatos);
app.use('/api/estudiantes',estudiantes);
app.use('/api/propuestas',propuestas);


app.listen(app.get('port'),()=>{
        console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
    }) 
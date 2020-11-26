const express= require('express');
const router= express.Router();
const mysqlConnection=require('../db/db');

router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM Estudiantes',(err,rows,fiels)=>{

    if(!err){

        res.json(rows);
    }else {
        console.log(err);
    }
})
})
router.post('/nuevo-estudiante',(req,res)=>{
    const {id,nombre,apellido,doc,identidad,grado}=req.body;
    
    let estudiantes =[id,nombre,apellido,doc,identidad,grado];
    
    let nuevoEstudiante =`INSERT INTO estudiantes(id,nombre,apellido,doc,identidad,grado)
    VALUES(?,?,?,?,?)`;
    mysqlConnection.query(nuevoEstudiante,estudiantes,(err,results,fields)=>{
    if(err){
       return console.error(err.message());
    }else{
       res.json({message:`El estudiante es`})
    }
    })});
module.exports=router;
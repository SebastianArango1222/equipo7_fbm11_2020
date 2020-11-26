const express= require('express');
const router= express.Router();
const mysqlConnection=require('../db/db');

router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM Candidatos ',(err,rows,fiels)=>{

    if(!err){

        res.json(rows);
    }else {
        console.log(err);
    }
})
})
router.post('/nuevo-candidato',(req,res)=>{
    const {id,nombre,apellido,grado,cargo}=req.body;
    
    let candidatos =[id,nombre,apellido,grado,cargo];
    
    let nuevoCandidato =`INSERT INTO candidatos(id,nombre,apellido,grado,cargo)
    VALUES(?,?,?,?,?)`;
    mysqlConnection.query(nuevoCandidato,candidatos,(err,results,fields)=>{
    if(err){
       return console.error(err.message());
    }else{
       res.json({message:`El nuevo candidato es`})
    }
    })});
module.exports=router;
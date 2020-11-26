const express= require('express');
const router= express.Router();
const mysqlConnection=require('../db/db');

router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM Valoracion ',(err,rows,fiels)=>{

    if(!err){

        res.json(rows);
    }else {
        console.log(err);
    }
})
})
router.post('/nueva-valoracion',(req,res)=>{
    const {id,Cargo,Propuesta,conteo}=req.body;
    
    let valoracion =[id,Cargo,Propuesta,conteo];
    
    let nuevaValoracion =`INSERT INTO valoracion(id,Cargo,Propuesta,conteo)
    VALUES(?,?,?,?,?)`;
    mysqlConnection.query(nuevaValoracion,valoracion,(err,results,fields)=>{
    if(err){
       return console.error(err.message());
    }else{
       res.json({message:`La valoracion es:`})
    }
    })});
module.exports=router;
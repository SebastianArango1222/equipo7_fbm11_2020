const express= require('express');
const router= express.Router();
const mysqlConnection=require('../db/db');

router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM Propuestas',(err,rows,fiels)=>{

    if(!err){

        res.json(rows);
    }else {
        console.log(err);
    }
})
})
router.post('/nueva-propuestas',(req,res)=>{
    const {id,Cargo,propuestas}=req.body;
    
    let propuestas =[id,Cargo,Propuesta];
    
    let nuevaPropuestas =`INSERT INTO Propuestas(id,Cargo,Propuesta)
    VALUES(?,?,?,?,?)`;
    mysqlConnection.query(nuevaPropuesta,propuestas,(err,results,fields)=>{
    if(err){
       return console.error(err.message());
    }else{
       res.json({message:`La propuesta es`})
    }
    })});
module.exports=router;
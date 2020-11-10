const mysql = require('mysql');
const mysqlConnection= mysql.createConnection({
host:'bghb4o3g0ulpranqklgr-mysql.services.clever-cloud.com',
user:'uilxemudh85sc1t3',
password:'NfE0JgO6pkEkIxrgMKwx',
database:'bghb4o3g0ulpranqklgr',
multipleStatements:true
});
 mysqlConnection.connect(function(err){
     if(err){
         console.error(err);
     }else{
         console.log('Base de datos conectada')
     }
 })
 module.exports=mysqlConnection;
 

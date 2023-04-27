import mysql from 'mysql2/promise.js'; 

const mysqlConnect = async ()=>{

   const mysql_config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
   }
   const connection = await mysql.createConnection(mysql_config);
    // connection.connect(()=>{
    //     console.log("mysql connect "+process.env.MYSQL_HOST+"/"+process.env.MYSQL_DB);    
    // });
   return connection;
}

export {mysqlConnect}
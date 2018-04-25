'use strict'

var mysql = require('mysql'),
    conf=require('./db-conf'),
    dbOptions = {
        host : conf.mysql.host,
        port :  conf.mysql.port,
        user : conf.mysql.user,
        password : conf.mysql.password,
        database: conf.mysql.database
    },
    myConnection=mysql.createConnection(dbOptions)
    myConnection.connect((err)=>{
        return (err) ? console.log(`Error al Conectarse a Mysql: ${err.stack}`):console.log(`Conexion Establecida con MySQL N°:${myConnection.threadId}`)
    })
    //console.log(conf.mysql)
    module.exports = myConnection

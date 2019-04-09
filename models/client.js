var connection=require('../db/db');
var Sequelize=require('sequelize');


var client=connection.define('elaundromatclient',{
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    phoneNumber:{
        type:Sequelize.STRING
    },
    address:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    }
    
})

module.exports=client;


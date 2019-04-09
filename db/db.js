const Sequelize=require('sequelize');


var connection=new Sequelize('elaunfzq_apidb','elaunfzq_apiuser','NBH9YCIi%Mf[',{
    host:'199.79.62.54',
    port:3306,
    dialect:'mysql',
    operatorsAliases:false
})


module.exports=connection;

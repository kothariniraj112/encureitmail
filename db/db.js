const Sequelize=require('sequelize');


var connection=new Sequelize('encureitclient','root','root',{
    host:'localhost',
    dialect:'mysql',
    operatorsAliases:false
})


module.exports=connection;
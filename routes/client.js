var clientCtrl=require('../controllers/client')
var express=require('express');
var router=express.Router();


router.post('/',clientCtrl.create)

module.exports=router;
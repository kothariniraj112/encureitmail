var clientCtrl=require('../controllers/client')
var express=require('express');
var router=express.Router();


router.post('/',clientCtrl.create)
router.get('/getall',clientCtrl.getAll)
module.exports=router;
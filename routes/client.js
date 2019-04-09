var clientCtrl=require('../controllers/client')
var express=require('express');
var router=express.Router();


router.get('/client',clientCtrl.getAll)
router.get('/client/all',clientCtrl.getAllClient)
router.post('/client',clientCtrl.create)
router.put('/client/:id',clientCtrl.update)
module.exports=router;

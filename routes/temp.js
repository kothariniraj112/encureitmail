
var express=require('express');
var router=express.Router();


router.get('/',(req,res)=>{
res.send({
message:"deployed successfully"
})
})

module.exports=router;

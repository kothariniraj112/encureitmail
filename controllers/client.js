var clientModel=require('../models/client')
var connection=require('../db/db')
var msg91=require('msg91-sms');
var nodemailer = require("nodemailer");
var path = require('path');
var messageSent=undefined;
var mailSent=undefined;
var number;
var email;


exports.getAll=(req,res)=>{
}
exports.create=(req,res)=>{
   
    connection.sync().then(()=>{
        clientModel.create({
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            address:req.body.address,
            description:req.body.description

        }).then((result)=>{
            number=req.body.phoneNumber;
            email=req.body.email;

            sendMessageandMail((messageSent,mailSent)=>{
               res.send({
                    clientCreate:true,
                    messageSent:messageSent,
                    mailSent:mailSent,
                    message:"succesfully added new client"
               })
               
            })
        }).catch((error)=>{
            res.send({
                error:error,
                message:"problem in adding client"
            })
        })

    }).catch((error)=>{
        res.send({
            message:"problem in synchronizing client model",
            error:error
        })
    })
}




function sendMessageandMail(callback){
    let temp=true;
    sendMessage((messageSent)=>{
        if(mailSent!=undefined && temp){
            console.log("impssssssssssssssssssssssssssssssssssssssssssssssssss",mailSent)
            callback(messageSent,mailSent)
            temp=false;
        }
    },number)
    
    sendMail((mailSent)=>{
        if(messageSent!=undefined && temp){
            console.log("vksssssssssssssssssssssssssssssssssssssssssssssssssssss",mailSent)
            callback(messageSent,mailSent)
            temp=false;
        }
    },email);
}

var sendMessage=(callback,number)=>{
    messageSent=undefined;
    var authkey='243639Abhkkw0zSk5bcabeb1';
    var message='Hiii niraj from me';
    var dialcode='91';
    var senderid='Encure'; //must be six digit
    var route=4
    if(number!=undefined){
        msg91.sendOneandGetJson(authkey,number,message,senderid,route,dialcode,function(response){
            response=JSON.parse(response)
    
            if(response.type=="success"){
                messageSent=true;
            }else{
                
                messageSent=response.message;
            }
           callback(messageSent)
        }); 
    
    }else{
        messageSent="number is not provided"
        callback(messageSent)
    }
  
}

var sendMail=(callback,email)=>{
    mailSent=undefined;
    let transporter = nodemailer.createTransport({
        host: "md-in-48.webhostbox.net",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'sendmail@rise-india.com', // generated ethereal user
          pass: 'XFqZBX]Poh?g' // generated ethereal password
        }
      });

      var mailOptions = {
        from: '"From me" sendmail@rise-india.com',
        to: email,
        subject: "when you are coming to pune", // Subject line
        text: "Hello datta how are you and when you are coming to pune", // plain text body
        html: "<b>Hello Hello niraj how are you and when you are coming to pune </b>" ,
        attachments: [{
            filename: 'mydata.pdf',
            path: path.join(__dirname, '../public/attachment/mydata.pdf'),
            contentType: 'application/pdf'
          }]
        
      };
      transporter.sendMail(mailOptions, function(error, info){
          
        if (error) {
          mailSent=false;
          callback(mailSent)

        } else {
         console.log("thereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
          mailSent=true;
          callback(mailSent)

        }
      });
  
}



var sendMailLuckyU=()=>{
    mailSent=undefined;
    let transporter = nodemailer.createTransport({
        host: "md-in-48.webhostbox.net",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'sendmail@rise-india.com', // generated ethereal user
          pass: 'XFqZBX]Poh?g' // generated ethereal password
        }
      });

      var mailOptions = {
        from: '"From me" sendmail@rise-india.com',
        to: 'kothariniraj112@gmail.com',
        subject: "when you are coming to pune", // Subject line
        text: "Hello datta how are you and when you are coming to pune", // plain text body
        html: "<b>Hello Hello niraj how are you and when you are coming to pune </b>" ,
        attachments: [{
            filename: 'mydata.pdf',
            path: path.join(__dirname, '../public/attachment/mydata.pdf'),
            contentType: 'application/pdf'
          }]
        
      };
      transporter.sendMail(mailOptions, function(error, info){
          
        if (error) {
          mailSent=false;
          alert("mailSent false")

        } else {

         console.log("thereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",info)
          mailSent=true;
          alert("mailSent true")

        }
      });
  
}
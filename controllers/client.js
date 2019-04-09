var clientModel=require('../models/client')
var connection=require('../db/db')
var msg91=require('msg91-sms');
var nodemailer = require("nodemailer");
var path = require('path');
var messageSent=undefined;
var mailSent=undefined;
var number;
var email;


var message;
exports.update=(req,res)=>{
    console.log("sssssssssssssssssssssssssssssssssssssssssssssssssssss")
    connection.sync().then(()=>{
        clientModel.update({description:req.body.description},{
            where:{
                id:req.params.id
            }
        }).then((data)=>{
            console.log("===========================",data)

        })  

       })
}
exports.getAll=(req,res)=>{
   connection.sync().then(()=>{
    connection.query('select * from elaundromatclients where description is NULL order by id desc').then((response)=>{
        console.log(response[0])
        res.send(response[0])
    })

   })
    
}

exports.getAllClient=(req,res)=>{
   connection.sync().then(()=>{
    connection.query('select * from elaundromatclients order by id desc').then((response)=>{
        console.log(response[0])
        res.send(response[0])
    })

   })
    
}


exports.create=(req,res)=>{
   
    connection.sync().then(()=>{
        clientModel.create({
	    id:req.body.ID,
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            address:req.body.address,
            description:req.body.description

        }).then((result)=>{
            message=`Dear ${req.body.name},\nThank you for giving us an opportunity and showing interest in the application. We have sent you mail regarding the application details. We request you to go through it.We can have one-on-one demo for which we can be reached at 7709898770 or 9673595625 or sunmit@elaundromat.in \nThanks\neLaundromat`;
            number=req.body.phoneNumber;
            email=req.body.email;
	    myhtml= `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<title>E-Laundromat</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
		<style type="text/css">
			*{
				font-family: 'Rubik', sans-serif !important;
				-webkit-font-smoothing: antialiased;
				-moz-font-smoothing: antialiased;
				font-smoothing: antialiased;
			}
			* {
				-ms-text-size-adjust:100%;
				-webkit-text-size-adjust:none;
				-webkit-text-resize:100%;
				text-resize:100%;
			}
			a{
				outline:none;
				color:#40aceb;
				text-decoration:underline;
			}
		
			a:hover{text-decoration:none !important;}
			.nav a:hover{text-decoration:underline !important;}
			.title a:hover{text-decoration:underline !important;}
			.title-2 a:hover{text-decoration:underline !important;}
			.btn:hover{opacity:0.8;}
			.btn a:hover{text-decoration:none !important;}
			.btn{
				-webkit-transition:all 0.3s ease;
				-moz-transition:all 0.3s ease;
				-ms-transition:all 0.3s ease;
				transition:all 0.3s ease;
			}
			table td {border-collapse: collapse !important;}
			.ExternalClass, .ExternalClass a, .ExternalClass span, .ExternalClass b, .ExternalClass br, .ExternalClass p, .ExternalClass div{line-height:inherit;}
			@media only screen and (max-width:500px) {
				table[class="flexible"]{width:100% !important;}
				table[class="center"]{
					float:none !important;
					margin:0 auto !important;
				}
				*[class="hide"]{
					display:none !important;
					width:0 !important;
					height:0 !important;
					padding:0 !important;
					font-size:0 !important;
					line-height:0 !important;
				}
				td[class="img-flex"] img{
					width:100% !important;
					height:auto !important;
				}
				td[class="aligncenter"]{text-align:center !important;}
				th[class="flex"]{
					display:block !important;
					width:100% !important;
				}
				td[class="wrapper"]{padding:0 !important;}
				td[class="holder"]{padding:30px 15px 20px !important;}
				td[class="nav"]{
					padding:20px 0 0 !important;
					text-align:center !important;
				}
				td[class="h-auto"]{height:auto !important;}
				td[class="description"]{padding:30px 20px !important;}
				td[class="i-120"] img{
					width:120px !important;
					height:auto !important;
				}
				td[class="footer"]{padding:5px 20px 20px !important;}
				td[class="footer"] td[class="aligncenter"]{
					line-height:25px !important;
					padding:20px 0 0 !important;
				}
				tr[class="table-holder"]{
					display:table !important;
					width:100% !important;
				}
				th[class="thead"]{display:table-header-group !important; width:100% !important;}
				th[class="tfoot"]{display:table-footer-group !important; width:100% !important;}
			}
		</style>
	</head>
	<body style="margin:0; padding:0;" bgcolor="#eaeced">
		<table style="min-width:320px;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#eaeced">
			<!-- fix for gmail -->
			<tr>
				<td class="hide">
					<table width="600" cellpadding="0" cellspacing="0" style="width:600px !important;">
						<tr>
							<td style="min-width:600px; font-size:0; line-height:0;">&nbsp;</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td class="wrapper" style="padding:0 10px;">
					
					<!-- module 2 -->
					<table data-module="module-2" data-thumb="thumbnails/02.png" width="100%" cellpadding="0" cellspacing="0">
					
						<tr>
							<td data-bgcolor="bg-module" bgcolor="#eaeced">
								<table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
									
									<tr>
										<td data-bgcolor="bg-block" class="holder" style="padding:40px 60px 40px;" bgcolor="#f9f9f9">
											<table width="100%" cellpadding="0" cellspacing="0">
												<tr>
																<td style="line-height:0;text-align:center">
																	<a target="_blank" style="text-decoration:none;" href="javascript:void(0);"><img src="https://fierce-ravine-40634.herokuapp.com/attachment/logo.png" border="0" style="font:bold 12px/12px Arial, Helvetica, sans-serif; color:#606060;margin-bottom:20px;" align="center" vspace="0" hspace="0" width="auto" height="auto" alt="E-Laundromat" /></a>
																</td>
															</tr>
												<tr>
												
												</tr>	
												<tr>
													<td data-color="title" data-size="size title" data-min="25" data-max="45" data-link-color="link title color" data-link-style="text-decoration:none; color:#292c34;" class="title" align="left" style="font:400 20px/20px Arial, Helvetica, sans-serif; color:#292c34; padding:0 0 24px;">														
														Dear ${req.body.name},
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:400 ; text-decoration:underline; color:#40aceb;" align="left" style="font:400 16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														Thanks you for giving us an opportunity to connect with you and be part of your journey from going offline to online.
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:400  16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														With the digital technology moving at fast pace, it becomes necessary to be part of it and we believe laundry segment should not stay behind.
													</td>
												</tr>
													<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:400  16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														So, with this intention, we have designed and developed the an amazing system called eLaundromat.
													</td>
												</tr>
															<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:400  16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														eLaundromat is an cloud based system to manage your laundry needs. With eLaundromat you get your customers and stockholders on-boarded and create an transparent environment for all.
													</td>
												</tr>
												
											</table>
										</td>
									</tr>
									<tr><td height="28"></td></tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- module 3 -->
					<table data-module="module-3" data-thumb="thumbnails/03.png" width="100%" cellpadding="0" cellspacing="0">
						<tr>
							<td data-bgcolor="bg-module" bgcolor="#eaeced">
								<table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">									
									<tr>
										<td data-bgcolor="bg-block" class="holder" style="padding:40px 60px 40px;" bgcolor="#f9f9f9">
											<table width="100%" cellpadding="0" cellspacing="0">
												<tr>
													<td data-color="title" data-size="size title" data-min="20" data-max="40" data-link-color="link title color" data-link-style="text-decoration:none; color:#292c34;" class="title" align="center" style="font:500 25px/33px Arial, Helvetica, sans-serif; color:#292c34; padding:0 0 24px;">
														So what makes eLaundromat unique?
														<div style="font-size:18px;font-weight:600;">Why eLaundromat?</div>
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:500 18px/29px Arial, Helvetica, sans-serif; color:#4bb8f3; padding:0 0 21px;text-transform: uppercase;">
														01.Customizable according to requirement.
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														ELaundromat can be made tailored made according to your requirements unlike other softwareâ€™s. This will make it familiar, simple and powerful.
													</td>
												</tr>
													<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:500 18px/29px Arial, Helvetica, sans-serif; color:#4bb8f3; padding:0 0 21px;text-transform: uppercase;">
														02.Get Application in form of Web, Mobile and POS
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														eLaundromat comes in 3 forms i.e. Web, Mobile and POS. So you can access as you need and wherever you need.Easy to use.
													</td>
												</tr>
														<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:500 18px/29px Arial, Helvetica, sans-serif; color:#4bb8f3; padding:0 0 21px;text-transform: uppercase;">
														03.Easy to use.
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														Designed with simplicity, eLaundormat is easy to use and operate. You need not hire computer expert or become one to operate the system. Makes your work easy.
													</td>
												</tr>
												
														<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:500 18px/29px Arial, Helvetica, sans-serif; color:#4bb8f3; padding:0 0 21px;text-transform: uppercase;">
														04.Get Payment Online Instantly.
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														We can integrate any payment gateway according to your choice. This allows the customers to make payment online, thus saving customers and your time for payment processing.
													</td>
												</tr>	
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														Currently we have PayTM, RazorPay, PayU money, Insta-Mojo, PayPal, Stripe integrated to our system.
													</td>
												</tr>
												
															<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:500 18px/29px Arial, Helvetica, sans-serif; color:#4bb8f3; padding:0 0 21px;text-transform: uppercase;">
														05.Ease for customers and owners.
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														eLaundromat removes the hassles involved in laundry processing between customer and owner. It enables transparency between customer and owner as the both get to know the process Increase interaction with your Customer Communication with SMS and email integration.
													</td>
												</tr>	
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														You can increase interaction with the customers through SMS and email. Thus the customer can receive instant notifications on their phone numbers when the order is confirmed, when ready for delivery and new offers.Get the performance metrics through reports.
													</td>
												</tr>		
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														Keep track of performance of your laundry business through reports and charts in simple way
													</td>
												</tr>	
													<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:500 18px/29px Arial, Helvetica, sans-serif; color:#4bb8f3; padding:0 0 21px;text-transform: uppercase;">
														06.Backup your data on Cloud.
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														eLaundromat is cloud based so you can access your system from anywhere and there are no chances of systems affecting virus. Also customers can receives the updates and upgrades instantly and also benefit backup.   
													</td>
												</tr>	
															<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:500 18px/29px Arial, Helvetica, sans-serif; color:#4bb8f3; padding:0 0 21px;text-transform: uppercase;">
														07.Hassel free setup.
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														ELaundromat is easy to step-up. Just few clicks and you are ready to go.
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:500 18px/29px Arial, Helvetica, sans-serif; color:#4bb8f3; padding:0 0 21px;text-transform: uppercase;">
														08.Tag Printing
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" align="left" style="font:16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
														Get the tags printed as per the choice and reduce the work load.
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr><td height="28"></td></tr>
								</table>
							</td>
						</tr>
					</table>
					
					<!-- module 5 -->
					<table data-module="module-5" data-thumb="thumbnails/05.png" width="100%" cellpadding="0" cellspacing="0">
						<tr>
							<td data-bgcolor="bg-module" bgcolor="#eaeced">
								<table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
									<tr>
										<td data-bgcolor="bg-block" class="holder" style="padding:40px 60px 40px;" bgcolor="#fff">
											<table width="100%" cellpadding="0" cellspacing="0">
												
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:16px/29px Arial, Helvetica, sans-serif; color:#888; padding:0 0 21px;">
														Since we believe in making the system more user useful, If have any other requirements we are ready to help you out. 
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:16px/29px Arial, Helvetica, sans-serif; color:#888; padding:0 0 21px;">
														In mean time, we are in Bangalore and if you would like to setup an meeting with us we would glad. You can contact us on:
													</td>
												</tr>		
																					
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#000;" align="left" style="font:500 16px/29px Arial, Helvetica, sans-serif; color:#000; padding:0 0 5px;">
														Gaurav : +91 7709898770
													</td>
												</tr>									
													<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#000;" align="left" style="font:500 16px/29px Arial, Helvetica, sans-serif; color:#000; padding:0 0 5px;">
														Sunmit : +91 9673595625
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:16px/29px Arial, Helvetica, sans-serif; color:#888; padding:0 0 21px;">
														Looking forward to be part of your online journey.
													</td>
												</tr>		
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="left" style="font:16px/29px Arial, Helvetica, sans-serif; color:#888; padding:0 0 21px;">
														Thanks,<br/>
														Team eLaundromat
													</td>
												</tr>	
											</table>
										</td>
									</tr>
									<tr><td height="28"></td></tr>
								</table>
							</td>
						</tr>
					</table>				
				</td>
			</tr>
			<!-- fix for gmail -->
			<tr>
				<td style="line-height:0;"><div style="display:none; white-space:nowrap; font:15px/1px courier;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></td>
			</tr>
		</table>
	</body>
</html>`	

            sendMessageandMail((messageSent,mailSent)=>{
               res.send({
		    data:result.dataValues,
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
        from: '"eLaundromat" sendmail@rise-india.com',
        to: email,
        subject: "Get your Laundry on-line and be part of Digital world", // Subject line
        text: "Hello datta how are you and when you are coming to pune", // plain text body
        html: myhtml,
        attachments: [{
            
            path: path.join(__dirname, '../public/attachment/eLaundromat Brochure.pdf'),
            contentType: 'application/pdf'
          }]
        
      };
      transporter.sendMail(mailOptions, function(error, info){
          
        if (error) {
          mailSent=false;
          callback(mailSent)

        } else {

         console.log("thereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",info)
          mailSent=true;
          callback(mailSent)

        }
      });
  
}

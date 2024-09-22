const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/",router);
app.listen(5000,()=>console.log("server listening on ôrt 5000"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS, 
    },

});

contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact",(req,res)=>{
    const {firstName, lasName, email, phone, message} = req.body;
    const mail = {
        from : firstName+" "+lasName,
        to:"********@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `
          <p>Name: ${firstName+ " " +lasName}</p>
          <p>Email: ${email} </p>
          <p>Phone: ${phone} </p>
          <p>Message: ${message} </p>
        `
    }  
    contactEmail.sendMail(mail,(error)=>{
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message Sent" });
      }
  })
  })

 
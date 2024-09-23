const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();


const app = express();
const port = process.eventNames.PORT || 5000
const corsOptions = {
  origin: 'https://portfolio-frontend-w8em.onrender.com', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow cookies to be sent if needed
  optionsSuccessStatus: 200 // For older browsers
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/",router);
app.listen(port,()=>console.log("server listening on oort 5000"));
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

 

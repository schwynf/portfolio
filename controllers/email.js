const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../models");
const nodemailer = require('nodemailer');

router.post("/email", async function (req, res, next) {
   try {
    await db.Email.create(req.body);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
      auth: {
        user: "schwynf@gmail.com", 
        pass: process.env.GMAIL, 
      },
    });
  
    let info = await transporter.sendMail({
      from: `${req.body.email}`,
      to: "schwynf@gmail.com", 
      subject: `${req.body.name}`,
      text: `${req.body.message}`,
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.json("schwyn");
       
   } catch (error) {
       console.log(error)
   }
});

router.get("/email", async function (req, res, next) {
    passport.authenticate("swagggg", async function (err, mongoUser, info) {
        try {
            if (mongoUser) {
                console.log("Access granted for user with swagggg");
                let data = await db.Email.find({})
                res.json(data);
            } else {
                console.log("Access denied for user with swagggg");
                res.json({ loggedIn: false });
            }   
        } catch (error) {
            console.log(error);
        }
    })(req, res, next);
});

module.exports = router;
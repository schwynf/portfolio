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
            user: 'schwynf@gmail.com',
            pass: 'cool'
        }
    });
    let mailOptions = {
        from: req.body.email,
        to: "schwynf@gmail.com",
        subject: '',
        html: '<h1>New Email</h1><p>That was easy!</p>'
    };
    let data = transporter.sendMail(mailOptions);
    console.log(data)
    res.json(data);
       
   } catch (error) {
       console.log(error)
   }
})

router.get("/email", async function (req, res, next) {
    passport.authenticate("swagggg", async function (err, mongoUser, info) {
        try {
            if (mongoUser) {
                console.log("Access granted for user with swagggg");
                let data = await db.User.find({ email: mongoUser.email }).populate("leagues");
                res.json(data[0]);
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